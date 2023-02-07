import './style.css'

const products = [
  {
    name: 'ASUS ROG Strix G15 G513RM-HQ012 AMD Ryzen 7 6800H/16GB/1TB SSD/RTX3060/15.6"',
    price: 1299,
    stars: 4.5,
    reviews: 219,
    seller: 'PcComponentes',
    image: 'https://thumb.pccomponentes.com/w-530-530/articles/1031/10317957/1580-asus-rog-strix-g15-g513rm-hq012-amd-ryzen-9-6800h-16gb-1tb-ssd-rtx3060-156.jpg',
    stock: true,
    promo: true
  },
  {
    name: 'HP 15S-FQ5013NS Intel Core i5-1235U/8GB/512GB SSD/15.6"',
    price: 699,
    stars: 4.5,
    reviews: 56,
    seller: 'PcComponentes',
    image: 'https://thumb.pccomponentes.com/w-530-530/articles/1042/10428549/1392-hp-15s-fq5013ns-intel-core-i5-1235u-8gb-512gb-ssd-156.jpg',
    stock: true,
    promo: false
  },
  {
    name: 'Lenovo ThinkBook 15 G2 ITL Intel Core i5-1135G7/16 GB/512GB SSD/15.6"',
    price: 1049.46,
    stars: 4.5,
    reviews: 4,
    seller: 'Locurainformatica',
    image: 'https://thumb.pccomponentes.com/w-530-530/articles/1065/10650375/1374-lenovo-thinkbook-15-g2-itl-intel-core-i5-1135g7-16-gb-512gb-ssd-156.jpg',
    stock: true,
    promo: true
  },
  {
    name: 'Gigabyte U4 UD-50ES823SO Intel Core i5-1155G7/16GB/512GB SSD/14"',
    price: 712.55,
    stars: 4.5,
    reviews: 8,
    seller: 'OCASIONA',
    image: 'https://thumb.pccomponentes.com/w-530-530/articles/1058/10587710/1121-gigabyte-u4-ud-50es823so-intel-core-i5-1155g7-8gb-512gb-ssd-14.jpg',
    stock: true,
    promo: true
  },
  {
    name: 'Gigabyte AORUS 17 XE4-73ES514SH Intel Core i7-12700H/16GB/1TB SSD/RTX 3070Ti/17.3"',
    price: 1682.52,
    stars: 5,
    reviews: 23,
    seller: 'Procomp Team',
    image: 'https://thumb.pccomponentes.com/w-530-530/articles/1043/10431334/1444-gigabyte-aorus-17-xe4-73es514sh-intel-core-i7-12700h-16gb-1tb-ssd-rtx-3070ti-173.jpg',
    stock: false,
    promo: true
  },
  {
    name: 'ASUS VivoBook Flip TP470EA-EC402W Intel Core i5-1135G7/8GB/512GB SSD/14" Táctil',
    price: 802.16,
    stars: 4,
    reviews: 26,
    seller: 'OCASIONA',
    image: 'https://thumb.pccomponentes.com/w-530-530/articles/1027/10273328/1319-asus-vivobook-flip-tp470ea-ec402w-intel-core-i5-1135g7-8gb-512gb-ssd-14-tactil.jpg',
    stock: true,
    promo: true
  },
  {
    name: 'ASUS Zenbook 14 OLED UX3402ZA-KM020W Intel Evo Core i5-1240P/16GB/512GB SSD/14"',
    price: 1022.05,
    stars: 4.5,
    reviews: 5,
    seller: 'Locurainformatica',
    image: 'https://thumb.pccomponentes.com/w-530-530/articles/1062/10622694/1735-asus-zenbook-14-oled-ux3402za-km020w-intel-core-i5-1240p-16gb-512gb-ssd-14.jpg',
    stock: true,
    promo: true
  },
  {
    name: 'HP 15S-fq5075ns Intel Core i5-1235U/8GB/512GB SSD/15.6"',
    price: 509,
    stars: 4,
    reviews: 1,
    seller: 'PcComponents',
    image: 'https://thumb.pccomponentes.com/w-530-530/articles/1057/10579923/1358-hp-15s-fq5075ns-intel-core-i5-1235u-8gb-512gb-ssd-156.jpg',
    stock: true,
    promo: true
  },
  {
    name: 'Prixton Flex Pro Intel Celeron N4020/4GB/64GB/11.6" Táctil',
    price: 249.94,
    stars: 4,
    reviews: 44,
    seller: 'PRIXTON',
    image: 'https://thumb.pccomponentes.com/w-530-530/articles/25/257283/169-prixton-flex-pro-intel-apollo-lake-n3350-4gb-64gb-116-tactil.jpg',
    stock: false,
    promo: true
  },
  {
    name: 'ASUS Laptop M515DA AMD Ryzen 5 3500U/12GB/512GB SSD/15.6" (PT)',
    price: 914.44,
    stars: 0,
    reviews: 0,
    seller: 'UDI',
    image: 'https://thumb.pccomponentes.com/w-530-530/articles/1063/10636787/1667-asus-laptop-m515da-amd-ryzen-5-3500u-12gb-512gb-ssd-156-pt-ece2bb12-45d9-46bd-a76b-860ff9789d2e.jpg',
    stock: false,
    promo: false
  },
]

// 1. Funciones para pintar los productos:


const getProductTemplate = (name, image, price, promo, stars, reviews, seller, stock) => `

<ul>
  <p>ID: ${order.id}</p>
  <p>Fecha: ${order.date}</p>

  <li>
    ${products.forEach((product) => {
        const productData = products.find((p) => {
          return p.id === product.productId;
        });

        return `
        <li>
        <img src="${image}" alt="${name}">
        <h1>${name}</h4>
        <p>${price}</p>
        <span>${
          if (promo=true) {`OFERTA`}
        }
        </span>
        <p>Valoración: ${stars}/5</p>
        <p>Opiniones: ${reviews}</p>
        <p>Vendido y enviado por: ${seller}</p>
        <p>Disponibilidad: ${
        stock ? {`recíbelo mañana`} : {`recíbelo antes de 7 días`}
      }
        </p>
        </li>
      `;
      })
      }
  </li>
</ul>
`

// 2. Pinto productos y su template 
      
        // products.forEach((product) => {
        //   const template = getProductTemplate(name, image, price, promo, stars, reviews, seller, stock);
        //   productsList.innerHTML += template;
        // });


const getProductData = () => {

  const bodyElement = document.querySelector('body')

  products.forEach ((product) => {
  bodyElement.innerHTML += getProductTemplate(
    product.name, product.image, product.price, product.promo, 
    product.stars, product.reviews, product.seller, product.stock)
  })
  }
  
  getProductData()
  

  // let productCard = document.createElement('productCard');
  // productCard.className = 'product-card'


const selectedSeller = document.querySelector('input');
sellectedSeller.addEventListener('select', sellerFilter)

const maxPrice = document.querySelector('input');
maxPrice.addEventListener('input', priceFilter)

const sellerFilter = products.filter((product) => {
return product.seller === input.value 
})

const priceFilter = products.filter((product) => {
return product.price < input.value
})

document.querySelector('#app').innerHTML = `
  <div>
  <section class=filter>
  
  <label for="seller">Selecciona un vendedor</label>
  <select>
  <option value='${seller}'>${seller}</option>
  </select>
  

  <label for="price">Busca por precio máximo
  <input type="number">
  <button>Buscar</button>
  </label>

  <button>Limpiar filtros</button>
  
  </section>  
 
  <section class=products>

  ${getProductTemplate()}
  
  
  </section>  
 
  </div>
`



  

