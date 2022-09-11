import React from 'react'
import "./WhyConlis.css"
import businessTop from "../../images/whyConlis/business.jpg"
import businessModel from "../../images/whyConlis/business-model.jpg"
import competitiveAdvantage from "../../images/whyConlis/competitive-advantage.jpg"

import Footer from "../../components/Footer"

const WhyConlis = () => {
  return (
    <>
      <div>
        <img src={businessTop} alt="about" className='business-top' />
      </div>
      <div className="why-conlis">

        <div className="our-story">
          <h2>BUSINESS MODEL</h2>
        </div>
        <div className="business-container">
          <div>
            <img src={businessModel} alt="businessModel" className="business-image" />
          </div>
          <div className="business-text">
            <p>
              • Software as Services based on the subscription model <br /> <br />
              • BOT model development for the customers<br /> <br />
              • Product as services<br /> <br />
              • Product licensing based on ASP model
            </p>
          </div>
        </div>

        <div className="competitive-heading">
          <h2>COMPETITIVE ADVANTAGES</h2>
        </div>
        <div className="business-vision">
          <div className="business-text">
            <p>
              ● We have state of art software development facility in multiple locations
              in India with a diversified team to deliver world class product and
              software for clients and consumers.<br /> <br />
              ● Widely experience team with vast knowledge with diversified domains.<br /> <br />
              ● Global presence in multiple countries.<br /> <br />
              ● Uphold expertise in Fintech & Banking , Sports and Gaming , Supply
              chain & Logistic , Blockchain, Socio-Foodtech, AI /ML, AR, VR and
              Metaverse
            </p>
          </div>
          <div>
            <img src={competitiveAdvantage} alt="about-vision" className="business-image" />
          </div>
        </div>



      </div>
      <Footer />
    </>
  )
}

export default WhyConlis