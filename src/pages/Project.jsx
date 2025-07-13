import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Netflix from '../assets/img/Screenshot 2024-09-28 210139.png'
import Veternary from '../assets/img/profile.jpg'
import './index.css'
const Project = (props)=>{
 const {id} = useParams();
 const [data,setData] = useState([])
 const [tempdata,setTempData] = useState([])
 const [loading,setLoading]=useState(false)
 const [searchData,setSearchData] = useState('')
    return(
        <>
        <div className="container bg-dark text-light rounded py-3 mb-3">
        <h1 className="px-3">Project {id}</h1>
        <hr />
        <div className="scroll">
            <div key='1'  className="d-flex  flex-wrap p-0 justify-content-between gap-3 mb-2 bg-secondary rounded text-light mx-3">
                <img src={Netflix} alt="item" srcSet=""className="m-0 p-0 rounded-left img-fluid col-12 col-md-5 col-lg-4" />
                <div className="col-12 col-md-6 col-lg-7 py-5 px-3">
                  <p className="h5">Netfilix Clon</p>
                  <hr />
                  <p>This project showcases my skills in web development, with a focus on creating a functional and visually appealing replica of the popular streaming platform, Netflix.</p>   
                   <div onClick={()=>{}} className="btn btn-light border col-lg-3 col-4 col-md-6">Sneak peek</div>
                </div>
            </div>
        
        </div>
        </div>
            
            
            
        </>
        
        
    )
}

export default Project
