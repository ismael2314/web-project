import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import ProImg from './assets/img/profile.jpg'
import Template from "./template/template";
import { useEffect, useState } from "react";
function App() {
  const [path,setPath]= useState([]);
  const [data,setData]=useState({})
  useEffect(()=>{
          const url = window.location.origin
          fetch(`${url}/data2.json`)
          .then(data=>{return data.json();})
          .then(json=>{
              setPath(Object.keys(json))
              setData(json)
            })
          .catch(err=>console.error("Error while fetching data from ",url))
          .finally(console.log("Request done!"))
      },[]);
  return (
    <div className="container-fluid">
      <BrowserRouter>
        {/* <Nav header="Ismael" logo={ProImg}/> */}
        <Routes>
          <Route path="/" element={<Template/>}>
            {
              path.map((e)=>{
                  return <Route path={`/${e}`} exact element={<Home src={ProImg} data={data[`${e}`]} selected={e} nav={path} action={()=>{}}/>}/>
              })
            }
          </Route>
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
