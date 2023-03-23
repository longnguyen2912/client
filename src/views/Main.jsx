import React, { useState, useEffect } from 'react'
import axios from "axios"
import DashboardList from '../components/DashboardList'


export const Main = () => {
    const [productList, setProductList] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/ProductManager")
            .then(response => {
                setProductList(response.data)
            })
            .catch(err=> console.log(err))
    }, [])
    return (
        <div>
            <h2>Dashboard/Main</h2>
            <DashboardList productList = {productList}/>
        </div>
    )
}