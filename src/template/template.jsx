import { Outlet } from "react-router-dom"
const Template = ()=>{
    return(
        <div className="container-fluid d-flex flex-column align-items-center justify-content-center rounded vh-100">
              <div className="row gap h-100">
                <Outlet/>
              </div>
            </div>
    )
}

export default Template;