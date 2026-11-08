const product ="./data/data.json";
export const fetchproduct= async() => {
    const reponce=await fetch(product);
    if(!reponce.ok){ // true if reponce 200 if 404 oe 500 ereur 
        throw new Error(`erreur ${reponce.status}`) // throw arrete l function
    }
    return reponce.json();
}
