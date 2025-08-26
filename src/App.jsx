
// import { Outlet, Route, Routes } from 'react-router-dom'
// import './App.css'
// import Button from './components/Button'
// import Count from './components/Count'
// import CountClass from './components/CountClass'
// import Greet from "./components/Greet"
// import Home from './components/pages/home'
// import Contact from './components/pages/contact'
// import About from './components/pages/aboutus'
// import Navbar from './components/pages/Navbar'
// import Electronics from './components/pages/electronics'
// import Mobiles from './components/pages/mobiles'
// import Fashion from './components/pages/fashion'
// import Master from './components/pages/Master'
// import { useNavigate } from 'react-router-dom'
// function App() {
//  const navigate= useNavigate();

import { createBrowserRouter, RouterProvider } from "react-router-dom";

//   const contactHandler=()=>{
//     let user="CodeQuotient"
//      // navigate("/demo/"+user);
//      navigate("/demo",{state:{user:user}});



//   }
//   const clientHandler = () => {
//     alert("Button1 clicked")
//   }
//   const clientHandler1 = () => {
//     alert("Button 2 clicked")
//   }
//   return (
//     <>
//       <div>
//         {/* <Greet name="Code" years="10"/>
//         <Greet name="Quotient" years="10"/>
//         */}
//         {/* <Greet name="Quotient" years={10}/>
//         <Button value="Send" click={clientHandler}/>
//         <Button value="Login" click={clientHandler1}/> */}

//         {/* <CountClass/> */}
//         Application
//         <Navbar />
// <button onClick={contactHandler}>Contact </button>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/Demo/" element={<About/>}/>
//           <Route path="/products/:category/:no" element={<Master/>}/>

//           {/* <Route path="/products/" element={<><div>Parent -1</div><Outlet/></>}>
//             <Route path="electronics" element={<Electronics />} />
//             <Route path="mobiles" element={<Mobiles />} />
//             <Route path="fashion" element={<Fashion />} />

//           </Route> */}
//         </Routes>



//       </div>
//     </>
//   )
// }

// export default App
import Home from "./components/pages/home";
import About from "./components/pages/aboutus";
import Products from "./components/Products";
import Lists from "./components/Lists"
import Ctimer from "./components/Ctimer";
import ClassTimer from "./components/ClassTimer";
const testFunction=()=>{
  return "Hi"
}

const routes=createBrowserRouter([
  {
    path:"/",
    element:<ClassTimer/>
  },
  {
    path:"/about",
    element:<About/>
  },
  {
    path:"/products",
    element:<Products/>,
    loader:testFunction

  }

])


const App=()=>{

    return (
      <>
      Application Task 
      <RouterProvider router={routes}/>

      
      </>
    )


}
export default App;