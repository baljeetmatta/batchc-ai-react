
import './App.css'
import Button from './components/Button'
import Count from './components/Count'
import CountClass from './components/CountClass'
import Greet from "./components/Greet"

function App() {
  
  const clientHandler=()=>{
alert("Button1 clicked")
  }
  const clientHandler1=()=>{
    alert("Button 2 clicked")
  }
  return (
    <>
      <div>
        {/* <Greet name="Code" years="10"/>
        <Greet name="Quotient" years="10"/>
        */}
        {/* <Greet name="Quotient" years={10}/>
        <Button value="Send" click={clientHandler}/>
        <Button value="Login" click={clientHandler1}/> */}

      <CountClass/>

        

       </div>
    </>
  )
}

export default App
