import React from 'react'
import "./About.css"
import about from "../../images/about/about.jpg"
import aboutTop from "../../images/about/about-top.jpg"
import aboutVision from "../../images/about/about-vision.jpg"
import value from "../../images/about/value.png"
import Shailesh from "../../images/about/shailesh-singh.jpeg"
import Pankaj from "../../images/about/pankaj-kumar.jpeg"
import blankImage from "../../images/about/blank-image.jpg"
import Footer from '../../components/Footer'




const About = () => {
    return (
        <>
            <div>
                <img src={aboutTop} alt="about" className='about-top' />
            </div>

            <div className="about">

                <div className="our-story">
                    <h2>Our Story</h2>
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
                        <img src={aboutVision} alt="about-vision" className="about-vision-image" />
                    </div>
                </div>

                <div className="value-propostions">
                    <h2>VALUE PROPOSITIONS</h2>
                </div>
                <div className="about-container">
                    <div>
                        <img src={value} alt="value" className="value-image" />
                    </div>
                    <div className="value-text">
                        <p>
                            We establish ourselves as a fast-emerging diversified tech
                            solutions company that provides solution in the following
                            Domains:<br /> <br />
                            <div style={{ display: "flex" }}>
                                ● Fin-tech services<br /> <br />
                                ● Blockchain<br /> <br />
                                ● Metaverse, AR & VR<br /> <br />
                                ● Food tech<br /> <br />
                                ● Hospitality Management<br /> <br />
                                ● E-commerce and Enterprise applications<br /> <br />
                                <div>
                                    ● Cloud-based solutions<br /> <br />
                                    ● Sports and Gaming<br /> <br />
                                    ● Big data<br /> <br />
                                    ● DevOps<br /> <br />
                                    ● IoT<br /> <br />
                                    ● Infra and security management<br /> <br /></div>
                            </div>
                            ● PaaS & SaaS
                        </p>
                    </div>
                </div>
            </div>


{/* Team Demo Template start */}

<div className="ourTeam-text">
  <h2> Our Team</h2>
</div>
<div className="container">

  <div className="team">
  <div className="member">
      <img src={blankImage} alt="teama" />

      <h3>Smruti Pattnaik<br /> Director, CTO</h3>
      <span>smruti.pattnaik@conlissolutions.com</span>
    </div>
    
    <div className="member">
      <img src={Shailesh} alt="teama" />

      <h3>Shailesh Singh<br/> Director, CEO</h3>
      <span>shailesh.singh@conlissolutions.com</span>
    </div>
    
    <div className="member">
      <img src={Pankaj} alt="teama" />

      <h3>Pankaj Kumar<br /> Director, COO</h3>
      <span>pankaj.kumar@conlissolutions.com</span>
    </div>

    {/* <div className="member">
      <img src={blankImage} alt="teama" />

      <h3>Dr. Rajiv Mathur<br/> CSO, London</h3>
      <span>rajiv.mathur@conlistech.com</span>
    </div>
    <div className="member">
      <img src={blankImage} alt="teama" />

      <h3>Lim Chin Wah<br />Director, CRO</h3>
      <span>lim.wah@conlistech.com</span>
    </div> */}

    {/* <div className="member">
      <img src={businessTop} alt="teama" />
      <h3>Debasish Das, Principal Architect (Enterprise Solutions)</h3>
      <span>debasish@conlistech.com</span>
    </div> */}
    
  </div>
</div>
{/* Team Demo Template end */}


            <Footer />
        </>
    )
}

export default About