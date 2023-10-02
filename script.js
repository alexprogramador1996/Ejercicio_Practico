document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registrationForm");
    const loginForm = document.getElementById("loginForm");

    registrationForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        if (nombre.trim() === "") {
            alert("Por favor, ingrese su nombre.");
            return;
        }

        if (!isValidEmail(email)) {
            alert("Por favor, ingrese una dirección de correo electrónico válida.");
            return;
        }

        if (password.length < 6) {
            alert("La contraseña debe tener al menos 6 caracteres.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Las contraseñas no coinciden.");
            return;
        }

        alert("Registro de usuario exitoso.");
        registrationForm.reset();
    });

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const loginEmail = document.getElementById("loginEmail").value;
        const loginPassword = document.getElementById("loginPassword").value;

        if (!isValidEmail(loginEmail)) {
            alert("Por favor, ingrese una dirección de correo electrónico válida.");
            return;
        }

        if (loginPassword.length < 6) {
            alert("La contraseña debe tener al menos 6 caracteres.");
            return;
        }

        alert("Inicio de sesión exitoso.");
        loginForm.reset();
    });

    function isValidEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(email);
    }
});
// Supongamos que obtienes el nombre de usuario desde tu sistema de inicio de sesión.
const userName = "Alex"; // Cambia esto con el nombre real del usuario

// Mostrar el menú de usuario y establecer el nombre del usuario
document.getElementById("user-menu").style.display = "block";
document.getElementById("user-name").textContent = userName;