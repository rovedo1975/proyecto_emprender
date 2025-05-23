document.querySelector('#contacto form').addEventListener('submit', function(e) {
  e.preventDefault();

   const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;

  if (!nombre || !email) {
    alert("Por favor completa los campos requeridos (Nombre y Email)");
    return;
  }

  // Show confirmation
  const confirmation = `
    <div class="alert alert-success mt-3">
      <i class="bi bi-check-circle-fill"></i> 
      ¡Gracias por tu mensaje, ${nombre}! Te responderemos a ${email} pronto.
    </div>
  `;
  
  this.insertAdjacentHTML('afterend', confirmation);
  this.reset(); // Clear form
  
  // Remove message after 5 seconds
  setTimeout(() => {
    document.querySelector('.alert-success')?.remove();
  }, 8000);
});