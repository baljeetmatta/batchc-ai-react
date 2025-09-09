import { useContext } from "react"
import { UserContext } from "./UserContext"

const Dashboard=()=>{
   const {name,setName} =useContext(UserContext);


    return (
        <>
        Dashboard page {name} </>
    )
}
export default Dashboard