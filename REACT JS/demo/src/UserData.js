import React, { useEffect, useRef, useState } from "react";

export default function UserData() {
    const[name,Setname] = useState('');
    // const[count,Setcount] = useState(0);
    const count = useRef(0);
    useEffect(()=>{
        count.current = count.current + 1;
       
    })
    useEffect(()=>{
       const mydata = localStorage();  
    })
    return (
        <>
        <input
            type="text"
            value={name}
            onChange={(a) => Setname(a.target.value)}
            placeholder="Enter Name:">
           
        </input>
        <h1>{name}</h1>
        <h2>{count.current}</h2>
        </>
    )
} 

// import { useEffect, useState } from "react";

// function LocalStorageDemo(){
//     const [name,setName] = useState('');
    
//     useEffect(()=>{
//         const myData = localStorage.getItem("Data")
//         if(myData) setName(myData)
//     },[]);

//     useEffect(()=>{
//         const t = setTimeout(()=>{
//             localStorage.setItem("Data",name)
//         },2000)
//         return () =>clearTimeout(t)
//     },[name]);
//     return(
//         <>
//             <input
//             type="text"
//             value={name}
//             onChange={(i)=>setName(i.target.value)}
//             placeholder="enetr a name:"/>
//             <h1>{name}</h1>
           
//         </>
//     ); 
// }
// export default LocalStorageDemo;