// The Array Filterer: You are building a search feature for your e-commerce site. Write a function named filterProducts that takes an array of product objects and a filter criterion. The function should return a new array containing only the products that match the filter criterion.

let products = [
    { category: "electronics", name: "Laptop" },
    { category: "electronics", name: "Mobile" },
    { category: "electronics", name: "Led Tv" },
    { category: "fashion", name: "shirt" },
    { category: "fashion", name: "shoes" },
    { category: "grocery", name: "Wheat Flour" },
    { category: "grocery", name: "Sugar" },
    { category: "grocery", name: "Bread" },
    { category: "fitness", name: "Dumble" },
    { category: "fitness", name: "Skipping rope" },
    { category: "fashion", name: "suits" }
]
let filterByCategory = ["electronics"]
console.log(filterProducts(products, filterByCategory))

function filterProducts(products, filterByCategory) {
    let filterSet = []
    filterByCategory.forEach(filter => filterSet[filter] = true);
    let filteredProducts = products.filter(product => filterSet[product.category])
    return filteredProducts
}