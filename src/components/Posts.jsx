import { useEffect, useState } from "react";

const Posts=()=>{

    const [posts,setPosts]=useState([]);
        //let products=[];//array of products(objects)
//for,forEach,filter,map
    useEffect(()=>{

        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>{
            return response.json();
        }).then((response)=>{
           // products=response;
           setPosts(response);//async

           //console.log(products);

        })

    },[]);//only once


    return (
        <>
        <div>
            <table>
                <thead>
                    <tr>
                    <th>ID</th><th>Title</th><th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    
            {
                posts.map((item)=>{
                    return (
                       <tr>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.body}</td>
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
export default Posts;
