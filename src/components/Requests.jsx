import { useEffect, useState } from "react";

const Requests=()=>{

   // let page=1;
   const [page,setPage]=useState(1);
    const [users,setUsers]=useState([]);
    const [isLoading,setLoading]=useState(false);
        //let products=[];//array of products(objects)
//for,forEach,filter,map
    useEffect(()=>{

            setLoading(true);

        fetch("https://reqres.in/api/users?page="+page,{
            headers:{
                'x-api-key': 'reqres-free-v1'
            }
        })
        .then((response)=>{
            return response.json();
        }).then((response)=>{
           // products=response;
           setUsers(response.data);//async
           setLoading(false);

           //console.log(products);

        })

    },[page]);//only once

    if(isLoading)
    {
        return (
            <>Loading...</>
        )
    }

    return (
        <>
        <div>
            <button onClick={()=>{setPage(page+1)}}>Next</button>
            <table>
                <thead>
                    <tr>
                    <th>Email</th><th>First Name</th><th>Last name</th>
                    </tr>
                </thead>
                <tbody>
                    
            {
                users.map((item)=>{
                    return (
                       <tr>
                            <td>{item.email}</td>
                            <td>{item.first_name}</td>
                            <td>{item.last_name}</td>
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
export default Requests;
