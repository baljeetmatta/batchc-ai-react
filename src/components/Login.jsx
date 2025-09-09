// import { useState } from "react";

// const Login=()=>{

//     const [username,setUsername]=useState("")

//     const usernameHandler=(e)=>{
//         setUsername(e.target.value);

//     }
//     const loginHandler=()=>{
//         console.log(username);
        
//     }
//     return (
//         <>
//         <div>
//             <div><label>Username</label><div><input value={username} onChange={usernameHandler}  type="text"/></div></div>
//              <div><label>Password</label><div><input type="password"/></div></div>
//              <div><button onClick={loginHandler}>Login</button></div>
//         </div>
//         </>
//     )

// }
// export default Login;
import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";

const Login=()=>{
   const {name,setName}= useContext(UserContext);

    const [errors,setErrors]=useState("")
    const [isLoading,setLoading]=useState(false);

    const navigate=useNavigate();
    const userRef=useRef();
    const passRef=useRef();

    const loginHandler=()=>{
       // console.log(userRef.current.value);
        //console.log(passRef.current.value);
        let username=userRef.current.value;
        let password=passRef.current.value;
        setLoading(false);
        fetch("./users.json")
        .then((response)=>{
            return response.json();
            

        }).then((response)=>{

         const result=   response.filter((item)=>{
                if(item.username==username && item.password==password)
                    return true;
            })
            if(result.length==0)
            {
                setErrors("Invalid user/password");


            }
            else
            {
                setName(username);
                
                navigate("/dashboard");

                
            }

        })

    }
  
    return (
        <>
        <div>
            <div>{errors}</div>
            <div><label>Username</label><div><input ref={userRef}  type="text"/></div></div>
             <div><label>Password</label><div><input ref={passRef} type="password"/></div></div>
             <div><button disabled={isLoading} onClick={loginHandler}>{isLoading?"Loading...":"Login"}</button></div>
        </div>
        </>
    )

}
export default Login;

