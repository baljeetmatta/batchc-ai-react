import Profile from "./Profile";
import Sidebar from "./Sidebar";
import { UserContext } from "./UserContext";
const UserDashboard=()=>{
    let obj={
        name:"Code",
        years:10
    }

    return (
        <>
       UserDashboard: {obj.name}
        {/* <Profile user={obj}/>
        <Sidebar user={obj}/> */}
        <UserContext.Provider value={obj}>
            <Profile/>
            
        </UserContext.Provider>

        </>
    )

}
export default UserDashboard;
