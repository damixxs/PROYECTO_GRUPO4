function enterCatalog() {
  const landingScreen = document.getElementById('landing-screen');
  const catalogScreen = document.getElementById('catalog-screen');

  if (landingScreen && catalogScreen) {
    landingScreen.style.display = 'none';
    catalogScreen.style.display = 'block';
  }
}