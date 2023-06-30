window.addEventListener('DOMContentLoaded', function() {
  var body = document.querySelector('body');
  var urlMappings = {
    'home': 'sre-body-home',
    'shop': 'sre-body-shop',
    'services': 'sre-body-services'
  };
  
  var currentUrl = window.location.href.toLowerCase();
  var bodyClass = 'sre-home';
  
  Object.keys(urlMappings).forEach(function(key) {
    if (currentUrl.indexOf(key) !== -1) {
      bodyClass = urlMappings[key];
    }
  });
  
  body.classList.add(bodyClass);
  body.id = 'sre';
});



function openTab(event, tabId) {
  var i, tabcontent, tablinks;

  // Oculta todos los contenidos de las pestañas
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Elimina la clase "active" de los botones de las pestañas
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Muestra el contenido de la pestaña seleccionada y marca el botón como activo
  document.getElementById(tabId).style.display = "flex";
  event.currentTarget.className += " active";
}

var editLinks = document.querySelectorAll('[data-action="edit"]');
for (var i = 0; i < editLinks.length; i++) {
  editLinks[i].addEventListener('click', function() {
    setTimeout(function() {
      var links = document.getElementsByTagName('link');
      for (var i = 0; i < links.length; i++) {
        var href = links[i].getAttribute('href');
        links[i].setAttribute('href', href);
      }
    }, 3000);
  });
}