import{ fetchproduct } from "./api.js";
import { saveproduct,leadproduct } from "./storage.js";
import { renderProduct, renderPagination, toggleView } from "./ui.js"
import { searchproduct,filterByCategory, getTotalPages, paginate } from "./products.js";
let products=[]
const state ={query:"",category:"all", page:1, perPage:8, view:"grid" };

const update=()=>{
        const searched =searchproduct(products,state.query);
        const filtered=filterByCategory(searched,state.category);
        const totalpages = getTotalPages(filtered, state.perPage);
        if(state.page>totalpages) state.page=totalpages;
        renderProduct(paginate(filtered, state.page, state.perPage),state.view);
        renderPagination(totalpages, state.page);
    };

async function init(){
    try {
        products= leadproduct();
        if(!products){
        products = await fetchproduct();
        saveproduct(products)
        }
        
        update(); //afficher product
    }catch (error){
        console.error(error);
    }
 
}document.getElementById("search-input").addEventListener("input",(event)=>{
  state.query = event.target.value;
  state.page = 1; //
  update();
})

document.getElementById("category-filter").addEventListener("change",(event)=>{
    state.category=event.target.value;
    state.page = 1;
    update();
})

document.getElementById("pagination").addEventListener("click",(event)=>{
    const button= event.target.closest("button[data-page]");
    if(!button) return;
    state.page = Number(button.dataset.page);
    update();
})


//grid/Liste
  // Grille / Liste
  document.getElementById("grid-view-btn").addEventListener("click", () => {
    state.view = "grid";
    toggleView(state.view);
    update();
  });

  document.getElementById("list-view-btn").addEventListener("click", () => {
    state.view = "list";
    toggleView(state.view);
    update();
  });

init()
