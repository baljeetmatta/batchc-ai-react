import { useLocation } from "react-router-dom";

const About=()=>{
   const location= useLocation();

    return (
        <div>About us Page {location.state.user}</div>
    )
}
export default About;
