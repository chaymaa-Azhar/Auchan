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


//pagination
export const renderPagination = (totalPages, currentPage) => {
  const nav = document.getElementById("pagination");
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const prevDisabled = currentPage === 1;
  const nextDisabled = currentPage === totalPages;

  nav.innerHTML = `
    <button data-page="${currentPage - 1}" ${prevDisabled ? "disabled" : ""}
      class="px-3 py-1 rounded-lg border bg-white ${prevDisabled ? "opacity-50 cursor-not-allowed" : ""}">
      Précédent
    </button>

    ${pages
      .map(
        (page) => `
      <button data-page="${page}"
        class="px-3 py-1 rounded-lg border ${page === currentPage ? "bg-red-600 text-white" : "bg-white"}">
        ${page}
      </button>`
      )
      .join("")}

    <button data-page="${currentPage + 1}" ${nextDisabled ? "disabled" : ""}
      class="px-3 py-1 rounded-lg border bg-white ${nextDisabled ? "opacity-50 cursor-not-allowed" : ""}">
      Suivant
    </button>
  `;
};
