import React from 'react'
import "./Services.css"
import serviceTop from "../../images/services/services-top.svg"
import webIcon from "../../images/services/web-icon.png"
import mobileIcon from "../../images/services/mobile-icon.png"
import uiuxIcon from "../../images/services/uiux-icon1.png"
import testingIcon from "../../images/services/qa-icon.png"
import itIcon from "../../images/services/it-icon.png"
import teamIcon from "../../images/services/team-icon.jpg"
import Footer from '../../components/Footer'

const Services = () => {
    return (
        <>
            <div>
                <div className="services">
                    <img src={serviceTop} alt="service-top" />
                </div>
            </div>

            <div className="service-text">
                <h2>Our Featured Services</h2>
            </div>
            {/* <div className="services-icon">
                </div> */}
            <div className="service">
                <div className="services-icon">
                    <div className="service-web-img">
                        <img src={webIcon} alt="webIcon" />
                        <div className="service-web-text">
                            <h3> Web Development</h3>
                            <p>We carry more than just good coding skills. Our experience makes us stand out from other web development.</p>
                        </div>
                    </div>
                    <div className="service-web-img">
                        <img src={mobileIcon} alt="mobileIcon" />
                        <div className="service-web-text">
                            <h3> Mobile Development</h3>
                            <p>Create complex enterprise software, ensure reliable software integration, modernise your legacy system.</p>
                        </div>
                    </div>
                    <div className="service-web-img">
                        <img src={uiuxIcon} alt="uiuxIcon" />
                        <div className="service-web-text">
                            <h3> UI/UX Design</h3>
                            <p>Build the product you need on time with an experienced team that uses a clear and effective design process.</p>
                        </div>
                    </div>
                </div>
                <div className="services-icon-row2">
                    <div className="service-web-img">
                        <img src={testingIcon} alt="testingIcon" />
                        <div className="service-web-text">
                            <h3> QA & Testing</h3>
                            <p>Turn to our experts to perform comprehensive, multi-stage testing and auditing of your software.</p>
                        </div>
                    </div>
                    <div className="service-web-img">
                        <img src={itIcon} alt="itIcon" />
                        <div className="service-web-text">
                            <h3> IT Counsultancy</h3>
                            <p>Trust our top minds to eliminate workflow pain points, implement new tech, and consolidate app portfolios.</p>
                        </div>
                    </div>
                    <div className="service-web-img">
                        <img src={teamIcon} alt="teamIcon" />
                        <div className="service-web-text">
                            <h3> Dedicated Team</h3>
                            <p>Over the past decade, our customers succeeded by leveraging Intellectsoft’s process of building, motivating.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Services