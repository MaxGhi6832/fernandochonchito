// Manejo del formulario de login
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario recargue la página
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const error = document.getElementById("error");
  
    // Credenciales correctas
    const correctUsername = "fernando"; // Cambia esto por tu nombre de usuario
    const correctPassword = "1234"; // Cambia esto por tu contraseña
  
    if (username === correctUsername && password === correctPassword) {
      // Redirige a fernando.html si las credenciales son correctas
      window.location.href = "fernando.html";
    } else {
      // Muestra un mensaje de error si las credenciales son incorrectas
      error.textContent = "Nombre de usuario o contraseña incorrectos. Inténtalo nuevamente.";
      error.style.display = "block";
    }
  });
  
  
