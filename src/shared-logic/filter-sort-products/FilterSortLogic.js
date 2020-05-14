export function filterProductsByCategory(category, products){
    let filterResult
    if(category === "All products"){
      return products;
    } else {
      filterResult = [...products].filter((product) => product.category === category)
      return filterResult;
    }
  }

export function sortProducts(sortMethod, products){
    let filtered = []
    if (sortMethod === "newToOld") {
      filtered = [...products].sort((a, b) => b.id - a.id)
    } else if (sortMethod === "lowToHigh"){
      filtered = [...products].sort((a, b) => a.price - b.price)
    } else if (sortMethod === "highToLow"){
      filtered = [...products].sort((a, b) => b.price - a.price)
    }
    return filtered;
  }

  export function returnFilterCategory(event){
      return event.target.value
  }

  export function returnSortMethod(event){
      return event.target.value
  }
