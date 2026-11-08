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
export const renderProduct = (product, view)=>{
  const container = document.getElementById("products-container");
  const isList = view ==="list";

  container.innerHTML=product.map(({id,image,category,name,price})=>`
  <article class="bg-white rounded-lg shadow p-3 flex ${isList ? "flex-row items-center gap-4": "flex-col"}" data-id="${id}">
  <img src="${image}" class="${isList ? "h-24 w-24 shrink-0": "h-64 w-full object-top" } object-cover rounded">
  <div class="${isList ? "flex-1" : ""}">
      <p class="text-xs text-gray-500 mt-2">${category}</p>
      <h2 class="font-bold">${name}</h2>
      <p class="text-xs">${price} €</p>
    </div>
    <button class="${isList ? "px-4" : "mt-auto"} bg-red-600 text-white rounded-lg py-1" data-id="${id}">Ajouter</button>
  </article>
`).join("");
}


//grid liste
const layouts = {
  grid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",
  list: "flex flex-col gap-4",
};

const on = "flex-1 px-3 py-2 rounded-lg bg-red-600 text-white md:flex-none";
const off = "flex-1 px-3 py-2 rounded-lg bg-gray-200 text-gray-700 md:flex-none";
export const toggleView = (view) => {
  document.getElementById("products-container").className = layouts[view];
  document.getElementById("grid-view-btn").className = view ==="grid" ? on : off;
  document.getElementById("list-view-btn").className = view ==="list" ? on : off;
};





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

