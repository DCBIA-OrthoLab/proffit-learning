async function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

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