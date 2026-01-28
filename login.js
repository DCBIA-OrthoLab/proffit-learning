async function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const loginBtn = document.getElementById("loginBtn");

    // Vérifier que username et password sont exactement "test"
    if (username === "test" && password === "test") {
        loginBtn.disabled = true;
        loginBtn.style.opacity = "0.6";
        await new Promise(resolve => setTimeout(resolve, 500));
        localStorage.setItem("token", "auth_token_" + Date.now());
        window.location.href = "modules.html";
        return;
    } else {
        loginBtn.disabled = false;
        showError(loginBtn);
    }
}

function showError(loginBtn) {
    loginBtn.style.borderColor = "#ff6b9d";
    loginBtn.style.background = "rgba(255, 107, 157, 0.15)";
    setTimeout(() => {
        loginBtn.style.borderColor = "rgba(91, 214, 255, 0.5)";
        loginBtn.style.background = "linear-gradient(135deg, rgba(91, 214, 255, 0.9) 0%, rgba(91, 214, 255, 0.7) 100%)";
    }, 1500);
}

// Backward compatibility
async function login() {
    const event = new Event('submit');
    document.querySelector('.login-form').dispatchEvent(event);
}