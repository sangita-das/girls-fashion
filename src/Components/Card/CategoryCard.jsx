/* eslint-disable react/prop-types */

export default function CategoryCard({ category })  {
  return (
    <div className="border px-5 py-3 rounded">
    <img src={category?.image} alt="fashion" className="max-w-50" />
      <h1 className="text-center">{category?.name}</h1>
    </div>
  )
}
