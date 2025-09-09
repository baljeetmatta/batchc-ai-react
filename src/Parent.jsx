import { useContext } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "./components/UserContext";

const Parent=()=>{
   const{name,setName}= useContext(UserContext);
const navigate=useNavigate();
    return (
        <>
        Parent 
        <div>
           {name==""?<Navigate to="/login"/> : <Outlet/>}
            
            </div>
        </>
    )
}
export default Parent;
