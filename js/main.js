import{ fetchproduct } from "./api.js";
import { saveproduct,leadproduct } from "./storage.js";
import { renderProduct } from "./ui.js"
import { searchproduct,filterByCategory } from "./products.js";
let products=[]
const state ={query:"",category:"all"};

const update=()=>{
        const searched =searchproduct(products,state.query);
        const filtered=filterByCategory(searched,state.category);
        renderProduct(filtered);
    }

async function init(){
    try {
        products= leadproduct();
        if(!products){
        products = await fetchproduct();
        saveproduct(products)
        }
        
        renderProduct(products) //afficher product
    }catch (error){
        console.error(error);
    }
 
}document.getElementById("search-input").addEventListener("input",(event)=>{
  state.query = event.target.value;
  update();
})

document.getElementById("category-filter").addEventListener("change",(event)=>{
    state.category=event.target.value;
    update();
})
init()
