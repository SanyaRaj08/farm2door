import React from "react";
import img_5 from "../image/image5.png";
const Contact = () => {
  return (
    <div className="container">
      <div className="headline my-3">Get in touch</div>
      <div className="row">
        <div className="col-lg-6 contact-text join-text">
          <div className="my-3">
            We love hearing from our community of farmers, consumers, and food
            enthusiasts. If you have any questions, don't hesitate to reach out.
          </div>
          <div className="my-3">
            <div>Email: f2d@gmail.com</div>
            <div>
            Phone: xxxxx xxxxx
            </div>
          </div>
          <div className="my-3">
            We'll get back to you as soon as possible. Your feedback and
            inquiries help us continually improve and better serve you. We look
            forward to connecting with you!
          </div>
        </div>
        <div className="col-lg-6 ">
          <img className="map-img my-3" src={img_5} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
