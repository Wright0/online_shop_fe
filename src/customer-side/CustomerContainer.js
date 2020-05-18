import React, {useState, useEffect} from 'react';
import { Route } from 'react-router-dom';
import ViewProduct from './product-views/ViewProduct.js'
import AllProducts from './product-views/AllProducts.js';
import ShoppingCart from './shopping-cart/ShoppingCart.js'

function CustomerContainer() {

    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [selectedCategory, setSelectedCategory] = useState("All products")
    const [sortMode, setSortMode] = useState("newToOld")
    const [shoppingCartItemIds, setShoppingCartItemIds] = useState([])

    const setInitialProducts = (products) => {
        products.sort((a, b) => b.id - a.id)
        setProducts(products);
        setFilteredProducts(products);
      }
    
      const getProducts = () => {
        fetch('http://localhost:8000/api/products/')
        .then(response => response.json())
        .then(productsList => setInitialProducts(productsList))
        .catch(err => console.error)
      }
    
      useEffect(() => {
        getProducts()
      }, [])

      const handleAddToCart = (id) => {
          setShoppingCartItemIds([...shoppingCartItemIds, id])
      }

    return (
        <>
            <Route exact path="/shop" render={ () => 
                <AllProducts 
                    filteredProducts={filteredProducts}
                    products={products}
                    selectedCategory={selectedCategory}
                    sortMode={sortMode}
                    setFilteredProducts={setFilteredProducts}
                    setSelectedCategory={setSelectedCategory}
                    setSortMode={setSortMode}
                    handleAddToCart={handleAddToCart}

                />
            }/>

            <Route exact path="/shop/cart" render={ () => 
                <ShoppingCart shoppingCartItemIds={shoppingCartItemIds}/>
            }/>

            {/* <Route exact path="/shop/:category" render={ () => 
                <CustomerProductContainer/>
            }/> */}

            <Route exact path="/shop/:category/:id" render={ () => 
                <ViewProduct handleAddToCart={handleAddToCart}/>
            }/>
        </>
    )

}

export default CustomerContainer;