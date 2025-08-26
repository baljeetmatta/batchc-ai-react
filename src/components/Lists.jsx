const data=["First","Second","Third"];
import products from "../products.json";
//for,forEach,filter,map
const Lists=()=>{
    return (
        <div>
            <ul>
                {
                    data.map((item,index)=>{
                        return <li key={index}>{item}</li>
                    })

                }

            </ul>
            <ul>
                {
                    products.map((item)=>{
                        return <li key={item.id}>{item.name}</li>
                    })

                }

            </ul>


        </div>
    )
}
export default Lists;
