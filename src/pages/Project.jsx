import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import './index.css'
const Project = (props)=>{
 const {id} = useParams();
 const [data,setData] = useState([])
 const [tempdata,setTempData] = useState([])
 const [loading,setLoading]=useState(false)
 const [searchData,setSearchData] = useState('')
 const {url,header}={url:'/data.json',
    header:{'Content-Type': 'application/json',
        'Accept': 'application/json'}}
 useEffect(
    ()=>{
        fetch(url,header)
        .then((res)=>{return res})
        .then((json)=>{setLoading(true);return json.json()})
        .then((obj)=>{setTempData(obj);setData(obj);setLoading(false)})
        .catch(e=>{
            console.error('fetch-data :',e.message)
            return e.message
        })
    },[])

    useEffect(()=>{
    },[searchData])
    const handleSearch = (value)=>{
        console.log(value)
        if (value.lengh <0) {
            setData(tempdata)
            return
        }
        fetch(url,header)
        .then((res)=>{setLoading(true);return res})
        .then((json)=>{return json.json()})
        .then((obj)=>{setData(obj.filter((items)=> {return items.Title.match(value)}));setLoading(false)})
        .catch(e=>{
            console.error('fetch-data :',e.message)
            return e.message
        })
        console.log('....',data)
    }
    return(
        <>
        <div className="container bg-dark text-light rounded py-3 mb-3">
        <h1 className="px-3">Project {id}</h1>
        
        <hr />
        <div className="col-3 mx-3">
            <input className="form-control form-control-sm my-3" placeholder="Projects" onChange={(e)=> handleSearch(e.target.value)}/>
        </div>
       
        {!loading?
        <div className="scroll">
        {data.map((item,count)=>
            <div key={count}  className="d-flex  flex-wrap p-0 justify-content-between gap-3 mb-2 bg-secondary rounded text-light mx-3">
                <img src={props.src} alt="item" srcSet=""className="m-0 p-0 rounded-left img-fluid col-12 col-md-5 col-lg-4" />
                <div className="col-12 col-md-6 col-lg-7 py-5 px-3">
                
                <p className="h5">{item.Title}</p>
                <hr />
                <p>{item.Discription}</p>
                <p>{item.DevDate}</p>
                < div onClick={()=>{}} className="btn btn-light border col-lg-3 col-4 col-md-6">Sneak peek</div>
                </div>
            </div>
            )}
        </div>:<div className="d-flex justify-content-center">
                <div className="spinner-grow" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
            </div>
        }
         {
            data.length <= 0 && <p className="text-light text-center w-100 form-text">No Projects made yet</p>
        }
        </div>
            
            
            
        </>
        
        
    )
}

export default Project
