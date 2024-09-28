import logo from './logo.svg'
export const Top = ()=>{

    return(
        <div className="my-3 px-5 container d-flex justify-content-between pb-5 mb-5">
            <img src={logo} alt="" srcset="" className='img-fluid ' style={{width:"150px"}}/>
            <div className="p-2">
            <button className="btn btn-sm btn-danger btn-lg px-2 px-3 fw-bold">Sign In</button>
           </div>          
        </div>
    )
}

export const Footer = ()=>{
    return(
        <div className="container-fluid py-5" style={{background:'#000000'}}>
            <footer data-layout="container" data-uia="footer+container" class="container my-5">
                <div data-layout="item" class=" default-ltr-cache-fmahda-StyledItem ew2l6qe0">
                    <p class=" default-ltr-cache-2o4prs euy28770" ><a href="https://help.netflix.com/contactus" style={{color:"#fff",opacity:".7"}}>Questions? Contact us.</a></p>
                </div>
                <div className='my-3'>
                    <ul data-layout="container" data-style="linkList" class="container nav gap-2 d-flex flex-wrap">
                        <li data-layout="item" class=" nav-item col-12 col-md-2 mx-4 fs-6"><a role="link" data-uia="footer-link" target="_self" class=" text-white" style={{color:"#fff",opacity:"0.7"}} href="https://help.netflix.com/support/412">FAQ</a></li>
                        <li data-layout="item" class=" nav-item col-12 col-md-2 mx-4 fs-6"><a role="link" data-uia="footer-link" target="_self" class="text-white" style={{color:"#fff",opacity:"0.7"}} href="https://help.netflix.com">Help Center</a></li>
                        <li data-layout="item" class=" nav-item col-12 col-md-2 mx-4 fs-6"><a role="link" data-uia="footer-link" target="_self" class="text-white" style={{color:"#fff",opacity:"0.7"}} href="/youraccount">Account</a></li>
                        <li data-layout="item" class=" nav-item col-12 col-md-2 mx-4 fs-6"><a role="link" data-uia="footer-link" target="_self" class="text-white" style={{color:"#fff",opacity:"0.7"}} href="https://media.netflix.com/">Media Center</a></li>
                        <li data-layout="item" class=" nav-item col-12 col-md-2 mx-4 fs-6"><a role="link" data-uia="footer-link" target="_self" class=" text-white" style={{color:"#fff",opacity:"0.7"}} href="http://ir.netflix.com/">Investor Relations</a></li>
                        <li data-layout="item" class=" nav-item col-12 col-md-2 mx-4 fs-6"><a role="link" data-uia="footer-link" target="_self" class="text-white" style={{color:"#fff",opacity:"0.7"}} href="https://jobs.netflix.com/jobs">Jobs</a></li>
                        <li data-layout="item" class=" nav-item col-12 col-md-2 mx-4 fs-6"><a role="link" data-uia="footer-link" target="_self" class="text-white" style={{color:"#fff",opacity:"0.7"}} href="/watch">Ways to Watch</a></li>
                        <li data-layout="item" class=" nav-item col-12 col-md-2 mx-4 fs-6"><a role="link" data-uia="footer-link" target="_self" class="text-white" style={{color:"#fff",opacity:"0.7"}} href="https://help.netflix.com/legal/termsofuse">Terms of Use</a></li>
                        <li data-layout="item" class=" nav-item col-12 col-md-2 mx-4 fs-6"><a role="link" data-uia="footer-link" target="_self" class="text-white" style={{color:"#fff",opacity:"0.7"}} href="https://help.netflix.com/legal/privacy">Privacy</a></li>
                        <li data-layout="item" class=" nav-item col-12 col-md-2 mx-4 fs-6"><a role="link" data-uia="footer-link" target="_self" class="text-white" style={{color:"#fff",opacity:"0.7"}} href="#">Cookie Preferences</a></li>
                        <li data-layout="item" class=" nav-item col-12 col-md-2 mx-4 fs-6"><a role="link" data-uia="footer-link" target="_self" class="text-white" style={{color:"#fff",opacity:"0.7"}} href="https://help.netflix.com/legal/corpinfo">Corporate Information</a></li>
                        <li data-layout="item" class=" nav-item col-12 col-md-2 mx-4 fs-6"><a role="link" data-uia="footer-link" target="_self" class="text-white" style={{color:"#fff",opacity:"0.7"}} href="https://help.netflix.com/contactus">Contact Us</a></li>
                        <li data-layout="item" class=" nav-item col-12 col-md-2 mx-4 fs-6"><a role="link" data-uia="footer-link" target="_self" class="text-white" style={{color:"#fff",opacity:"0.7"}} href="https://fast.com">Speed Test</a></li>
                        <li data-layout="item" class=" nav-item col-12 col-md-2 mx-4 fs-6"><a role="link" data-uia="footer-link" target="_self" class="text-white" style={{color:"#fff",opacity:"0.7"}} href="https://help.netflix.com/legal/notices">Legal Notices</a></li>
                        <li data-layout="item" class=" nav-item col-12 col-md-2 mx-4 fs-6"><a role="link" data-uia="footer-link" target="_self" class="text-white" style={{color:"#fff",opacity:"0.7"}} href="https://www.netflix.com/et/browse/genre/839338">Only on Netflix</a></li>
                    </ul>
                </div>
            
            </footer>
            <div className='container gap-5 d-flex flex-column flex-column' style={{color:"#fff",opacity:"0.7"}} >
            <div class="dropdown">
            <button class="btn btn-outline-secondary btn-sm dropdown-toggle text-white" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
               <i className='fa fa-language'></i> English
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
            </div>
            </div>
                <p>Netflix Ethiopia</p>
            </div>
            
            
        </div>
        
    )
}