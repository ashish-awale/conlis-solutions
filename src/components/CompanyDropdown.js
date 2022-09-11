import React, { useState } from 'react'
import "./Dropdown.css"
import { companyDropdown } from './NavItems'
import { Link } from 'react-router-dom'

const CompanyDropdown = () => {

    const [dropdown, setDropdown] = useState(false);

    return (
        <>
            <ul className={dropdown ? "services-submenu clicked" : "services-submenu"} onClick={() => setDropdown(!dropdown)}>
                {companyDropdown.map(item => {
                    return (
                        <li key={item.id}>
                            <Link to={item.path} className={item.cName} onClick={() => setDropdown(false)}>{item.title}</Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default CompanyDropdown