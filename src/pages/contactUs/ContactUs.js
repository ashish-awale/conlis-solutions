import React from 'react'
import "./ContactUs.css"
import contactUs from "../../images/contactUs/Contact.jpg"
import Footer from '../../components/Footer'

const ContactUs = () => {
    return (
        <>
            <div className="contact-us">
                <div className="contact-us-image">
                    <img src={contactUs} alt="contact-us" />
                    <div className="contacts">
                        <div className="contact-text">
                            <h2>CONTACTS</h2>
                        </div>
                        <h3>Conlis Solutions Pvt Ltd</h3>
                        <div className="contact-address">
                            <p>
                                The Kode,
                                Baner Pashan Link Road, Pashan,
                                Pune, Maharashtra
                                411021
                                India
                                {/* Office#810 , Floor No:8 Westport, Pan Card Club
                                Road, Baner, Pune-411045( Maharashtra ) */}
                                <div>
                                    Mob # +91-8788334917
                                </div>
                                <div className="contact-phone">
                                    +91-7774077340
                                    </div>
                                    <div className="contact-phone">
                                    +91-9075097099
                                </div>
                                <div className="contact-website">
                                    www.conlissolutions.com
                                </div>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default ContactUs