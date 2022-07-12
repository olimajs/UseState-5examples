import React,  { useState } from 'react';

const initialCart = [
    {id: 1, title: 'Product', description: 'Desc'},
    {id: 2, title: 'Product #2', description: 'Desc'},
    {id: 3, title: 'Product #3', description: 'Desc'}
];

const ShoppingCart = () => {

    const [cart, setCart] = useState(initialCart);

    const deleteProduct = (productId) => {
      const changedCart = cart.filter(product => product.id !== productId);

      setCart(changedCart);
    }

    const addProduct = (newProduct) => {
      newProduct.id = Date.now();

      const changedCart = [
        newProduct, 
        ...cart,
     
      ];

      setCart(changedCart);
    }

    const updateProduct = (editProduct) => {
      const changedCart = cart.map(product => (
        product.id === editProduct.id ? editProduct : product
      ))
      setCart(changedCart);
    }



  return (

      <div>


        <button onClick={() => addProduct({ title: "new Product", description: "new Desc" })}>Add</button>
        


      {cart.map(product => (
        <div key={product.id}>
            <h1>{product.id} {product.title}</h1>
            <p>{product.description}</p>
            <button onClick={()=>deleteProduct(product.id)}> 
              Delete
          </button>
          <button onClick={() => updateProduct({ id: product.id, title: "Edit Title", description: "Edit Desc" })}>
            Update</button>


          </div>
      ))}
      <br/><br/>
      <pre>
        {
          JSON.stringify(cart, null, 2)
        }
      </pre>
    </div>
  )
}

export default ShoppingCart

//shoppingcart basico p/ver como se utiliza el spread en funciones useState, con funcionalidad
//de borrar, agregar y actualizar.
