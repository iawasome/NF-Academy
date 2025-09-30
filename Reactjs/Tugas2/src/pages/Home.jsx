import React from 'react';

function Home() {
  return (
    <>
      <header className="masthead">
        <div className="container px-4 px-lg-5 h-100">
          <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
            <div className="col-lg-8 align-self-end">
              <h1 className="text-white font-weight-bold">Capture Your Best Moments with PhotoMate</h1>
              <hr className="divider" />
            </div>
            <div className="col-lg-8 align-self-baseline">
              <p className="text-white-75 mb-5">PhotoMate is your trusted partner for professional photography. From portraits to events, we help you preserve your precious memories beautifully.</p>
              <a className="btn btn-primary btn-xl" href="#about">Discover More</a>
            </div>
          </div>
        </div>
      </header>

      <section className="page-section bg-primary" id="about">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="text-white mt-0">We’ve Got What You Need!</h2>
              <hr className="divider divider-light" />
              <p className="text-white-75 mb-4">PhotoMate provides professional photography services tailored to your needs. Whether it’s weddings, portraits, or creative projects, our team is ready to capture every detail with precision and creativity.</p>
              <a className="btn btn-light btn-xl" href="#services">Get Started!</a>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section" id="services">
        <div className="container px-4 px-lg-5">
          <h2 className="text-center mt-0">At Your Service</h2>
          <hr className="divider" />
          <div className="row gx-4 gx-lg-5">
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="mb-2"><i className="bi-gem fs-1 text-primary"></i></div>
                <h3 className="h4 mb-2">Professional Quality</h3>
                <p className="text-muted mb-0">Our photos are edited with care to ensure top-notch quality.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="mb-2"><i className="bi-laptop fs-1 text-primary"></i></div>
                <h3 className="h4 mb-2">Creative Shots</h3>
                <p className="text-muted mb-0">We keep up with the latest trends and techniques in photography.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="mb-2"><i className="bi-globe fs-1 text-primary"></i></div>
                <h3 className="h4 mb-2">Ready to Share</h3>
                <p className="text-muted mb-0">Your photos are delivered in high resolution, ready for printing or sharing online.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="mb-2"><i className="bi-heart fs-1 text-primary"></i></div>
                <h3 className="h4 mb-2">Captured with Passion</h3>
                <p className="text-muted mb-0">Every shot is taken with passion to reflect your true story.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="portfolio">
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-lg-4 col-sm-6">
              <a className="portfolio-box" href="/assets/img/portfolio/1.jpg" title="Wedding Photography">
                <img className="img-fluid" src="/assets/img/portfolio/thumbnails/1.jpg" alt="Wedding Photography" />
                <div className="portfolio-box-caption">
                  <div className="project-category text-white-50">Weddings</div>
                  <div className="project-name">Beautiful Memories</div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-sm-6">
              <a className="portfolio-box" href="/assets/img/portfolio/fullsize/2.jpg" title="Portrait Photography">
                <img className="img-fluid" src="/assets/img/portfolio/thumbnails/2.jpg" alt="Portrait Photography" />
                <div className="portfolio-box-caption">
                  <div className="project-category text-white-50">Portraits</div>
                  <div className="project-name">Timeless Expressions</div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-sm-6">
              <a className="portfolio-box" href="/assets/img/portfolio/fullsize/3.jpg" title="Event Photography">
                <img className="img-fluid" src="/assets/img/portfolio/thumbnails/3.jpg" alt="Event Photography" />
                <div className="portfolio-box-caption">
                  <div className="project-category text-white-50">Events</div>
                  <div className="project-name">Unforgettable Moments</div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-sm-6">
              <a className="portfolio-box" href="/assets/img/portfolio/fullsize/4.jpg" title="Nature Photography">
                <img className="img-fluid" src="/assets/img/portfolio/thumbnails/4.jpg" alt="Nature Photography" />
                <div className="portfolio-box-caption">
                  <div className="project-category text-white-50">Nature</div>
                  <div className="project-name">Beauty of the Outdoors</div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-sm-6">
              <a className="portfolio-box" href="/assets/img/portfolio/fullsize/5.jpg" title="Product Photography">
                <img className="img-fluid" src="/assets/img/portfolio/thumbnails/5.jpg" alt="Product Photography" />
                <div className="portfolio-box-caption">
                  <div className="project-category text-white-50">Products</div>
                  <div className="project-name">Showcasing Details</div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-sm-6">
              <a className="portfolio-box" href="/assets/img/portfolio/fullsize/6.jpg" title="Travel Photography">
                <img className="img-fluid" src="/assets/img/portfolio/thumbnails/6.jpg" alt="Travel Photography" />
                <div className="portfolio-box-caption p-3">
                  <div className="project-category text-white-50">Travel</div>
                  <div className="project-name">Journey Through Lenses</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <section className="page-section bg-dark text-white">
        <div className="container px-4 px-lg-5 text-center">
          <h2 className="mb-4">Ready to Capture Your Story?</h2>
          <a className="btn btn-light btn-xl" href="/contact">Book a Session</a>
        </div>
      </section>
    </>
  );
}

export default Home;