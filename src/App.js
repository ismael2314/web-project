import { useState } from "react";
import { Contacts } from "./component/contact";
import { Forms } from "./component/form";
import { Progress } from "./component/progress";
import logo from "./tsedeyBankLogo.png"
function App() {
  const [data,setData] =useState([]); 
  const batch = [
    {
      batch:"Batch 1",
      elapsedtime:"30sec",
      status:"1"
    }
  ]
  return (
    <div className="container-fluid">
      <div className="container py-1 d-flex justify-content-between align-items-center">
            <img src={logo} alt="" srcSet="" className="img-fluid col-5 col-md-2"/>
            <h1 className="display-4 fw-bolder text-center py-3"></h1>
        </div>
      <div className="container w-100 p-0">
        <div className="row gap-1 p-0">
          <Forms className="col-12 col-md-3 "/>
          <Progress className="col-12 col-md-8 p-0 bg-light px-2" batchList={batch}/>
        </div>
      </div>
      <Contacts data={data}/>

    </div>
  );
}

export default App;
