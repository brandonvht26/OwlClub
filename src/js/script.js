function scrollGaleria(direccion) {
  const galeria = document.getElementById('galeria');
  const imagen = galeria.querySelector('img');
  const estilo = window.getComputedStyle(imagen);
  const margenDerecho = parseInt(estilo.marginRight) || 10; // por si hay margen
  const anchoImagen = imagen.offsetWidth + margenDerecho;

  galeria.scrollLeft += direccion * anchoImagen;
}
