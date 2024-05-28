import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export default function EditProduct() {
      const { id } = useParams();

  const [productDetails, setProductDetails] = useState();
  const [categories, setCategories] = useState();

  useEffect(() => {
    async function load() {
      const categoriesData = await axios.get(
        "http://localhost:3000/accessories"
      );
      if (categoriesData?.status === 200) {
        setCategories(categoriesData?.data);
      }

      const productData = await axios.get(`http://localhost:3000/items/${id}`);
      if (productData?.status === 200) {
        setProductDetails(productData?.data);
      }
    }

    load();
  }, [id]);

  const handleCreateProduct = async (e) => {
    e.preventDefault();

    const form = e.target;

    const title = form.title.value;
    const price = form.price.value;
    const category = form.category.value;
    const description = form.description.value;
    const recipeData = {
      id,
      title,
      price,
      category,
      description,
    };

    await axios.patch(`http://localhost:3000/recipes/${id}`, recipeData);
  };

  return (
     <div className="w-full px-16">
      <h1 className="text-4xl mb-4">Add Recipe</h1>
      <form onSubmit={handleCreateProduct} className="w-full">
        <div className="mb-4">
          <label htmlFor="">Title </label>
          <input
            defaultValue={productDetails?.name}
            type="text"
            name="title"
            className="w-full py-3 px-5 border"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="">Price </label>
          <input
            type="number"
            name="price"
            defaultValue={productDetails?.price}
            className="w-full py-3 px-5 border"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="">Cateogry </label>
          <select name="category" id="" className="w-full py-3 px-5 border">
            {categories?.map((category) => (
              <option
                key={category?.title}
                selected={category?.name === productDetails?.category}
                value={category?.name}
              >
                {category?.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="">Description </label>
          <textarea
            defaultValue={productDetails?.description}
            name="description"
            className="w-full py-3 px-5 border"
          />
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
