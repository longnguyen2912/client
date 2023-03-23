import React from 'react'

const ProductDetails = (props) => {
    const {product} = props
    return (
        <div>
            <h1>{product.title}</h1>
            <h3>Price: {product.price}</h3>
            <h3>Description: {product.description}</h3>
        </div>
    )
}

export default ProductDetails
