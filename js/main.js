function enterCatalog() {
  const landingScreen = document.getElementById('landing-screen');
  const catalogScreen = document.getElementById('catalog-screen');

  if (landingScreen && catalogScreen) {
    landingScreen.style.display = 'none';
    catalogScreen.style.display = 'block';
  }
}
const buscador = document.getElementById('buscador');
const peliculas = document.querySelectorAll('.movie-card');

buscador.addEventListener('input', function () {
    const texto = buscador.value.toLowerCase();

    peliculas.forEach(function (pelicula) {
        const titulo = pelicula.dataset.title.toLowerCase();

        if (titulo.includes(texto)) {
            pelicula.style.display = '';
        } else {
            pelicula.style.display = 'none';
        }
    });
});