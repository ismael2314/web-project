import { useEffect } from "react";
import { Link } from "react-router-dom";
export const Hero = (props) => {
  useEffect(()=>{
    console.log("------",props)
  },[])
  return (
    <div className="container-fluid d-flex flex-column align-items-center justify-content-center rounded vh-100">
      <div className="row gap h-100">
        <div className="col-5 d-flex flex-column gap-5 justify-content-center">
          <div className="">
            {
              props?.list?.map((e)=>{
                  return(
                    <>
                    <h1 className="display-3 fw-bold text-">{e?.header.toUpperCase()}</h1>
                      <hr />
                      {
                        e?.paragraph?.map((x)=>{
                          return <p className="text-left">
                        {x}
                      </p>
                        })
                      }
                      {
                        e?.link?.map((x)=>{
                          return <Link className="btn btn-light w-100" to={x?.href}>
                                  <i className="fa fa-download"></i> {x?.text}
                                </Link>
                        })
                      }
                      <div className="btn-group w-100">
                      {e?.contactDetail?.map((s)=>{

                        return (
                        <div
                            className="btn btn-secondary "
                            onClick={(e) =>window.open(s?.href, "_black")}>
                            <i className={`fa-brands fa-${s.text.toLowerCase()}`}></i> {s?.text}
                          </div>)
                        })}
                        </div>
                    </>
                  )
              })
            }
          </div>
        </div>

        <div className="col-2 vh-100 bg-white">
          <ul className="navbar-nav">
            {
              props?.nav?.map((p)=>{
                return <>
                  <li className="nav-item">
                    <a className="nav-link" href={`/${p}`}>
                      {p.toUpperCase()}
                    </a>
                  </li>
                </>
              })
            }
          </ul>
        </div>

        <div className="col-5 d-flex flex-column align-items-center justify-content-center">
            {
              props?.detail?.map((e)=>{
                if(e?.img){
                  return <img
                    src={`${window.location.origin}/${e?.img}`}
                    alt="profile"
                    srcSet=""
                    className="bg-light img-fluid rounded-circle"
                  />
                }
              })
            }
          
          <div>
            <div className="align-items-start pt-4">
              
                {
                  props?.detail?.map((e)=>{
                      return <div className="rounded d-flex gap-3 p-2">
                      {e?.connect?.map((s)=>{

                        return (
                        <div
                            className="btn btn-secondary "
                            onClick={(e) =>window.open(s?.href, "_black")}>
                            <i className={`fa-brands fa-${s.text.toLowerCase()}`}></i> {s?.text}
                          </div>)
                        })}
                      </div>
                  })
                }
                
            </div>
            <div id={props.navSelected} className="d-flex flex-wrap gap-2">
                {
                  props?.data?.map((e)=>{
                      return <>
                        <div className="card flex-fill col-5">
                            <h4 className="card-header">{e?.name}</h4>
                            <div className="card-body d-flex flex-column">
                                <p>{e?.name}</p>
                                <div className="gap-1 d-flex flex-wrap">
                                  {
                                    e?.progLang?.map((e)=>{
                                      return <span className="badge bg-dark ">{e}</span>
                                    })
                                  }
                                </div>
                                
                            </div>
                            <div className="card-footer">
                            </div>
                        </div>
                      </>
                  })
                }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Skills = () => {
  return (
    <div className="container-fluid d-flex flex-column gap-5 justify-content-center py-5 px-5 my-3 bg-dark rounded text-light">
      <div className="text-center">
        <h1 className="display-4 fw-bold">Skills</h1>
        <hr />
      </div>

      <div className="row gap-3 justify-content-center position-relative">
        <div
          id="hover"
          className="p-skill col-3 position-absolute translate-middle top-50 start-50"
        ></div>
        <div className="port-card p-skill col-12 col-md-5 col-lg-3 p-3 bg-secondary rounded d-flex flex-column justify-content-center align-items-center gap-1">
          <div className="d-flex flex-column gap-1">
            <i className="fa-brands fa-react display-3"></i>
            <h4>React</h4>
          </div>
          <button className="btn btn-secondary col-12">
            <i className="fa fa-link "></i> View
          </button>
        </div>
        <div className="port-card p-skill col-12 col-md-5 col-lg-3 p-3 bg-secondary rounded d-flex flex-column justify-content-center align-items-center gap-1">
          <div className="d-flex flex-column gap-1 align-items-center">
            <i className="fa-brands fa-js display-3"></i>
            <h4>JavaScript</h4>
          </div>
          <button className="btn btn-secondary col-12">
            <i className="fa fa-link "></i> View
          </button>
        </div>
        <div className="port-card p-skill col-12 col-md-5 col-lg-3 p-3 bg-secondary rounded d-flex flex-column justify-content-center align-items-center gap-1">
          <div className="d-flex flex-column gap-1 align-items-center">
            <i className="fa-brands fa-html5 display-3"></i>
            <h4>HTML5</h4>
          </div>
          <button className="btn btn-secondary col-12">
            <i className="fa fa-link "></i> View
          </button>
        </div>

        <div className="port-card p-skill col-12 col-md-5 col-lg-3 p-3 bg-secondary rounded d-flex flex-column justify-content-center align-items-center gap-1">
          <div className="d-flex flex-column gap-1 align-items-center">
            <i className="fa-brands fa-css3 display-3"></i>
            <h4>CSS</h4>
          </div>
          <button className="btn btn-secondary col-12">
            <i className="fa fa-link "></i> View
          </button>
        </div>
        <div className="port-card p-skill col-12 col-md-5 col-lg-3 p-3 bg-secondary rounded d-flex flex-column justify-content-center align-items-center gap-1">
          <div className="d-flex flex-column gap-1 align-items-center">
            <i className="fa-brands fa-java display-3"></i>
            <h4>Java</h4>
          </div>
          <button className="btn btn-secondary col-12">
            <i className="fa fa-link "></i> View
          </button>
        </div>
        <div className="port-card p-skill col-12 col-md-5 col-lg-3 p-3 bg-secondary rounded d-flex flex-column justify-content-center align-items-center gap-1">
          <div className="d-flex flex-column gap-1 align-items-center">
            <i className="fa-brands fa-bootstrap display-3"></i>
            <h4>Bootstrap</h4>
          </div>
          <button className="btn btn-secondary col-12">
            <i className="fa fa-link "></i> View
          </button>
        </div>
        <div className="port-card p-skill col-12 col-md-5 col-lg-3 p-3 bg-secondary rounded d-flex flex-column justify-content-center align-items-center gap-1">
          <div className="d-flex flex-column gap-1 align-items-center">
            <i className="fa fa-database display-3"></i>
            <h4>MySql</h4>
          </div>
          <button className="btn btn-secondary col-12">
            <i className="fa fa-link "></i> View
          </button>
        </div>
        <div className="port-card  p-skill col-12 col-md-5 col-lg-3 p-3 bg-secondary rounded d-flex flex-column justify-content-center align-items-center gap-1">
          <div className="d-flex flex-column gap-1 align-items-center">
            <i className="fa-solid fa-database display-3"></i>
            <h4>MSSQL</h4>
          </div>
          <button className="btn btn-secondary col-12">
            <i className="fa fa-link "></i> View
          </button>
        </div>

        <div className="port-card p-skill col-12 col-md-5 col-lg-3 p-3 bg-secondary rounded d-flex flex-column justify-content-center align-items-center gap-1">
          <div className="d-flex flex-column gap-1 align-items-center">
            <i className="fa-brands fa-node-js display-3"></i>
            <h4>NodeJs</h4>
          </div>
          <button className="btn btn-secondary col-12">
            <i className="fa fa-link "></i> View
          </button>
        </div>
      </div>
    </div>
  );
};

export const Social = () => {
  return (
    <div className="container d-flex justify-content-center py-4 my-1 px-5 bg-dark rounded text-light">
      <div className="row gap-"></div>
    </div>
  );
};

export const Contact = () => {
  const handle = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container-fluid d-flex flex-column py-4 my-1 px-5 bg-dark rounded text-light">
      <h1 className="px-3">Contact Me</h1>
      <hr />
      <form className="row" onSubmit={handle}>
        <div className="col-12 gap-1 d-flex flex-column my-1">
          <label htmlFor="" className="px-2">
            Name *
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="eg : jone Doe"
          />
        </div>
        <div className="col-12 gap-1 d-flex flex-column my-1">
          <label htmlFor="" className="px-2">
            Email *
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="eg : joneDoe@example.com"
          />
        </div>

        <div className="col-12 gap-1 d-flex flex-column my-1">
          <label htmlFor="" className="px-2">
            Reason *
          </label>
          <textarea
            rows={5}
            type="text"
            className="form-control noresize"
            placeholder="Write something..."
          />
        </div>
        <div className="col-12 gap-1 d-flex  my-1 justify-content-end">
          <button className="btn btn-secondary" type="reset">
            Clear
          </button>
          <button className="btn btn-light" type="submit">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};
