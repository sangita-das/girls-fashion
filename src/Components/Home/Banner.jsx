import { Link } from "react-router-dom";


export default function Banner() {
  return (
    
    <div className="hero min-h-[400px] bg-base-200">
    
  <div className="hero-content flex-col lg:flex-row-reverse ">
   <img className=" " src="/images/pexels.jpeg" alt=""/>
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
       
       <Link to="/collection">
            <button
            
                    className="text-white uppercase px-7 py-4 bg-green-500 rounded-xl font-medium bg-gradient-to-r from-purple-400 via-green-500 to-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="inline h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Explore </button>
       </Link>

       
    </div>
  </div>
</div>
  )
}
