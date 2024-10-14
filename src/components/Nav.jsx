import { Link } from "react-router-dom";

const Nav = (props) => {
    const changeTitle = (path)=>{
        document.title=window.location.pathname=='/'?'Portiflio':'Portiflio - '+path
    }
    const navHandle = (e)=>{
        changeTitle(e.target.href.split('/')[e.target.href.split('/').length-1])
    }
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark rounded my-3">
      <div className="container-fluid ">
        <div className="d-flex justify-content-between">
            <span>
            <img src={props.logo} alt="" srcSet="" className="img-fluid col-1 rounded-circle"/>
            <span className="navbar-brand mb-0 h1 px-2">{props.header}</span>
            </span>
            
            <button className="navbar-toggler justify-content-end" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
        </div>
      
      
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/" >Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/projects" >Projects</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact" >Contact</Link>
        </li>
    
      </ul>
    </div>
    </div>
    </nav>
  );
};

export default Nav
