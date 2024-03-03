import React from "react";
import './contactus.css';

const ContactUs = props => {

  return (
    <div className="contactus">
      <section>

        <div className="section-header">
          <div className="container">
            <h2>Contact Us</h2>
            <p>Welcome to our Movie Tracker website! We value your feedback and inquiries.
              Whether you have questions about the features of our movie tracking platform,
              suggestions for improvements, or if you encounter any issues, our dedicated team
              is here to assist you. Your opinions matter to us, as we strive to create a seamless
              and enjoyable movie-watching experience for our users. Feel free to reach out to us
              using the contact form below, and our knowledgeable support team will get back to you
              promptly. Thank you for being a part of our Movie Tracker community!
            </p>
          </div>
        </div>

        <div className="container">
          <div className="row">

            <div className="contact-info">
              <div className="contact-info-item">
                <div className="contact-info-icon fa-home">
                  <i className="fas"></i>
                </div>

                <div className="contact-info-content">
                  <h4>Address</h4>
                  <p>4671 Sugar Camp Road,<br /> Ramallah, Palestine, <br />55060</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon fa-phone">
                  <i className="fas"></i>
                </div>

                <div className="contact-info-content">
                  <h4>Phone</h4>
                  <p>+970-595-012-012</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon fa-envelope">
                  <i className="fas"></i>
                </div>

                <div className="contact-info-content">
                  <h4>Email</h4>
                  <p>shahrazad@email.com</p>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <form id="contact-form">
                <h2>Send Message</h2>
                <div className="input-box">
                  <input type="text" required={true} name="" />
                  <span>Full Name</span>
                </div>

                <div className="input-box">
                  <input type="email" required={true} name="" />
                  <span>Email</span>
                </div>

                <div className="input-box">
                  <textarea required={true} name="" />
                  <span>Type your Message...</span>
                </div>

                <div className="input-box">

                  <input type="submit" value="Send" name="" />
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;