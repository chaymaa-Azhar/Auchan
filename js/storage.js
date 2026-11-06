const product_key= "products";
const cart="carts";
export function  saveproduct(products){
    localStorage.setItem(product_key, JSON.stringify(products))
}
export function leadproduct(){
    const data=localStorage.getItem(product_key);
    return data ? JSON.parse(data) : null;
}

export function savecarts(carts){
    localStorage.setItem(cart ,JSON.stringify(carts))
}

export function leadcarts(){
    const data = localStorage.getItem(cart)
    return data ? JSON.parse(data) : null;
}

