export const searchproduct = (products,query) =>
    products.filter(({name})=> 
     name.toLowerCase().includes(query.toLowerCase()));

export const filterByCategory = (product,category) => 
    category=== "all"
    ? product 
    :product.filter((product)=>product.category===category);

