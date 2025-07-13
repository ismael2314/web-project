import { useEffect, useState } from "react"
import { Hero } from "../components/Container"

const Home = (prop)=>{
    const [profile,setProfile]=useState({})

    useEffect(()=>{
        setProfile(prop?.data)
    },[]);
    
    return(
        <div>
            <Hero 
                src={prop.src} 
                list={profile.detail} 
                detail={profile.summary} 
                data={profile.data}
                nav={prop.nav} 
                navSelected={prop.selected}
                action={prop.setCurrentNav}/>
        </div>
    )
}

export default Home