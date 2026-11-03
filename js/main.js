import{ fetchproduct } from "./api.js";
import { saveproduct,leadproduct } from "./storage.js";
async function init(){
    try {
        let products= leadproduct();
        if(!products){
        products = await fetchproduct();
        saveproduct(products)
        }
        console.log(products);
    }catch (error){
        console.error(error);
    }

}
init();