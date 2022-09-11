import React, { useState } from 'react'
import "./ProductsDropdown.css"
import {productDropdown} from './NavItems'
import { Link } from 'react-router-dom'

const ProductsDropdown = () => {

    const [productsDropdown, setProductsDropdown] = useState(false);

    return (
        <>
            <ul className={productsDropdown ? "services-submenu clicked" : "services-submenu"} onClick={() => setProductsDropdown(!productsDropdown)}>
                {productDropdown.map(item => {
                    return (
                        <li key={item.id}>
                            <Link to={item.path} className={item.cName} onClick={() => setProductsDropdown(false)}>{item.title}</Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default ProductsDropdown