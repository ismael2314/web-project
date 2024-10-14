import { Hero, Skills } from "../components/Container"

const Home = (prop)=>{
    return(
        <div>
            <Hero src={prop.src}/>
            <Skills/>
        </div>
    )
}

export default Home