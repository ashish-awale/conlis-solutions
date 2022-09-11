import React from 'react'
import "./Products.css"
import productTop from "../../images/products/product-top.png"
import fintechBanking from "../../images/products/fintech1.png"
import sportsGaming from "../../images/products/gaming1.png"
import businessTobusiness from "../../images/products/b2b.jpg"
import blockchain from "../../images/products/blockchain.png"
import ArVr from "../../images/products/ar-vr.png"
import Footer from '../../components/Footer'

const Products = () => {
    return (
        <>
            <div className="products-page">
                <div className="products">
                    <img src={productTop} alt="product-top" />
                </div>
                <div className="product-text">
                    <h2>Products</h2>
                </div>
                <div className="products-item">
                    <div className="product-row1">
                        <div className="product-row-img1">
                            <img src={fintechBanking} alt="fintechbanking" />
                            <h4> Fintech and Banking products</h4>
                        </div>
                        <div className="product-row-img2">
                            <img src={sportsGaming} alt="sportsGaming" />
                            <h4> Sports and Gaming (Enterprise applications)</h4>
                        </div>
                    </div>

                    <div className="product-row2">
                        <div className="product-row-img3">
                            <img src={businessTobusiness} alt="businessTobusiness" />
                            <h4> B2B E-COM solutions</h4>
                        </div>
                        <div className="product-row-img2">
                            <img src={blockchain} alt="blockchain" />
                            <h4> Sports and Gaming (Enterprise applications)</h4>
                        </div>
                    </div>
                    <div className="product-row3">
                        <div className="product-row-img5">
                            <img src={ArVr} alt="ArVr" />
                            <h4> AR , VR and MR based
                                implementation in various
                                domains</h4>
                        </div>
                    </div>
                </div>
            <Footer />
            </div>

        </>
    )
}

export default Products