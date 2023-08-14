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

// Verificar si estamos en la página de inicio (home)
if (window.location.href === 'https://sistersandrealestate.com/' || window.location.href === 'https://sistersandrealestate.com/#scrollTop=0' ) {
  // Esperar 1.5 segundos después de que todo el contenido se haya cargado
  window.addEventListener('load', () => {
    setTimeout(() => {
      /* Cards for products in home */
      // Obtén todos los elementos que representan las cards
      const cardElements = document.getElementsByClassName('o_carousel_product_card');

      // Recorre cada card y realiza la solicitud para obtener la información correspondiente
      Array.from(cardElements).forEach(card => {
        // Obtén la URL relativa de la card
        const relativeUrl = card.querySelector('a.o_carousel_product_img_link').getAttribute('href');

        // Agrega el dominio del sitio web a la URL relativa
        const url = new URL(relativeUrl, 'https://sistersandrealestate.com').href;

        // Realiza la solicitud a la URL de la card
        fetch(url)
          .then(response => response.text())
          .then(data => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, 'text/html');

            // Obtén la información de nRoms, nBathrooms y nGarages
            const nRomsElement = doc.querySelector('span[data-oe-id="207"]');
            const nBathroomsElement = doc.querySelector('span[data-oe-id="208"]');
            const nGaragesElement = doc.querySelector('span[data-oe-id="209"]');

            // Obtén el contenido de los elementos
            const nRoms = nRomsElement ? nRomsElement.textContent : 'N/A';
            const nBathrooms = nBathroomsElement ? nBathroomsElement.textContent : 'N/A';
            const nGarages = nGaragesElement ? nGaragesElement.textContent : 'N/A';

            // Crea la estructura HTML con la información de la tarjeta
            const cardInfoHTML = `
              <div class="o_colored_level" id="sre-home-section-cards-web-scrapping">
                <div class="sre-container-fluid">
                  <div class="sre-row">
                    <div class="sre-content">
                      <div class="sre-content__item sre-content__item-rooms">
                        <img src="/web/image/2693-23f8716a/rooms%404x.png" alt="Numero de Habitaciones" title="Numero de Habitaciones, Sisters and Real Estate">
                        <span>${nRoms}</span>
                      </div>
                      <div class="sre-content__item sre-content__item-baths">
                        <img src="/web/image/2691-94bd879c/bathrooms%404x.png" alt="Numero de Baños" title="Numero de Baños, Sisters and Real Estate">
                        <span>${nBathrooms}</span>
                      </div>
                      <div class="sre-content__item sre-content__item-garag">
                        <img src="/web/image/2692-ab1c0bf7/garages%404x.png" alt="Numero de Garajes" title="Numero de Garajes, Sisters and Real Estate">
                        <span>${nGarages}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            `;

            // Encuentra el elemento "div" con la clase "card-title h5"
            const cardTitleElement = card.querySelector('.card-title.h5');

            // Inserta la estructura HTML justo después del elemento "div" de título
            cardTitleElement.insertAdjacentHTML('afterend', cardInfoHTML);
          })
          .catch(error => {
            console.error('Error:', error);
          });
      });
    }, 3000); // Espera 3 segundos antes de ejecutar el script
  });
}

// Define la función que realizará la inserción del contenido
function insertProductDetails() {
  // Obtén los elementos span con la información
  const nRomsElementProduct = document.querySelector('span[data-oe-id="207"]').textContent;
  const nBathroomsElementProduct = document.querySelector('span[data-oe-id="208"]').textContent;
  const nGaragesElementProduct = document.querySelector('span[data-oe-id="209"]').textContent;
  const nOperationElementProduct = document.querySelector('span[data-oe-id="216"]').textContent;

  // Crea la estructura HTML
  const newContent = `
  <div class="o_colored_level" id="sre-product-details-info-icons">
    <div class="sre-container-fluid">
      <div class="sre-row">
        <div class="sre-content">
          <div class="sre-content__item sre-content__item-rooms">
            <img src="/web/image/2693-23f8716a/rooms%404x.png" alt="Numero de Habitaciones" title="Numero de Habitaciones, Sisters and Real Estate">
            <h2>Habitaciones</h2>
            <span>${nRomsElementProduct}</span>
          </div>
          <div class="sre-content__item sre-content__item-baths">
            <img src="/web/image/2691-94bd879c/bathrooms%404x.png" alt="Numero de Baños" title="Numero de Baños, Sisters and Real Estate">
            <h2>Baños</h2>
            <span>${nBathroomsElementProduct}</span>
          </div>
          <div class="sre-content__item sre-content__item-garag">
            <img src="/web/image/2692-ab1c0bf7/garages%404x.png" alt="Numero de Garajes" title="Numero de Garajes, Sisters and Real Estate">
            <h2>Garajes</h2>
            <span>${nGaragesElementProduct}</span>
          </div>
        </div>
        <div class="sre-content__operation">
          <h2>${nOperationElementProduct}</h2>
        </div>
      </div>
    </div>
  </div>
  `;

  // Encuentra el elemento h1 al que quieres agregar la nueva estructura
  const h1Element = document.querySelector('#product_details h1');

  // Crea un elemento div y establece su contenido como la nueva estructura HTML
  const newDiv = document.createElement('div');
  newDiv.innerHTML = newContent;

  // Inserta el nuevo div justo después del elemento h1
  h1Element.parentNode.insertBefore(newDiv, h1Element.nextSibling);
}

// Espera a que se cargue todo el contenido y luego llama a la función
document.addEventListener('DOMContentLoaded', insertProductDetails);
