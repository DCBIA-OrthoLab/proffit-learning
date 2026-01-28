async function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const loginBtn = document.getElementById("loginBtn");

    // Check if account is blocked
    const blockTime = localStorage.getItem("loginBlockTime");
    if (blockTime) {
        const now = Date.now();
        const blockedUntil = parseInt(blockTime);
        const timeRemaining = Math.ceil((blockedUntil - now) / 1000);
        
        if (now < blockedUntil) {
            const minutes = Math.floor(timeRemaining / 60);
            const seconds = timeRemaining % 60;
            showError(loginBtn, `Account blocked. Try again in ${minutes}m ${seconds}s`);
            loginBtn.disabled = true;
            return;
        } else {
            // Blocking has expired
            localStorage.removeItem("loginBlockTime");
            localStorage.removeItem("loginAttempts");
        }
    }

    // Check failed attempts
    const attempts = parseInt(localStorage.getItem("loginAttempts") || "0");
    if (attempts >= 3) {
        // Block for 5 minutes (300000 ms)
        const blockUntil = Date.now() + 5 * 60 * 1000;
        localStorage.setItem("loginBlockTime", blockUntil.toString());
        showError(loginBtn, "Too many attempts. Account locked for 5 minutes.");
        loginBtn.disabled = true;
        return;
    }

    // Check that username and password are exactly "test"
    if (username === "test" && password === "test") {
        loginBtn.disabled = true;
        loginBtn.style.opacity = "0.6";
        await new Promise(resolve => setTimeout(resolve, 500));
        localStorage.removeItem("loginAttempts");
        localStorage.removeItem("loginBlockTime");
        localStorage.setItem("token", "auth_token_" + Date.now());
        window.location.href = "modules.html";
        return;
    } else {
        // Increment failed attempts
        const newAttempts = attempts + 1;
        localStorage.setItem("loginAttempts", newAttempts.toString());
        loginBtn.disabled = false;
        showError(loginBtn, `Incorrect credentials. (${newAttempts}/3 attempts)`);
    }
}

function showError(loginBtn, message = "Incorrect credentials.") {
    loginBtn.style.borderColor = "#ff6b9d";
    loginBtn.style.background = "rgba(255, 107, 157, 0.15)";
    
    // Afficher le message d'erreur
    const existingError = document.querySelector(".error-message");
    if (existingError) {
        existingError.remove();
    }
    
    const errorMsg = document.createElement("div");
    errorMsg.className = "error-message";
    errorMsg.textContent = message;
    document.querySelector(".login-form").appendChild(errorMsg);
    
    setTimeout(() => {
        loginBtn.style.borderColor = "rgba(91, 214, 255, 0.5)";
        loginBtn.style.background = "linear-gradient(135deg, rgba(91, 214, 255, 0.9) 0%, rgba(91, 214, 255, 0.7) 100%)";
        errorMsg.remove();
    }, 1500);
}

// Backward compatibility
async function login() {
    const event = new Event('submit');
    document.querySelector('.login-form').dispatchEvent(event);
}

// Check blocking status on page load and update countdown
document.addEventListener('DOMContentLoaded', function() {
    function updateBlockStatus() {
        const blockTime = localStorage.getItem("loginBlockTime");
        const loginBtn = document.getElementById("loginBtn");
        let errorMsg = document.querySelector(".error-message");
        
        if (blockTime) {
            const now = Date.now();
            const blockedUntil = parseInt(blockTime);
            
            if (now < blockedUntil) {
                const timeRemaining = Math.ceil((blockedUntil - now) / 1000);
                const minutes = Math.floor(timeRemaining / 60);
                const seconds = timeRemaining % 60;
                loginBtn.disabled = true;
                
                // Create error message if it doesn't exist
                if (!errorMsg) {
                    errorMsg = document.createElement("div");
                    errorMsg.className = "error-message";
                    const form = document.querySelector('.login-form');
                    form.appendChild(errorMsg);
                }
                
                // Update text without recreating element
                errorMsg.textContent = `Account blocked. Try again in ${minutes}m ${seconds}s`;
                
                // Update every second
                setTimeout(updateBlockStatus, 1000);
            } else {
                // Blocking has expired
                localStorage.removeItem("loginBlockTime");
                localStorage.removeItem("loginAttempts");
                loginBtn.disabled = false;
                if (errorMsg) {
                    errorMsg.remove();
                }
            }
        }
    }
    
    updateBlockStatus();
});