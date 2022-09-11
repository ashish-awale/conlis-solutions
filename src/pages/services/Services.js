import React from 'react'
import "./Services.css"
import serviceTop from "../../images/services/services-top.svg"
import Footer from '../../components/Footer'

const Services = () => {
    return (
        <>
            <div>
            <div className="products">
                    <img src={serviceTop} alt="service-top" />
                </div>
                <div className="service-text">
                    <h2>Our Featured Services</h2>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Services