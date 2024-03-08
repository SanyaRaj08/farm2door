import React from 'react'

const Aboutus = () => {
  return (
    <div>
      <div className="headline my-3">Join Our Community</div>
      <div className="container row">
        <div className="join-box col-lg-6 col-sm-12 my-4">
          <button className="join-btn my-4 " type="submit">
            Buy Now
          </button>
          <button className="join-btn  my-4" type="submit">
            Sell Now
          </button>
        </div>
        <div className="join-box col-lg-6 col-sm-12 my-4">
          <div className="join-text my-4">
            We invite you to be a part of our thriving community of like-minded
            individuals who share a passion for quality food, supporting local
            farmers, and making a positive impact on our environment.
            <div className="join-text my-4">
              Join us today, and let's grow together! Together, we can create a
              more sustainable and vibrant future for our food system.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutus
