import logo from './vetMedical.png'

export const Top = () => {
  return (
    <div className="bg-light z-index-3 ">
      <nav class="navbar navbar-expand-lg navbar-light bg-light px-4  position-sticky top-0 start-0  w-100">
        <img src={logo} 
        alt="vetMedical-logo" 
        srcset="" className="img-fluid col-2 col-md-1"/>
      <a class="navbar-brand d-none" href="#">
        VetMedical
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Blog
            </a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">
              Resource
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Our Service
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Why Choose us?
            </a>
          </li>
        </ul>
      </div>
    </nav>
    </div>
    
  );
};

export const Bottom = () => {
  return (
    <footer className="container-fluid bg-white py-4 px-3">
      <div className="row">
        <div className="col-12 col-md-5 col-lg-3 d-flex flex-column align-items-center justify-content-center py-4">
        <img src={logo} 
        alt="vetMedical-logo" 
        srcset="" className="img-fluid col-4 col-md-5"/>
          <h3>VetMedical</h3>
          <p className="text-center">We are a dedicated team of veterinarians and animal care professionals 
            committed to providing the highest quality care for your beloved pets. 
            Our state-of-the-art facility and experienced staff are equipped to handle 
            a wide range of veterinary needs, from routine check-ups and vaccinations 
            to advanced surgeries and emergency treatment.
          </p>
        </div>
        <div className="row col-12 col-md-5 col-lg-5">
          <div className="col-4">
            <h6 className="px-3">Links</h6>
            <ul className="nav flex-column p-0">
              <li className="nav-item">
                <a className="nav-link" href='#'>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href='#'>Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href='#'>Location</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href='#'>About us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href='#'>Contact us</a>
              </li>
            </ul>
            <div className="col-12 py-3">
              <h6 className="px-3">Social Link</h6>
              <ul className="nav flex-column">
                <li className="nav-item">
                      <a className="nav-link" href='#'>Facebook</a>
                </li>
                <li className="nav-item">
                      <a className="nav-link" href='#'>Instagram</a>
                </li>
                <li className="nav-item">
                      <a className="nav-link" href='#'>Whatsapp</a>
                </li>
                <li className="nav-item">
                      <a className="nav-link" href='#'>Email</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="col-7 p-0">
            <h6 className="px-3">Resources</h6>
              <ul className="nav flex-column">
              <li className="nav-item">
                      <a className="nav-link" href='#'>Pet Blog</a>
                </li>
                <li className="nav-item">
                      <a className="nav-link" href='#'>Pet Health Articles</a>
                </li>
                <li className="nav-item">
                      <a className="nav-link" href='#'>Pet Care Tips</a>
                </li>
                <li className="nav-item">
                      <a className="nav-link" href='#'>Frequently Asked Questions</a>
                </li>
                <li className="nav-item">
                      <a className="nav-link" href='#'>Pet Emergencies</a>
                </li>
              </ul>

              <div className="col-12 py-3">
                <h6 className="px-3">About us</h6>
                  <ul className="nav flex-column">
                    <li className="nav-item">
                          <a className="nav-link" href='#'>Our Mission</a>
                    </li>
                    <li className="nav-item">
                          <a className="nav-link" href='#'>Our Team</a>
                    </li>
                    <li className="nav-item">
                          <a className="nav-link" href='#'>Our Facility</a>
                    </li>
                    <li className="nav-item">
                          <a className="nav-link" href='#'>Testimonials</a>
                    </li>
                  </ul>
          </div>
          </div>
        </div>
        <div className="col-12 col-md-12 col-lg-4  my-2 d-flex align-items- justify-content-center ">
            <form className="w-100 py-3  d-flex flex-column  gap-4 bg-md-dark px-3 bg-light border border-2">
              <div className="d-flex flex-column gap-3">
              <i class="fa-solid fa-bell display-1 text-center"></i>
                <label className=" display-6 fw-normal">Subscribe</label>
                <input type="email" name="" id="" className="form-control" placeholder="E-mail"/>
                <button className="btn w-100 border border-1 btn-danger">Subscribe</button>
              </div>
              <p className='text-center'>Stay up-to-date on the latest pet health news, 
              exclusive offers, and events. <strong>Subscribe</strong> for our newsletter today!</p>
              
            </form>
            
        </div>
      </div>
      <ul className='nav bg-primary border rounded text-white'>
        <li className='nav-item'><a href='tel:' className='nav-link text-white fw-bolder'><span className='fas fa-phone'></span> +(123)-1234-121</a></li>
        <li className='nav-item'><a href='tel:' className='nav-link text-white fw-bolder'><i class="fa-solid fa-envelope"></i> contactus@vetmedical.com</a></li>
        <li className='nav-item'><a href='tel:' className='nav-link text-white fw-bolder'><i class="fa-solid fa-globe"></i> Location</a></li>
      </ul>
    </footer>
  );
};

export const contact = ()=>{
  return(
    <div className='container-fluid px-3 d-flex flex-'>
        <div className='nav'>
          <a href='tel:00000000000' className='nav-items' />
          <a href='mailto:contactus@vetmedical.com' className='nav-items' />
          <a href='mailto:contactus@vetmedical.com' className='nav-items' />
        </div>
    </div>
  )
}
