export const searchproduct = (products,query) =>
    products.filter(({name})=> 
     name.toLowerCase().includes(query.toLowerCase()));

export const filterByCategory = (product,category) => 
    category=== "all"
    ? product 
    :product.filter((product)=>product.category===category);



//pgination 
export const paginate = (products, page, perPage) => {
  const start = (page - 1) * perPage;
  return products.slice(start, start + perPage);
};

export const getTotalPages = (products, perPage) =>
  Math.max(1, Math.ceil(products.length / perPage));

