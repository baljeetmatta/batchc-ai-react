// const UserPanel=(props)=>{
// return(
//     <>
//     USerPanel :{props.user.name}
//     </>
// )
// }
// export default UserPanel

import { useContext } from "react"
import { UserContext } from "./UserContext"

const UserPanel=(props)=>{
    const data=useContext(UserContext)
return(
    <>
    UserPanel :{data.name}
    </>
)
}
export default UserPanel