import { useEffect, useState } from "react"

const Ctimer = () => {
    const [count, setCount] = useState(1)
    const changeCount = () => {
        
        setCount(count + 1);
        console.log("Change...")

    }
    useEffect(()=>{
     let id=   setTimeout(changeCount,800)

   //  return ()=>clearInterval(id);
        //each re-render
    },[count])//once 
  //  console.log("Called");
  //setTimeout(changeCount,800);



    return (
        <>
            Count:{count}
            <button onClick={changeCount}>Change </button>
        </>
    )

}
export default Ctimer;