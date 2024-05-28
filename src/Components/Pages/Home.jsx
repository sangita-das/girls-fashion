import { useEffect, useState } from "react";
import Banner from "../Home/Banner";
import Features from "./Features";
import FashionCard from "../Card/FashionCard";
import CategoryCard from "../Card/CategoryCard";



export default function Home() {

  const [fashion, setFashion] = useState([])

  const [categories, setCategories] = useState ([]);


  useEffect( () => {
    /*  fetch("http://localhost:3000/items")
  .then(res => res.json())
  .then(data => setFashion(data) ) */

  /* ----previous and below both same data fetching------ */
/* ---get items---- */
  async function load(){
    const res = await fetch("http://localhost:3000/items");
    const data = await res.json();
    // console.log(data)
    setFashion(data);

      /* --get category */

  const res2 = await fetch("http://localhost:3000/accessories");
  const data2 = await res2.json();
  // console.log(data2)
  setCategories(data2);
  }
  load();

  /* fetch("http://localhost:3000/accessories")
  .then(res => res.json())
  .then(data => setCategories(data) ) */



  },[])
 
  return (
    <div className="bg-base-200"> 
    <Banner/>

    {/* --------Our Category--------- */}
       <div className="mx-16 ">
        <h1 className="text-4xl my-20 text-center "> Categories </h1>
        <div className="grid grid-cols-4 gap-6">
          {categories?.map((category) => (
            <CategoryCard key={category?.id} category={category} />
          ))}
        </div>
      </div>

      {/* ----New Collection---------- */}
       <div className="mx-16">
        <h1 className="text-4xl my-20 text-center">Our Exclusive Collections..! </h1>
        <div className="grid grid-cols-4 gap-6">
          {fashion
            ?.reverse()
            ?.slice(0, 4)
            ?.map((fashion) => (
              <FashionCard key={fashion?.id} fashion={fashion} />
            ))}
        </div>
      </div>

    <Features/>
    </div>
  )
}
