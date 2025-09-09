// import UserPanel from "./UserPanel";

import { useContext } from "react";
import { UserContext } from "./UserContext";
import UserPanel from "./UserPanel";

// const Profile=(props)=>{
// return(
//     <>
//     Profile: {props.user.name}
//     <UserPanel user={props.user}/>

//     </>
// )

// }
// export default Profile;



const Profile=()=>{
   const data= useContext(UserContext);

return(
    <>
    Profile: {data.name}
  <UserPanel/>
    
    </>
)

}
export default Profile;
