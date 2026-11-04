import{ fetchproduct } from "./api.js";
import { saveproduct,leadproduct } from "./storage.js";
import { renderProduct } from "./ui.js"
async function init(){
    try {
        let products= leadproduct();
        if(!products){
        products = await fetchproduct();
        saveproduct(products)
        }
        renderProduct(products)
    }catch (error){
        console.error(error);
    }

}
init();