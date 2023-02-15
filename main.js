const products = [
  {
    name: 'ASUS ROG Strix G15 G513RM-HQ012 AMD Ryzen 7 6800H/16GB/1TB SSD/RTX3060/15.6"',
    price: 1299,
    stars: 4.5,
    reviews: 219,
    seller: 'PcComponentes',
    image:
      'https://thumb.pccomponentes.com/w-530-530/articles/1031/10317957/1580-asus-rog-strix-g15-g513rm-hq012-amd-ryzen-9-6800h-16gb-1tb-ssd-rtx3060-156.jpg',
    link:
      'https://www.pccomponentes.com/asus-rog-strix-g15-g513rm-hq012-amd-ryzen-7-6800h-16gb-1tb-ssd-rtx3060-156',
    stock: true,
    promo: true,
  },
  {
    name: 'HP 15S-FQ5013NS Intel Core i5-1235U/8GB/512GB SSD/15.6"',
    price: 699,
    stars: 4.5,
    reviews: 56,
    seller: 'PcComponentes',
    image:
      'https://thumb.pccomponentes.com/w-530-530/articles/1042/10428549/1392-hp-15s-fq5013ns-intel-core-i5-1235u-8gb-512gb-ssd-156.jpg',
    link:
      'https://www.pccomponentes.com/hp-15s-fq5013ns-intel-core-i5-1235u-8gb-512gb-ssd-156',
    stock: true,
    promo: false,
  },
  {
    name: 'Lenovo ThinkBook 15 G2 ITL Intel Core i5-1135G7/16 GB/512GB SSD/15.6"',
    price: 1049.46,
    stars: 4.5,
    reviews: 4,
    seller: 'Locurainformatica',
    image:
      'https://thumb.pccomponentes.com/w-530-530/articles/1065/10650375/1374-lenovo-thinkbook-15-g2-itl-intel-core-i5-1135g7-16-gb-512gb-ssd-156.jpg',
    link:
       'https://www.pccomponentes.com/lenovo-thinkbook-15-g2-itl-intel-core-i5-1135g7-16-gb-512gb-ssd-156',
    stock: true,
    promo: true,
  },
  {
    name: 'Gigabyte U4 UD-50ES823SO Intel Core i5-1155G7/16GB/512GB SSD/14"',
    price: 712.55,
    stars: 4.5,
    reviews: 8,
    seller: 'OCASIONA',
    image:
      'https://thumb.pccomponentes.com/w-530-530/articles/1058/10587710/1121-gigabyte-u4-ud-50es823so-intel-core-i5-1155g7-8gb-512gb-ssd-14.jpg',
    link:
       'https://www.pccomponentes.com/gigabyte-u4-ud-50es823so-intel-core-i5-1155g7-16gb-512gb-ssd-14',
    stock: true,
    promo: true,
  },
  {
    name: 'Gigabyte AORUS 17 XE4-73ES514SH Intel Core i7-12700H/16GB/1TB SSD/RTX 3070Ti/17.3"',
    price: 1682.52,
    stars: 5,
    reviews: 23,
    seller: 'Procomp Team',
    image:
      'https://thumb.pccomponentes.com/w-530-530/articles/1043/10431334/1444-gigabyte-aorus-17-xe4-73es514sh-intel-core-i7-12700h-16gb-1tb-ssd-rtx-3070ti-173.jpg',
    link:
       'https://www.pccomponentes.com/gigabyte-aorus-17-xe4-73es514sh-intel-core-i7-12700h-16gb-1tb-ssd-rtx-3070ti-173',
    stock: false,
    promo: true,
  },
  {
    name: 'ASUS VivoBook Flip TP470EA-EC402W Intel Core i5-1135G7/8GB/512GB SSD/14" Táctil',
    price: 802.16,
    stars: 4,
    reviews: 26,
    seller: 'OCASIONA',
    image:
      'https://thumb.pccomponentes.com/w-530-530/articles/1027/10273328/1319-asus-vivobook-flip-tp470ea-ec402w-intel-core-i5-1135g7-8gb-512gb-ssd-14-tactil.jpg',
    link:
       'https://www.pccomponentes.com/asus-vivobook-flip-tp470ea-ec402w-intel-core-i5-1135g7-8gb-512gb-ssd-14-tactil',
    stock: true,
    promo: true,
  },
  {
    name: 'ASUS Zenbook 14 OLED UX3402ZA-KM020W Intel Evo Core i5-1240P/16GB/512GB SSD/14"',
    price: 1022.05,
    stars: 4.5,
    reviews: 5,
    seller: 'Locurainformatica',
    image:
      'https://thumb.pccomponentes.com/w-530-530/articles/1062/10622694/1735-asus-zenbook-14-oled-ux3402za-km020w-intel-core-i5-1240p-16gb-512gb-ssd-14.jpg',
    link:
       'https://www.pccomponentes.com/asus-zenbook-14-oled-ux3402za-km020w-intel-evo-core-i5-1240p-16gb-512gb-ssd-14?offer=d0f56ffd-e029-4a8d-961d-3391c58a863b',
    stock: true,
    promo: true,
  },
  {
    name: 'HP 15S-fq5075ns Intel Core i5-1235U/8GB/512GB SSD/15.6"',
    price: 509,
    stars: 4,
    reviews: 1,
    seller: 'PcComponentes',
    image:
      'https://thumb.pccomponentes.com/w-530-530/articles/1057/10579923/1358-hp-15s-fq5075ns-intel-core-i5-1235u-8gb-512gb-ssd-156.jpg',
    link:
       'https://www.pccomponentes.com/hp-15s-fq5075ns-intel-core-i5-1235u-8gb-512gb-ssd-156',
    stock: true,
    promo: true,
  },
  {
    name: 'Prixton Flex Pro Intel Celeron N4020/4GB/64GB/11.6" Táctil',
    price: 249.94,
    stars: 4,
    reviews: 44,
    seller: 'PRIXTON',
    image:
      'https://thumb.pccomponentes.com/w-530-530/articles/25/257283/169-prixton-flex-pro-intel-apollo-lake-n3350-4gb-64gb-116-tactil.jpg',
    link:
      'https://www.pccomponentes.com/prixton-flex-pro-intel-celeron-n4020-4gb-64gb-116-tactil',
    stock: false,
    promo: true,
  },
  {
    name: 'ASUS Laptop M515DA AMD Ryzen 5 3500U/12GB/512GB SSD/15.6" (PT)',
    price: 914.44,
    stars: 0,
    reviews: 0,
    seller: 'UDI',
    image:
      'https://thumb.pccomponentes.com/w-530-530/articles/1063/10636787/1667-asus-laptop-m515da-amd-ryzen-5-3500u-12gb-512gb-ssd-156-pt-ece2bb12-45d9-46bd-a76b-860ff9789d2e.jpg',
    link:
       'https://www.pccomponentes.com/asus-laptop-m515da-amd-ryzen-5-3500u-12gb-512gb-ssd-156-pt',
    stock: false,
    promo: false,
  },
];

const headerElement = document.querySelector('header');
const filtersSection = document.querySelector('.filters-section');
const productsSection = document.querySelector('.products-section');
const productsContainer = document.createElement('ul');
productsSection.append(productsContainer);
productsContainer.className = 'products-container';
const messageContainer = document.createElement('div');
messageContainer.className = 'message-container';
productsSection.append(messageContainer);

const headerTemplate = `
<figure class="logo-container">
<a href="https://www.pccomponentes.com/" target="blank" rel="noopener noreferrer">
<img src="./src/assets/images/logo-pccomponentes.svg" alt="Logo PcComponentes" class="logo"/>
</a>
</figure>

<div class="search-container">
<input type="text" placeholder="Busca en PcComponentes..." class="header-input"></input>
<a href="#" target="blank" rel="noopener noreferrer">
<img src="./src/assets/images/search-icon.png" alt="Search Icon" class="nav-img"/>
</a>
</div>

<nav class="shopping-navbar">
  <a href="https://www.pccomponentes.com/compromisos"><img src="./src/assets/images/commintment-icon.png" alt="comminment-icon" class="nav-img"/></a>
  <a href="https://www.pccomponentes.com/compromisos" class="nav-text">Compromisos</a>
  <a href="https://www.pccomponentes.com/login"><img src="./src/assets/images/user-icon.png" alt="User Icon" class="nav-img"/></a>
  <a href="https://www.pccomponentes.com/login" class="nav-text">Mi cuenta</a>
  <a href="#"><img src="./src/assets/images/shopping-cart-icon.png" alt="Shopping Cart Icon" class="nav-img"/></a>
  <a href="#" class="nav-text">Mi carrito</a>
  </nav>
`;
headerElement.innerHTML = headerTemplate;

const filtersTemplate = `
<div class="filters-title">Filtros<div>
<div class="filter-container">
<label for="seller">Vendedor</label>
<select>
<option value="empty"> </option>
</select>
</div>

<div class="filter-container">
<label for="price">Precio máximo
<input type="number" class="price-input">
<button>Buscar</button>
</label>
</div>
`;
filtersSection.innerHTML = filtersTemplate;

const selectElement = document.querySelector('select');

const printFilters = () => {
  const sellersList = [];
  products.forEach((product) => {
    if (!sellersList.includes(product.seller)) {
      sellersList.push(product.seller);
    }
  });

  sellersList.sort();

  sellersList.forEach((item) => {
    const uniqueSeller = item;
    const optionElement = document.createElement('option');
    selectElement.append(optionElement);
    optionElement.value = uniqueSeller;
    optionElement.innerText += uniqueSeller;
  });
};

printFilters();

const printProducts = (products) => {
  products.forEach((product) => {
    const productTemplate = `
        <li class="product-card">
        <a href="${product.link}" target="blank" rel="noopnener noreferrer">
        <img src="${product.image}" alt="${product.name}" class="product-img">
        <p>${product.name}</p>
        <div class="price-info">
        <p class="price">${product.price}€</p>
        <span class="promo">${product.promo ? 'OFERTA' : ''}</span>
        </div>
        <p class="stars">Valoración: ${product.stars}/5 (${product.reviews})</p>
        <p class="stock">Disponibilidad: ${
          product.stock ? 'recíbelo mañana' : 'recíbelo antes de 7 días'
        }</p>
        <p class="seller">Vendido y enviado por: ${product.seller}</p>
        </a>
        </li>
`;
    productsContainer.innerHTML += productTemplate;
  });
};

printProducts(products);

const maxPrice = document.querySelector('.price-input');

const handleFilter = () => {
  const sellerSelected = selectElement.options[selectElement.selectedIndex].value;
  const productCards = document.querySelectorAll('.product-card');

  const sellerFilter = products.filter((product) => product.seller === sellerSelected);
  const priceFilter = products.filter((product) => product.price <= maxPrice.value);
  const allFilter = products.filter(
    (product) => product.seller === sellerSelected && product.price <= maxPrice.value
  );
  const noResults = products.filter(
    (product) => product.price > maxPrice.value || product.seller != sellerSelected
  );

  if (maxPrice.value === '' && sellerSelected !== 'empty') {
    productCards.forEach((productCard) => productCard.remove());
    printProducts(sellerFilter);
  } else if (sellerSelected === 'empty' && maxPrice.value !== '') {
    productCards.forEach((productCard) => productCard.remove());
    printProducts(priceFilter);
  } else if (sellerSelected !== 'empty' && maxPrice.value !== '') {
    productCards.forEach((productCard) => productCard.remove());
    printProducts(allFilter);
  }
  if (noResults) {
    console.log('mensaje no results');
    productsSection.append(messageContainer);
    messageContainer.innerHTML =
      'Lo sentimos. No hay artículos con las características seleccionadas.';
  }
};

const searchButton = document.querySelector('button');
searchButton.addEventListener('click', handleFilter);

const cleanButton = document.createElement('button');
filtersSection.append(cleanButton);
cleanButton.innerText = 'Limpiar filtros';

const handleClean = () => {
  selectElement.selectedIndex = 0;
  maxPrice.value = '';
  const productCards = document.querySelectorAll('.product-card');
  messageContainer?.remove();
  productCards.forEach((productCard) => productCard.remove());
  printProducts(products);
};

cleanButton.addEventListener('click', handleClean);
