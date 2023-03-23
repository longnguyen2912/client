import React, {useState,useEffect} from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'

const DashboardList = (props) => {

    const {productList} = props
    return (
        <div>
            <ol>
                {
                    productList.map((eachProduct, idx)=>
                        <li key={idx}>
                            <Link to={`/ProductManager/${eachProduct._id}`}>{eachProduct.title}</Link>
                            ${eachProduct.price} - {eachProduct.description}
                            <Link to={`/ProductManager/${eachProduct._id}/edit`}>Edit</Link>
                        </li>
                    )
                }
            </ol>
        </div>
    )
}

export default DashboardList;