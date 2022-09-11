import React from 'react'
import "./Home.css"
import about from "../../images/about/about.jpg"
import home from "../../images/home/home.jpg"
import homeSoftware from "../../images/home/home-1.png"
import Footer from '../../components/Footer'

const Home = () => {
    return (
        <>
            <div className="home">
                <div className="home-image">
                    <img src={home} alt="company-top" />
                </div>
            </div>
            <div className="home-page">
                <div className="our-vision">
                    <h2>Vision Mission Objective</h2>
                </div>
                <div className="about-vision">
                    <div className="about-vision-text">
                        <p>Vision: Our Vision is become the market leader in technology
                            service and solution provider and pioneer in implementing products
                            in various domain to serve wide range of problems across the
                            horizon.<br /> <br />
                            Mission: Our mission is to deliver world-class product and services
                            solution to our clients and customers , support their business goals
                            and enable them to transform their various need.<br /> <br />
                            Objective: Deliver high quality product or services for clients across
                            the globe.</p>
                    </div>
                    <div>
                        <img src={homeSoftware} alt="about-vision" className="about-vision-image" />
                    </div>
                </div>

                <div className="service-text">
                    <h2>Overview</h2>
                </div>
                <div className="about-container">
                    <div>
                        <img src={about} alt="about" />
                    </div>
                    <div className="about-text">
                        <p>Conlis Solutions Pvt. Ltd is a tech startup, led by software industry
                            veterans with individual experience spanning decades in the field of
                            Fin-Tech, Web 3.0, cloud solutions, devOps, SaaS, Automation, Big
                            Data, Data Management & Security to name a few.
                            Conlis was incepted in 2022 in Pune, India, with a belief that
                            individual experience placed strategically in the team will be a
                            collective strength. Strength – to provide cutting edge solutions to our
                            clientele and assist them improve their businesses drastically. And we
                            were right! Conlis has grown rapidly with a plethora of software
                            products and services to target the IT-enabled market.</p>
                    </div>
                </div>

                </div>
            <Footer />
        </>
    )
}

export default Home