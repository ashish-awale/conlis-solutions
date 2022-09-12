import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../images/conlis-logo.jpeg"
import './Footer.css'
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { ImReddit } from 'react-icons/im';
import { FaPinterestP } from 'react-icons/fa';
import { MdRssFeed } from 'react-icons/md';




const Footer = () => {
    return (
        <>
            {/* <div className="footer">
                <div className="footer-list-one">
                    <ul className="list-style">
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/whyConlis">Why Conlis</Link></li>
                        <li><Link to="/career">Career</Link></li>
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
                        <h3><Link to="/contactus">Contact Us</Link></h3>
                        <li>Email : info@conlissolutions.com</li>
                        <li>Phone No. : +91 8788334917</li>
                        <li>Address : The Kode,
                            Baner Pashan Link Road, Pashan,
                            Pune - 411021, Maharashtra (India)
                            </li>
                    </ul>
                </div>
            </div> */}
            
            <div className="footer">
                <div className="footer-first-row">
                    <div className="footer-logo">
                        <img src={Logo} alt="logo" />
                    </div>
                    <div className="footer-disclaimer">
                        <div><h3>Disclaimer</h3></div>
                        <div>
                            <p>All content cited is derived from their respective sources.
                                If you believe we have used your copyrighted content without permission,
                                send us an email at info@conlissolutions.com</p>
                        </div>
                    </div>
                    <div className="footer-follow-us">
                        <div className="follow-us-text"><h3>Follow us</h3></div>
                        <div className="footer-icon">
                            <div><FaTwitter size={30} /></div>
                            <div><FaInstagram size={30} /></div>
                            <div><ImReddit size={30} /></div>
                            <div><FaPinterestP size={30} /></div>
                            <div><MdRssFeed size={30} /></div>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <h4>Copyright © 2022. All rights reserved.</h4>
                    <div className="footer-navbar">
                        <h4><Link to="/contactus">Contact Us</Link></h4>
                        <h4>Advertise</h4>
                        <h4>Disclaimer</h4>
                        <h4><Link to="/about">About us</Link></h4>
                        <h4>Privacy Policy</h4>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Footer