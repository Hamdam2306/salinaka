export interface Product {
    name: string;
    price: string;
    category: string;
    imageUrl: string;
  }
  
  const products: Product[] = [
    {
      name: 'Sugat',
      price: '$56.00',
      category: 'Betsin Maalat',
      imageUrl: 'https://cdn-images.farfetch-contents.com/16/06/97/27/16069727_30146621_2048.jpg'
    },
    {
      name: 'Kulangot',
      price: '$67.00',
      category: 'Salt',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM0DL0LLJp4yrN_JvDkl4KNoDOQIanv7QlWg&s'
    },
    {
      name: 'Tiktilaok Manok',
      price: '$78.00',
      category: 'Sexbomb',
      imageUrl: 'https://cdn.outsideonline.com/wp-content/uploads/2017/07/27/aether-review-1.jpg?width=800'
    },
    {
      name: 'Very Nice',
      price: '$79.00',
      category: 'Salt Maalat',
      imageUrl: 'https://www.favrspecs.com/cdn-cgi/image/width=1920,quality=75,format=auto,fit=scale-down,background=%23F8F8F8/media/product-variants/12242/ZxI62VMBQrfb8rr1/sunglasses-salt-antique-silver-indigo-side.png'
    },
    {
      name: 'Quake Overload',
      price: '$80.00',
      category: 'Yezyow',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLB9lLwuKpdLK5-xyr_-sDKtGqjnFrxXDNOA&s'
    },
    {
      name: 'Kutu',
      price: '$129.00',
      category: 'Sexbomb',
      imageUrl: 'https://baileynelson.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F1829%2F7087%2Ffiles%2FBNA961_C22SUN-featured_a4e4a547-6d21-41e4-b67f-c877a6f66737.jpg%3Fv%3D1741392910&w=1920&q=75'
    },
    {
      name: 'Tuluk',
      price: '$142.00',
      category: 'Black Kibal',
      imageUrl: 'https://thomass.co.nz/cdn/shop/files/AgeEyewearPageBlack1.jpg?v=1701041377'
    },
    {
      name: 'Babakut',
      price: '$90.00',
      category: 'Test',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWupanFJz8tI0B-gI_-tHkfcanUQbM3MxiB8Trq8GqJBBacudZsRaOmdI_a_Iphi0tAuQ&usqp=CAU'
    },
    {
      name: 'Plaksan',
      price: '$100.00',
      category: 'Test',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Aet6L_qQtrs7F3xQJxPa-2mJ7tTJGGtdu_lv1OoZriI00x2M1Q7_fT9s8u1JkauJSEE&usqp=CAU'
    },
    {
      name: 'Burmak',
      price: '$150.00',
      category: 'Test',
      imageUrl: 'https://www.frenchconnection.com/cdn/shop/products/TTUAC40_800x.jpg?v=1685114634'
    },
    {
      name: 'Sipan Malqot',
      price: '$250.00',
      category: 'Test',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvNkWLErE_Gi9VovbfJuA-iWlBmusEDS642V0kS-j8GF8W9wDltpJinb4fnO1awsnzUtk&usqp=CAU'
    },
    {
      name: 'Babuk',
      price: '$80.00',
      category: 'Test',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRtSS9CvSqY6lMGtdtoF__WYKJW9jYsF3uQF5kNdbvB-2zFNMd5vJs5ycTDaQx4HIObsE&usqp=CAU'
    },
    {
      name: 'Merry Christmas',
      price: '$70.00',
      category: 'Test',
      imageUrl: 'https://img.fruugo.com/product/4/03/1013024034_0340_0340.jpg'
    },
    {
      name: 'Titila Mapiqot',
      price: '$60.00',
      category: 'Test',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl0vpWlTeW2TzbgD50TBNKNE47mJmQaHQ6Mw&s'
    },
  ];
  
  let cart: string[] = [];
  
  function addToCart(productName: string) {
    cart.push(productName);
    console.log('Cart:', cart);
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    document.body.className = 'min-h-screen bg-gray-100 p-4 md:p-10';
  
    const gridContainer = document.createElement('div');
    gridContainer.className = 'grid grid-rows-2 grid-cols-7 gap-6';
    document.body.appendChild(gridContainer);
  
    products.forEach((product) => {

      const card = document.createElement('div');
      card.className = 'bg-white p-4 rounded-lg shadow-md text-center flex flex-col items-center';
  
      const imageEl = document.createElement('img');
      imageEl.src = product.imageUrl;
      imageEl.className = 'h-32 w-full object-cover mb-4 rounded-md';
      card.appendChild(imageEl);
  
      const nameEl = document.createElement('h2');
      nameEl.className = 'text-lg font-semibold';
      nameEl.textContent = product.name;
      card.appendChild(nameEl);
  
      
      const categoryEl = document.createElement('p');
      categoryEl.className = 'text-gray-500';
      categoryEl.textContent = product.category;
      card.appendChild(categoryEl);
  
      const priceEl = document.createElement('p');
      priceEl.className = 'text-xl font-bold mt-2';
      priceEl.textContent = product.price;
      card.appendChild(priceEl);
  
      const button = document.createElement('button');
      button.className = 'mt-4 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors duration-200';
      button.textContent = 'Add to Basket';

      button.addEventListener('click', () => addToCart(product.name));
  
      card.appendChild(button);
  
      gridContainer.appendChild(card);
    });
  });
  