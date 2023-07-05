/* Add class to body by URL */
window.addEventListener('DOMContentLoaded', function() {
  var body = document.querySelector('body');
  var urlMappings = {
    'home': 'sre-body-home',
    'shop': 'sre-body-shop',
    'services': 'sre-body-services',
    'login': 'sre-body-login'
  };
  
  var currentUrl = window.location.href.toLowerCase();
  var bodyClass = 'sre-body-home';
  
  Object.keys(urlMappings).forEach(function(key) {
    if (currentUrl.indexOf(key) !== -1) {
      bodyClass = urlMappings[key];
    }
  });
  
  body.classList.add(bodyClass);
  body.id = 'sre';
});

/* Tabs for Home */
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

/* Dynamic editable links */
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

/* Cards for porducts in home */
// Obtén todos los elementos que representan las cards
const cardElements = document.getElementsByClassName('o_carousel_product_card');

// Recorre cada card y realiza la solicitud para obtener la información correspondiente
Array.from(cardElements).forEach(card => {
  // Obtén la URL relativa de la card
  const relativeUrl = card.querySelector('a.o_carousel_product_img_link').getAttribute('href');

  // Agrega el dominio del sitio web a la URL relativa
  const url = new URL(relativeUrl, 'https://sisterlyrealestate.com').href;
  console.log(url);

  // Realiza la solicitud a la URL de la card
  fetch(url)
    .then(response => response.text())
    .then(data => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(data, 'text/html');

      // Ejemplo de búsqueda de elementos con diferentes valores de data-oe-id
      const selector = 'span[data-oe-model="product.template.attribute.value"]';
      const elementos = doc.querySelectorAll(selector);

      // Recorre todos los elementos encontrados y muestra su contenido
      elementos.forEach(elemento => {
        const contenido = elemento.textContent;
        console.log(contenido);
      });
    })
    .catch(error => {
      console.error('Error:', error);
    });
});
