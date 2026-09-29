// js/reproductor.js
document.querySelectorAll('.modal').forEach((modal) => {
  const iframe = modal.querySelector('iframe[data-src]');
  if (!iframe) return;

  modal.addEventListener('show.bs.modal', () => {
    iframe.src = iframe.dataset.src;
  });

  modal.addEventListener('hidden.bs.modal', () => {
    iframe.src = '';
  });
});