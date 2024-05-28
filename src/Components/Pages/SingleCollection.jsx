/* eslint-disable react/prop-types */


export default function SingleCollection({fashion}) {
  return (
    <div className="card  bg-base-100 shadow-xl mb-4">
      <figure>
        <img src={fashion?.image} alt="fashion" className="max-w-50 " />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{fashion?.name}</h2>
        <h2 className="card-title">{fashion?.price}</h2>
        
        <p>
          {fashion?.description?.length > 30
            ? fashion?.description?.slice(0, 30)
            : fashion?.description}
        </p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{fashion?.color}</div>
        </div>
      </div>
    </div>
  )
}
