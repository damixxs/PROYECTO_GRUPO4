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
const sinResultados = document.getElementById('sin-resultados');

buscador.addEventListener('input', function () {
    const texto = buscador.value.toLowerCase();
     let encontrados = 0;

    peliculas.forEach(function (pelicula) {
        const titulo = pelicula.dataset.title.toLowerCase();

        if (titulo.includes(texto)) {
            pelicula.style.display = '';
            encontrados++;
        } else {
            pelicula.style.display = 'none';
        }
    });
    if (encontrados === 0) {
        sinResultados.classList.remove('d-none');
    } else {
        sinResultados.classList.add('d-none');
    }
});