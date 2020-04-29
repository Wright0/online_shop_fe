import React, {useState, useEffect} from 'react';

function CustomerContainer() {
    const [products, setProducts] = useState([]);

    const getProducts = () => {
        fetch(`http://localhost:8000/api/products`)
        .then(response => response.json())
        .then(productsList => setProducts(productsList))
        .catch(err => console.error)
    }

    useEffect( () => {
        getProducts()
    }, [])

if(products.length === 0) return null
  return (
    <div>
        <h1>Hi</h1> 
        <p>{ products[0].product_name}</p>
    </div>
  );
}

export default CustomerContainer;
