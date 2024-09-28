import {Footer, Top} from './component/navigation'
import { Hero } from './component/hero';
import { News } from './component/news';

function App() {
  return (
    <div>
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/bfc0fc46-24f6-4d70-85b3-7799315c01dd/web/ET-en-20240923-TRIFECTA-perspective_137cc319-7c1f-41a7-a8a8-51f8715122a9_large.jpg" 
    alt="" srcset="" class="position-absolute top-0 img-fluid" style={
      {zIndex: -1,
        height:"140%",
        width:"100%"

      }

    }/><div className="position-absolute img-fluid top-0 w-100 " style={
        {zIndex: -1,
         opacity:"0.8",
         backgroundColor:"#000",
         height:"140%",
        
        }
      }></div>
      <Top/>
      <Hero />
      <News/>
      <Footer/>
    </div>
  );
}

export default App;
