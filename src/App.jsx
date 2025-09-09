
// // import { Outlet, Route, Routes } from 'react-router-dom'
// // import './App.css'
// // import Button from './components/Button'
// // import Count from './components/Count'
// // import CountClass from './components/CountClass'
// // import Greet from "./components/Greet"
// // import Home from './components/pages/home'
// // import Contact from './components/pages/contact'
// // import About from './components/pages/aboutus'
// // import Navbar from './components/pages/Navbar'
// // import Electronics from './components/pages/electronics'
// // import Mobiles from './components/pages/mobiles'
// // import Fashion from './components/pages/fashion'
// // import Master from './components/pages/Master'
// // import { useNavigate } from 'react-router-dom'
// // function App() {
// //  const navigate= useNavigate();

// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// //   const contactHandler=()=>{
// //     let user="CodeQuotient"
// //      // navigate("/demo/"+user);
// //      navigate("/demo",{state:{user:user}});



// //   }
// //   const clientHandler = () => {
// //     alert("Button1 clicked")
// //   }
// //   const clientHandler1 = () => {
// //     alert("Button 2 clicked")
// //   }
// //   return (
// //     <>
// //       <div>
// //         {/* <Greet name="Code" years="10"/>
// //         <Greet name="Quotient" years="10"/>
// //         */}
// //         {/* <Greet name="Quotient" years={10}/>
// //         <Button value="Send" click={clientHandler}/>
// //         <Button value="Login" click={clientHandler1}/> */}

// //         {/* <CountClass/> */}
// //         Application
// //         <Navbar />
// // <button onClick={contactHandler}>Contact </button>
// //         <Routes>
// //           <Route path="/" element={<Home />} />
// //           <Route path="/about" element={<About />} />
// //           <Route path="/contact" element={<Contact />} />
// //           <Route path="/Demo/" element={<About/>}/>
// //           <Route path="/products/:category/:no" element={<Master/>}/>

// //           {/* <Route path="/products/" element={<><div>Parent -1</div><Outlet/></>}>
// //             <Route path="electronics" element={<Electronics />} />
// //             <Route path="mobiles" element={<Mobiles />} />
// //             <Route path="fashion" element={<Fashion />} />

// //           </Route> */}
// //         </Routes>



// //       </div>
// //     </>
// //   )
// // }

// // export default App
// import Home from "./components/pages/home";
// import About from "./components/pages/aboutus";
// import Products from "./components/Products";
// import Lists from "./components/Lists"
// import Ctimer from "./components/Ctimer";
// import ClassTimer from "./components/ClassTimer";
// import FetchProducts from "./components/FetchProducts";
// import Posts from "./components/Posts";
// import Requests from "./components/Requests";
// import Login from "./components/Login";
// import Dashboard from "./components/Dashboard";
// const testFunction=()=>{
//   return "Hi"
// }

// const routes=createBrowserRouter([
//   {
//     path:"/",
//     element:<Login />
//   },
//   {
//     path:"/about",
//     element:<About/>
//   },
//   {
//     path:"/products",
//     element:<Products/>,
//     loader:testFunction

//   }

//   ,
//   {
//     path:"/dashboard",
//     element:<Dashboard/>,
//     loader:testFunction

//   }

// ])


// const App=()=>{

//     return (
//       <>
//       Application Task 
//       <RouterProvider router={routes}/>

      
//       </>
//     )


// }
// export default App;
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login"
import UserDashboard from "./components/UserDashboard";
import Dashboard from "./components/Dashboard";
import { UserContext } from "./components/UserContext";
import { useState } from "react";
import Parent from "./Parent";
const App=()=>{

const [name,setName]=useState("");

  return (
    <>
 <UserContext.Provider value={{name,setName}}>

    <Routes>
      {/* <Route path="/" element={<UserDashboard/>}></Route>
       */}
     
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/" element={<Parent/>}>
      <Route path="dashboard" element={<Dashboard/>}></Route>
    
    </Route>
    
    </Routes>
    </UserContext.Provider>

    </>
  )

}
export default App;