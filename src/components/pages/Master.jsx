import { Outlet, useParams } from "react-router-dom";

const Master=()=>{
    const params= useParams();

    return (
        <>        
        <div>Dynamic Routing {params.category} </div>
        <Outlet/>

        </>

    )
}
export default Master;