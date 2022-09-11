import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer-list-one">
                    <ul className="list-style">
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/whyConlis">Why Conlis</Link></li>
                        <li><Link to="/career">Careers</Link></li>
                    </ul>
                </div>
                <div className="footer-list-two">
                    <ul className="list-style">
                        <li>Product 1</li>
                        <li>Product 2</li>
                        <li>Product 3</li>
                    </ul>
                </div>
                <div className="footer-list-three">
                    <ul className="list-style">
                        <li>Service 1</li>
                        <li>Service 2</li>
                        <li>Service 3</li>
                    </ul>
                </div>
                <div className="footer-list-four">
                    <ul className="list-style">
                        <li>SI - 1</li>
                        <li>SI - 2</li>
                        <li>SI - 3</li>
                    </ul>
                </div>
                <div className="footer-list-contact">
                    <ul className="list-style">
                        <h3>Contact Us</h3>
                        <li>Email : info@conlissolutions.com</li>
                        <li>Phone No. : +91 8788334917</li>
                        <li>Address : The Kode,
                            Baner Pashan Link Road, Pashan,
                            Pune, Maharashtra
                            411021
                            {/* India */}
                            </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Footer