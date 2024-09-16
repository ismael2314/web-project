import React from "react";
import {Login,Signup} from "./component/authentication";
import { contact,Top,Bottom } from "./component/navigation";
import Landing from "./component/landing";
import './index.css'
function App() {
  return (
    <div>
      <contact/>
      <Top/>
      <Landing/>
      <Bottom/>
    </div>
    
  );
}
export default App;
