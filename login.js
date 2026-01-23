async function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Mode développement - bypass pour test local
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        // Connexion de test en local
        if (username.length > 0 && password.length > 0) {
            localStorage.setItem("token", "dev_token_" + username + "_" + Date.now());
            window.location.href = "modules.html";
            return;
        } else {
            document.getElementById("loginBtn").style.border = "2px solid red";
            setTimeout(() => {
                document.getElementById("loginBtn").style.border = "2px solid rgba(91, 214, 255, 0.705)";
            }, 500);
            return;
        }
    }

    // Mode production - authentification Netlify
    try {
        const response = await fetch("/.netlify/functions/authenticate", {
            method: "POST",
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();

        if (data.success) {
            localStorage.setItem("token", data.token);
            window.location.href = "modules.html";
        } 
        
        else {
            document.getElementById("loginBtn").style.border = "2px solid red";
            setTimeout(() => {
                document.getElementById("loginBtn").style.border = "2px solid rgba(91, 214, 255, 0.705)";
            }, 500);
        }
    } catch (error) {
        console.error("Erreur serveur", error);
        document.getElementById("loginBtn").style.border = "2px solid red";
    }
}