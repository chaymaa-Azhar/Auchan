import{ fetchproduct } from "./api";
async function init(){
    try {
        const products = await fetchproduct();
        console.log(products);
    }catch (error){
        console.error(error);
    }
}
init();