export const Hero = ()=>{

    return(
        <div className="container-fluid m-0 p-0 d-flex flex-column ">

        <div className="text-white container text-center d-flex flex-column justify-content-center align-items-center my-5 py-5" >
            <div className=" col-12 col-md-6">
                <h1 className=" display-4 fw-bolder">
                Unlimited movies, TV shows, and more
                </h1>
                <h5 className="fw-bold">Starts at USD 2.99. Cancel anytime.</h5>
                <p>Ready to watch? Enter your email to create or restart your membership.</p>
                <form className="text-white">
                <div className="d-flex gap-1 justify-content-center">
                <div class="form-floating col-6 col-md-8" >
                    <input style={{opacity:"0.5"}} type="email" class="form-control form-control-lg bg-dark" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Email address</label>
                </div>
                    <button className="btn btn-danger btn-lg gap-2 d-flex align-items-center" >
                        <span>Get Started</span>
                        <span className="fa fa-angle-right fw-tinner"></span>
                    </button> 
                </div>
            </form>
            </div>
            </div>  
            <div className='w-100 m-0 p-0' style={{height:"6.25rem",overflow:"hidden",position:"relative",zIndex:"1"}}>
              <div className="arc w-100"></div>
            </div> 
        </div>
    )
}