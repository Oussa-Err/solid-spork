import React from 'react'
import feature1 from '../../../assets/feature1.jpg'
import feature2 from '../../../assets/feature2.png'
import article3img from '../../../assets/article3img.png'
import './productBody.css'

export const ProductBody = () => {
  return (
    <div>
      <div id="feature">
        <div className="all">
          <div className="fe-box">
            <img width='300px' height='300px' src={feature1} alt="placeholder" />
            <h6>Free Shipping</h6>
          </div>
          <div className="fe-box">
            <img width='300px' height='300px' src={feature2} alt="placeholder" />
            <h6>Online Order</h6>
          </div>
          <div className="fe-box last-item">
            <img width='300px' height='300px' src={article3img} alt="placeholder" />
            <h6>24/7 Support</h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductBody
