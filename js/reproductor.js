feature/reproductor-catalog-links
document.addEventListener('DOMContentLoaded', function () {
  // Cuando cualquier modal se va a mostrar
  const modals = document.querySelectorAll('.modal');
  
  modals.forEach(function (modal) {
    modal.addEventListener('show.bs.modal', function () {
      const iframe = modal.querySelector('iframe');
      if (iframe && iframe.getAttribute('data-src')) {
        iframe.setAttribute('src', iframe.getAttribute('data-src'));
      }
    });

    // Cuando el modal se cierra, vaciamos el src para detener la reproducción
    modal.addEventListener('hidden.bs.modal', function () {
      const iframe = modal.querySelector('iframe');
      if (iframe) {
        iframe.removeAttribute('src');
      }
    });
// js/reproductor.js
document.querySelectorAll('.modal').forEach((modal) => {
  const iframe = modal.querySelector('iframe[data-src]');
  if (!iframe) return;

  modal.addEventListener('show.bs.modal', () => {
    iframe.src = iframe.dataset.src;
  });

  modal.addEventListener('hidden.bs.modal', () => {
    iframe.src = '';
develop
  });
});