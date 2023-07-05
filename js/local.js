window.addEventListener('DOMContentLoaded', function() {
  // Obtiene todas las imágenes en la página
  var images = document.getElementsByTagName('img');
  
  // Recorre cada imagen y modifica su atributo src
  for (var i = 0; i < images.length; i++) {
    var imgSrc = images[i].getAttribute('src');
    
    // Verifica si la ruta de la imagen comienza con "/web"
    if (imgSrc.startsWith('/web')) {
      // Agrega el dominio al inicio de la ruta de la imagen
      var domain = 'https://sisterlyrealestate.com';
      images[i].setAttribute('src', domain + imgSrc);
    }
  }
});