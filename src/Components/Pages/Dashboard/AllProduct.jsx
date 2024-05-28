import axios from "axios";
import { useEffect, useState } from "react";
import ProductRow from "../../Card/ProductRow";




export default function AllProduct() {
   
const [fashion, setFashion] = useState([])

useEffect(() => {
    async function load() {
      const data = await axios.get("http://localhost:3000/items");
      if (data?.status === 200) {
        setFashion(data?.data);
        // console.log(data)
      }
    }
  
    load();

    }, []);

  

  return (
    <div className="overflow-x-auto w-full px-16 mt-10">
      <h1 className="text-3xl mb-4">Mange All Product</h1>
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Price</th>
        <th>Category</th>
      </tr>
    </thead>
    <tbody>
     
     
          
          {
            fashion?.map((fashion) => (
            <ProductRow key={fashion?.id} fashion={fashion} />
          ))}
      

    </tbody>
  </table>
</div>
  )
}
