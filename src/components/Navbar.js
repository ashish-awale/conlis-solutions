import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import Logo from "../images/conlis-logo.jpeg"
import { navItems } from './NavItems'
// import Button from './Button'
import Dropdown from './Dropdown'
import ProductsDropdown from './ProductsDropdown'
import CompanyDropdown from './CompanyDropdown'

const Navbar = () => {

    const [dropdown, setDropdown] = useState(false);
    const [productsDropdown, setProductsDropdown] = useState(false);
    const [companyDropdown, setCompanyDropdown] = useState(false);



    return (
        <>
            <div className="navbar-fix">
                <nav className="navbar">
                    <Link to="/" >
                        <img src={Logo} alt="logo" className="navbar-logo" />
                    </Link>
                    <ul className="nav-items">
                        {navItems.map(item => {
                            if (item.title === "Services") {
                                return (

                                    <li
                                        key={item.id}
                                        className={item.cName}
                                        onMouseEnter={() => setDropdown(true)}
                                        onMouseLeave={() => setDropdown(false)}
                                    >
                                        <Link to={item.path}>{item.title}</Link>
                                        {dropdown && <Dropdown />}
                                    </li>
                                )
                            }

                            if (item.title === "Products") {
                                return (
                                    <li
                                        key={item.id}
                                        className={item.cName}
                                        onMouseEnter={() => setProductsDropdown(true)}
                                        onMouseLeave={() => setProductsDropdown(false)}
                                    >
                                        <Link to={item.path}>{item.title}</Link>
                                        {productsDropdown && <ProductsDropdown />}
                                    </li>
                                )
                            }

                            if (item.title === "Company") {
                                return (
                                    <li
                                        key={item.id}
                                        className={item.cName}
                                        onMouseEnter={() => setCompanyDropdown(true)}
                                        onMouseLeave={() => setCompanyDropdown(false)}
                                    >
                                        <Link to={item.path}>{item.title}</Link>
                                        {companyDropdown && <CompanyDropdown />}
                                    </li>
                                )
                            }

                            return (
                                <li key={item.id} className={item.cName}>
                                    <Link to={item.path}>{item.title}</Link>
                                </li>
                            )
                        })}
                    </ul>
                    {/* <Button /> */}
                </nav>
            </div>
        </>
    )
}

export default Navbar


// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// // import * as Icons from "react-icons/fa";
// import "./Navbar.css";
// import { navItems } from "./NavItems";
// import Button from "./Button";
// // import Dropdown from "./Dropdown";

// function Navbar() {
//   const [dropdown, setDropdown] = useState(false);

//   return (
//     <>
//       <nav className="navbar">
//         <Link to="/" className="navbar-logo">
//           NATURE
//           {/* <Icons.FaTree /> */}
//         </Link>
//         <ul className="nav-items">
//           {navItems.map((item) => {
//             if (item.title === "Services") {
//               return (
//                 <li
//                   key={item.id}
//                   className={item.cName}
//                   onMouseEnter={() => setDropdown(true)}
//                   onMouseLeave={() => setDropdown(false)}
//                 >
//                   <Link to={item.path}>{item.title}</Link>
//                   {/* {dropdown && <Dropdown />} */}
//                 </li>
//               );
//             }
//             return (
//               <li key={item.id} className={item.cName}>
//                 <Link to={item.path}>{item.title}</Link>
//               </li>
//             );
//           })}
//         </ul>
//         <Button />
//       </nav>
//     </>
//   );
// }

// export default Navbar;