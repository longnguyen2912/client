import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const UpdateProduct = () => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")

    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/ProductManager/${id}`)
            .then(response => {
                const dest = response.data
                setTitle(dest.title)
                setPrice(dest.price)
                setDescription(dest.description)
            })
            .catch(err => {
                console.log(err)
            })

    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault()
        const updatedProduct = { title, price, description }
        axios.put(`http://localhost:8000/api/ProductManager/${id}`, updatedProduct)
            .then(response => {
                navigate(`/ProductManager`)
            })
            .catch(err => console.log(err))

    }
    const handleDelete = () => {
        axios.delete(`http://localhost:8000/api/ProductManager/${id}`)
            .then(response => {
                navigate("/ProductManager")
            })
            .catch(err => console.log(err))

    }

    return (

        <div>
            <h1>Update Product:</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title</label>
                    <input type="text" name='title' value={title} onChange={e => setTitle(e.target.value)} />
                </div>
                <div>
                    <label>Price</label>
                    <input type="number" name='price' value={price} onChange={e => setPrice(e.target.value)} />
                </div>
                <div>
                    <label>Description</label>
                    <input type="text" name='description' value={description} onChange={e => setDescription(e.target.value)} />
                </div>
                <div>
                    <button type='submit'>Update</button>
                    <button type="button" onClick={() => handleDelete()}>Delete</button>
                </div>
            </form>

        </div>
    )
}

export default UpdateProduct