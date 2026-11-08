// export const createproductCart = ({id,image,category,name,price})=>
//   `
//   <article class="bg-white rounded-lg shadow p-3 flex flex-col" data-id="${id}">
//   <img src="${image}" class="h-64 w-full object-cover object-top rounded">
//   <p class="text-xs text-gray-500 mt-2">${category}</p>
//   <h2 class="font-bold">${name}</h2>
//   <p class="text-xs ">${price} € </p>
   
//   <button class=" mt-auto bg-red-600 text-white rounded-lg py-1 " data-id="${id}"> Ajouter </button>
//   </article>
// `
export const renderProduct = (product)=>{
  const container = document.getElementById("products-container");
  container.innerHTML=product.map(({id,image,category,name,price})=>`
  <article class="bg-white rounded-lg shadow p-3 flex flex-col" data-id="${id}">
  <img src="${image}" class="h-64 w-full object-cover object-top rounded">
  <p class="text-xs text-gray-500 mt-2">${category}</p>
  <h2 class="font-bold">${name}</h2>
  <p class="text-xs ">${price} € </p>
   
  <button class=" mt-auto bg-red-600 text-white rounded-lg py-1 " data-id="${id}"> Ajouter </button>
  </article>
`).join("");
}


//pagination
export const renderPagination = (totalPages, currentPage) => {
  const nav = document.getElementById("pagination");
  let html = "";

  for (let page = 1; page <= totalPages; page++) {
    if (page === currentPage) {
      html += `<button data-page="${page}" class="px-3 py-1 rounded-lg bg-red-600 text-white">${page}</button>`;
    } else {
      html += `<button data-page="${page}" class="px-3 py-1 rounded-lg border bg-white">${page}</button>`;
    }
  }

  nav.innerHTML = html;
};
