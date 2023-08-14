window.addEventListener('DOMContentLoaded', function() {
  // Obtiene todas las imágenes, videos y links en la página
  var images = document.getElementsByTagName('img');
  var videos = document.getElementsByTagName('source');
  var links = document.getElementsByTagName('a');
  
  // Recorre cada imagen y modifica su atributo src
  for (var i = 0; i < images.length; i++) {
    var imgSrc = images[i].getAttribute('src');
    
    // Verifica si la ruta de la imagen comienza con "/web"
    if (imgSrc.startsWith('/web')) {
      // Agrega el dominio al inicio de la ruta de la imagen
      var domain = 'https://sistersandrealestate.com';
      images[i].setAttribute('src', domain + imgSrc);
    }
  }
  
  // Recorre cada video y modifica su atributo src
  for (var j = 0; j < videos.length; j++) {
    var videoSrc = videos[j].getAttribute('src');
    
    // Verifica si la ruta del video comienza con "/web"
    if (videoSrc.startsWith('/web')) {
      // Agrega el dominio al inicio de la ruta del video
      var domain = 'https://sistersandrealestate.com';
      videos[j].setAttribute('src', domain + videoSrc);
    }
  }
  
  // Recorre cada enlace <a> y modifica su atributo href
  for (var k = 0; k < links.length; k++) {
    var linkHref = links[k].getAttribute('href');
    
    // Verifica si la ruta del enlace comienza con "/web"
    if (linkHref.startsWith('/web')) {
      // Agrega el dominio al inicio de la ruta del enlace
      var domain = 'https://sistersandrealestate.com';
      links[k].setAttribute('href', domain + linkHref);
    }
  }
});
