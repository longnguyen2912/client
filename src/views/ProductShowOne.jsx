import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import ProductDetails from '../components/ProductDetails'


const ProductShowOne = () => {
    const [product, setProduct] = useState()
    const { id } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/ProductManager/${id}`)
            .then(response => {
                setProduct(response.data)
            })
            .catch(err => {
                console.log(err)
            })

    }, [id])



    return (
        <div>
            <h1>Product details</h1>
            {   product&&
                <ProductDetails product={product} />
            }
        </div>
    )
}

export default ProductShowOne