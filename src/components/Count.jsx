import { useState } from "react";
const Count = () => {
    //array destructing
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(false);
    //console.log(data);

    const updateCounter = () => {
        // counter++;
        // console.log(counter);
        //count++;
        setLoading(true)
        setTimeout(() => {
            setCount(count + 1);
            setLoading(false);
        }, 3000)
        //async

        console.log(count);



    }
    //  let counter=1;
    return (
        <div>
            Counter:{count}
            <button disabled={loading} onClick={updateCounter}>Change {count}</button>
            {count}
        </div>
    )
}
export default Count;
