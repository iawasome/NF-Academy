import React from 'react';

function Contact() {
  return (
    <section className="page-section" id="contact">
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-lg-8 col-xl-6 text-center">
            <h2 className="mt-0">Let’s Get in Touch!</h2>
            <hr className="divider" />
            <p className="text-muted mb-5">Have a question or want to book a session? Send us a message and we’ll get back to you as soon as possible!</p>
          </div>
        </div>
        <div className="row gx-4 gx-lg-5 justify-content-center mb-5">
          <div className="col-lg-6">
            <form id="contactForm">
              <div className="form-floating mb-3">
                <input className="form-control" id="name" type="text" placeholder="Enter your name..." />
                <label htmlFor="name">Full name</label>
              </div>
              <div className="form-floating mb-3">
                <input className="form-control" id="email" type="email" placeholder="name@example.com" />
                <label htmlFor="email">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input className="form-control" id="phone" type="tel" placeholder="(123) 456-7890" />
                <label htmlFor="phone">Phone number</label>
              </div>
              <div className="form-floating mb-3">
                <textarea className="form-control" id="message" type="text" placeholder="Enter your message here..." style={{ height: '10rem' }}></textarea>
                <label htmlFor="message">Message</label>
              </div>
              <div className="d-grid">
                <button className="btn btn-primary btn-xl" id="submitButton" type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-lg-4 text-center mb-5 mb-lg-0">
            <i className="bi-phone fs-2 mb-3 text-muted"></i>
            <div>+62 813-1994-1507</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;