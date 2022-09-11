import React from 'react'
import "./Company.css"
import company from "../../images/company/company.jpg"
import Footer from '../../components/Footer'

const Company = () => {
    return (
        <>
            <div>
                <div className="company-image">
                    <img src={company} alt="company-top" />
                </div>
                <div className="service-text">
                    <h2> Company</h2>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Company