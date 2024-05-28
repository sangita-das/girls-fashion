/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


export default function ProductRow({fashion}) {

 
  return (
      <tr>
      <th>{fashion?.id}</th>
      <td>{fashion?.name}</td>
      <td>{fashion?.price}</td>
      <td>{fashion?.description}</td>
      <td className="flex gap-4">
        <Link
          to={`/dashboard/edit-product/${fashion?.id}`}
          className="btn btn-xs btn-neutral"
        >
          Edit
        </Link>
        <button className="btn btn-xs btn-error">Delete</button>
      </td>
    </tr>
  )
}
