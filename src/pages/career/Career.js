import React from 'react'
import "./Career.css"
import careerTop from "../../images/career/career.png"
import careercomposition from "../../images/career/CareerComposition.svg"
import careerinsurance from "../../images/career/Careerinsurance.svg"
import careervactions from "../../images/career/CareerVacations.svg"
import careermaternity from "../../images/career/CareerMaternity.svg"
import CareerWrkhrs from "../../images/career/CareerWrkhrs.svg"
import CareerRewards from "../../images/career/CareerRewards.svg"
import CareerAssistance from "../../images/career/CareerAssistance.svg"
import CareerMobility from "../../images/career/CareerMobility.svg"

import Footer from '../../components/Footer'


const Career = () => {
  return (
    <>
      <div className="career">
        <div className="career-top">
          <img src={careerTop} alt="about" />
          {/* <div className="career-page"> */}
            <div className="career-quote">
              <h1>Career</h1>
              <p>
                “Opportunities don’t happen, you create them.”
                <div>
                  - Chris Grosser
                </div>
              </p>
              <div className="career-email">
                <p>
                  <h6>CV’s to be mailed to</h6>
                  <div style={{ color: "orange" }}>
                    Email: info@conlissolutions.com
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="career-text">
          <h2> FREEDOM TO INNOVATE</h2>
          Our core philosophy is people over process. This culture has been instrumental to our success and helped us to build a stunning team that thrives in an environment of freedom and responsibility.
        </div>

        <div className="career-benefits">
          <div class="career-benefits-images1">
            <img src={careercomposition} alt="careercomposition" />
            <h6>Competitive Compensation</h6>
          </div>
          <div class="career-benefits-images2">
            <img src={careerinsurance} alt="careerinsurance" />
            <h6>Employee Insurance</h6>
          </div>

          <div class="career-benefits-images3">
            <img src={careervactions} alt="careervactions" />
            <h6>Paid Vacations</h6>
          </div>
          <div class="career-benefits-images4">
            <img src={careermaternity} alt="careermaternity" />
            <h6>Maternity leave</h6>
          </div>
        </div>

        <div className="career-benefits">
          <div class="career-benefits-images5">
            <img src={CareerWrkhrs} alt="CareerWrkhrs" />
            <h6>Flexible working hours</h6>
          </div>
          <div class="career-benefits-images6">
            <img src={CareerRewards} alt="CareerRewards" />
            <h6>Employee rewards</h6>
          </div>

          <div class="career-benefits-images7">
            <img src={CareerAssistance} alt="CareerAssistance" />
            <h6>professional development</h6>
          </div>
          <div class="career-benefits-images8">
            <img src={CareerMobility} alt="CareerMobility" />
            <h6>Internal Mobility</h6>
          </div>

        </div>
      {/* </div> */}
      <Footer />
    </>
  )
}

export default Career