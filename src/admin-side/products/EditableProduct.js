import React, {useState} from 'react';
import './products.css';

function Product({ product }) {

//   // state -> object with changes which is sent as a json in the post request.

//   const [productToUpdate, setProductToUpdate] = useState({product})

//   // post request function which is fired onClick of save button on the line
  
//   const saveProductEdits = () => {

//     return console.log("hi")
//   }

//   const updateStock = (changeValue) => {
//     // editedValue = productToUpdate[stock_quantity] + changeValue
//     // setProductToUpdate(stock_quantity + changeValue)
//   }
// const handleForm = (e) => {
//     console.log(e.target.value)
// }

const handleChange = (field, event) => {
    console.log(field)
    console.log(event.target.value)
}

  return (
    <li key={product.id}>
        <form>  
            <input disabled value={product.id}/>
            <input onChange={(event) => handleChange("product_name", event)} type="text" defaultValue={product.product_name}/>
            <input onChange={(event) => handleChange("description", event)} type="text" defaultValue={product.description}/>
            <input onChange={(event) => handleChange("price", event)}type="number" defaultValue={product.price}/>
            <input onChange={(event) => handleChange("stock_quantity", event)}type="number" defaultValue={product.stock_quantity}/>
        </form>
    </li>
  );
}

export default Product;

{/* // <input> {product.product_name} </input>
            // <input> {product.description} </input>
            // <input> {product.price} </input>
            // <input> {product.stock_quantity} </input> */}