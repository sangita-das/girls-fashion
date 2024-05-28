import axios from "axios";
import { useEffect, useState } from "react";


export default function AddProduct() {

     const [categories, setCategories] = useState();

  useEffect(() => {
    async function load() {
      const data = await axios.get("http://localhost:3000/accessories");
      if (data?.status === 200) {
        console.log(data?.data);
        setCategories(data?.data);
      }
    }

    load();
  }, []);

  const handleCreatecategory = async (e) => {
    e.preventDefault();

    const form = e.target;

    const id = form.id.value;
    const title = form.title.value;
    const price = form.price.value;
    const categories = form.categories.value;
    const description = form.description.value;
    const productData = {
      id,
      title,
      price,
      categories,
      description,
    };

    await axios.post("http://localhost:3000/items", productData);
  };


  return ( 
    <div className="w-full px-16">
      <h1 className="text-4xl mb-4">Add Product</h1>
      <form onSubmit={handleCreatecategory} className="w-full ">
        <div className="mb-4 ">
          <label htmlFor="">Id </label>
          <input type="text" name="id" className="w-full py-3 px-5 border" placeholder="ID" />
        </div>
        <div className="mb-4">
          <label htmlFor="">Title </label>
          <input type="text" name="title" className="w-full py-3 px-5 border" placeholder="Name "/>
        </div>
        <div className="mb-4">
          <label htmlFor="">Price </label>
          <input
            type="number"
            name="price"
            placeholder="Price"
            className="w-full py-3 px-5 border"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="">Cateogry </label>
          <select name="categories" id="" className="w-full py-3 px-5 border">
            {categories?.map((categories) => (
              <option key={categories?.id} value={categories?.name}>
                {categories?.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="">Description </label>
          <textarea name="description" className="w-full py-3 px-5 border" />
        </div>

        <div className="mb-4">
          <input
            type="submit"
            value={"Add Product"}
            className="w-full btn py-3 px-5 border btn-neutral"
          />
        </div>
      </form>
    </div>
  )
}
