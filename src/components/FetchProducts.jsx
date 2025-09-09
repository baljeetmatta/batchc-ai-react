import { useEffect, useState } from "react";

const FetchProducts=()=>{

    const [products,setProducts]=useState([]);
        //let products=[];//array of products(objects)
//for,forEach,filter,map
    useEffect(()=>{

        fetch("./products.json")
        .then((response)=>{
            return response.json();
        }).then((response)=>{
           // products=response;
           setProducts(response);//async

           //console.log(products);

        })

    },[]);//only once


    return (
        <>
        <div>
            <table>
                <thead>
                    <tr>
                    <th>ID</th><th>Name</th><th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    
            {
                products.map((item)=>{
                    return (
                       <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                        </tr>
                    )
                })
            }

                </tbody>
            </table>
        </div>
        
        </>
    )


}
export default FetchProducts;
