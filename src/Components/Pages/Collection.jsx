/* eslint-disable react/prop-types */


import { useEffect, useState } from "react";
import SingleCollection from "./SingleCollection";


export default function Collection() {

    const [fashion, setFashion] = useState([])

 useEffect( () => {
     fetch("http://localhost:3000/items")
  .then(res => res.json())
  .then(data => setFashion(data) )

 },[])


   


  return (

 <div className="mx-16">
        <h1 className="text-4xl my-20 text-center">Our Exclusive Collections..! </h1>
        <div className="grid grid-cols-4 gap-6">
          {
            fashion?.map((fashion) => (
              <SingleCollection key={fashion?.id} fashion={fashion} />
              
            ))}
        </div>
      </div>
          
    
  )
}
