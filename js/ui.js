export const createproductCart = ({id,name,category,price, image}) =>`
  <article class="bg-white rounded-lg shadow p-3 flex flex-col" data-id="${id}">
  <img src="${image}" class="h-32 w-full rounded">
  <p class="text-xs text-gray-500 mt-2">${category}</p>
  <h2 class="font-bold">${name}</h2>
  <p class="text-xs ">${price} € </p>
   
  <button class="mt-auto bg-red-600 text-white rounded-lg py-1 " data-id="${id}"> Ajouter </button>
  </article>
`
export const renderProduct = (product)=>{
  const container = document.getElementById("products-container");
  container.innerHTML=product.map(createproductCart).join("");
}

