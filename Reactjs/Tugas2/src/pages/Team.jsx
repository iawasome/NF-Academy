import React from 'react';

function Team() {
  return (
    <section className="page-section bg-light" id="team">
      <div className="container px-4 px-lg-5">
        <h2 className="text-center mt-0">Meet Our Team</h2>
        <hr className="divider" />
        <div className="row gx-4 gx-lg-5">
          <div className="col-lg-4 col-md-6 text-center">
            <div className="card shadow-sm border-0 rounded-4 mb-5">
              <img src="https://cdn.britannica.com/92/215392-050-96A4BC1D/Australian-actor-Chris-Hemsworth-2019.jpg" className="card-img-top rounded-top-4" alt="Team Member 1" />
              <div className="card-body">
                <h5 className="card-title mb-0">Chris Hemsworth</h5>
                <p className="text-muted small">Lead Photographer</p>
                <div className="d-flex justify-content-center gap-3">
                  <a href="#"><i className="bi bi-instagram fs-4"></i></a>
                  <a href="#"><i className="bi bi-facebook fs-4"></i></a>
                  <a href="#"><i className="bi bi-linkedin fs-4"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 text-center">
            <div className="card shadow-sm border-0 rounded-4 mb-5">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Cillian_Murphy_at_Berlinale_2024%2C_Ausschnitt.jpg/960px-Cillian_Murphy_at_Berlinale_2024%2C_Ausschnitt.jpg" className="card-img-top rounded-top-4" alt="Team Member 2" />
              <div className="card-body">
                <h5 className="card-title mb-0">Cillian Murphy</h5>
                <p className="text-muted small">Creative Director</p>
                <div className="d-flex justify-content-center gap-3">
                  <a href="#"><i className="bi bi-instagram fs-4"></i></a>
                  <a href="#"><i className="bi bi-facebook fs-4"></i></a>
                  <a href="#"><i className="bi bi-linkedin fs-4"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 text-center">
            <div className="card shadow-sm border-0 rounded-4 mb-5">
              <img src="https://elleuk.cdnds.net/15/37/2048x2730/2048x2730-614b97-assets-elleuk-com-thumbs-12487-robert-downey-jr-arrives-at-the-lacma-2013-thumbnail-getty-jpg.jpg" className="card-img-top rounded-top-4" alt="Team Member 3" />
              <div className="card-body">
                <h5 className="card-title mb-0">Robert Downey Jr</h5>
                <p className="text-muted small">Event Specialist</p>
                <div className="d-flex justify-content-center gap-3">
                  <a href="#"><i className="bi bi-instagram fs-4"></i></a>
                  <a href="#"><i className="bi bi-facebook fs-4"></i></a>
                  <a href="#"><i className="bi bi-linkedin fs-4"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;