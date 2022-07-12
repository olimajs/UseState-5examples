import React, {useState} from 'react'

const initialProduct = {
    title: "Titulo",
    description: "Descripcion"
}

const ProductApp = () => {
    const [product, setProduct] = useState(initialProduct);
    
    const updateProduct = (property, value) => {
        setProduct({
            ...product,
           [property]: value
        })
    }

    return (
        <div>
        <button onClick={() => updateProduct("description", "new desc")}>
            Update
        </button>

        <h1>{product.title}</h1>
        <h1>{product.description}</h1>
      
        <pre>{JSON.stringify(product, null, 0)}</pre>
     </div>
  )
}

export default ProductApp

//en form es bueno para modificar y 