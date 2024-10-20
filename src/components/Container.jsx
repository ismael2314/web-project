
import { Link } from "react-router-dom";
export const Hero = (props) => {
  
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center py-5 px-5 bg-dark rounded text-light">
      <div className="row gap-">
        <div className="col-6 d-flex flex-column gap-5 justify-content-center">
          <div>
            <h1 className="display-4 fw-bold">Ismael.Y</h1>
            <hr />
            <p>I am a team player who is committed to learning, excellence, ethics and skill improvement with great interest in technology and innovations. </p>
            <Link className="btn btn-light" to="/cv" ><i className='fa fa-download'></i> DownloadCV</Link>
          </div>
          
        </div>
        <div className="col-6">
        <div id="hoverImg" className="p-skill col-3 position-absolute"></div>
          <img
            src={props.src}
            alt="profile"
            srcSet=""
            className="bg-light img-fluid rounded-circle"
          />
        </div>
      </div>
      <div className="container col-12 align-items-start pt-4">
      <div className="bg-secondary rounded d-flex gap-3 p-2">
            <div className="btn btn-secondary " onClick={(e)=>window.open('https://github.com/ismael2314','_black')}>
              <i className="fa-brands fa-github"></i> GitHub
            </div>
            <div className="btn btn-secondary " onClick={(e)=>window.open('https://www.linkedin.com/in/ismael-yusuf/','_black')}>
              <i className="fa-brands fa-linkedin"></i> LinkedIn
            </div>
            <div className="btn btn-secondary " onClick={(e)=>window.open('https://www.upwork.com/freelancers/~011238a414ee9b69e3?mp_source=share','_black')}>
              <i className="fa-brands fa-upwork"></i> Upwork
            </div>
          </div>
      </div>
      
    </div>
  );
};

export const Skills = () => {
  return (
    <div className="container d-flex flex-column gap-5 justify-content-center py-5 px-5 my-3 bg-dark rounded text-light">
      <div className="text-center">
        <h1 className="display-4 fw-bold">Skills</h1>
        <hr />
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      </div>

      <div className="row gap-3 justify-content-center position-relative">
        <div id="hover" className="p-skill col-3 position-absolute translate-middle top-50 start-50"></div>
        <div className="port-card p-skill col-12 col-md-5 col-lg-3 p-3 bg-secondary rounded d-flex flex-column justify-content-center align-items-center gap-1">
            <div className="d-flex flex-column gap-1">
                <i className="fa-brands fa-react display-3"></i>
                <h4>React</h4>
            </div>
            <button className="btn btn-secondary col-12"><i className="fa fa-link "></i> View</button>
        </div>
        <div className="port-card p-skill col-12 col-md-5 col-lg-3 p-3 bg-secondary rounded d-flex flex-column justify-content-center align-items-center gap-1">
            <div className="d-flex flex-column gap-1 align-items-center">
                <i className="fa-brands fa-js display-3"></i>
                <h4>JavaScript</h4>
            </div>
            <button className="btn btn-secondary col-12"><i className="fa fa-link "></i> View</button>
        </div>
        <div className="port-card p-skill col-12 col-md-5 col-lg-3 p-3 bg-secondary rounded d-flex flex-column justify-content-center align-items-center gap-1">
            <div className="d-flex flex-column gap-1 align-items-center">
                <i className="fa-brands fa-html5 display-3"></i>
                <h4>HTML5</h4>
            </div>
            <button className="btn btn-secondary col-12"><i className="fa fa-link "></i> View</button>
        </div>

        <div className="port-card p-skill col-12 col-md-5 col-lg-3 p-3 bg-secondary rounded d-flex flex-column justify-content-center align-items-center gap-1">
            <div className="d-flex flex-column gap-1 align-items-center">
                <i className="fa-brands fa-css3 display-3"></i>
                <h4>CSS</h4>
            </div>
            <button className="btn btn-secondary col-12"><i className="fa fa-link "></i> View</button>
        </div>
        <div className="port-card p-skill col-12 col-md-5 col-lg-3 p-3 bg-secondary rounded d-flex flex-column justify-content-center align-items-center gap-1">
            <div className="d-flex flex-column gap-1 align-items-center">
                <i className="fa-brands fa-java display-3"></i>
                <h4>Java</h4>
            </div>
            <button className="btn btn-secondary col-12"><i className="fa fa-link "></i> View</button>
        </div>
        <div className="port-card p-skill col-12 col-md-5 col-lg-3 p-3 bg-secondary rounded d-flex flex-column justify-content-center align-items-center gap-1">
            <div className="d-flex flex-column gap-1 align-items-center">
                <i className="fa-brands fa-bootstrap display-3"></i>
                <h4>Bootstrap</h4>
            </div>
            <button className="btn btn-secondary col-12"><i className="fa fa-link "></i> View</button>
        </div>
        <div className="port-card p-skill col-12 col-md-5 col-lg-3 p-3 bg-secondary rounded d-flex flex-column justify-content-center align-items-center gap-1">
            <div className="d-flex flex-column gap-1 align-items-center">
                <i className="fa fa-database display-3"></i>
                <h4>MySql</h4>
            </div>
            <button className="btn btn-secondary col-12"><i className="fa fa-link "></i> View</button>
        </div>
        <div className="port-card  p-skill col-12 col-md-5 col-lg-3 p-3 bg-secondary rounded d-flex flex-column justify-content-center align-items-center gap-1">
            <div className="d-flex flex-column gap-1 align-items-center">
                <i className="fa-solid fa-database display-3"></i>
                <h4>MSSQL</h4>
            </div>
            <button className="btn btn-secondary col-12"><i className="fa fa-link "></i> View</button>
        </div>

        <div className="port-card p-skill col-12 col-md-5 col-lg-3 p-3 bg-secondary rounded d-flex flex-column justify-content-center align-items-center gap-1">
            <div className="d-flex flex-column gap-1 align-items-center">
                <i className="fa-brands fa-node-js display-3"></i>
                <h4>NodeJs</h4>
            </div>
            <button className="btn btn-secondary col-12"><i className="fa fa-link "></i> View</button>
        </div>
        
      </div>
    </div>
  );
};

export const Social = () => {
  return <div className="container d-flex justify-content-center py-4 my-1 px-5 bg-dark rounded text-light">
      <div className="row gap-">
        
      </div>
    </div>
};

export const Contact = () => {
  const handle=(e)=>{
      e.preventDefault()
  }
  return <div className="container-fluid d-flex flex-column py-4 my-1 px-5 bg-dark rounded text-light">
    <h1 className="px-3">Contact Me</h1>
    <hr />
      <form className="row" onSubmit={handle}>
        <div className="col-12 gap-1 d-flex flex-column my-1">
          <label htmlFor="" className="px-2">Name *</label>
          <input type="text" className="form-control" placeholder="eg : jone Doe"/>
        </div>
        <div className="col-12 gap-1 d-flex flex-column my-1">
          <label htmlFor="" className="px-2">Email *</label>
          <input type="text" className="form-control" placeholder="eg : joneDoe@example.com"/>
        </div>

        <div className="col-12 gap-1 d-flex flex-column my-1">
          <label htmlFor="" className="px-2">Reason *</label>
          <textarea rows={5} type="text" className="form-control noresize" placeholder="Write something..."/>
        </div>
        <div className="col-12 gap-1 d-flex  my-1 justify-content-end">
          <button className="btn btn-secondary" type='reset'>Clear</button>
          <button className="btn btn-light" type="submit">Send</button>
        </div>
      </form>
    </div>
};
