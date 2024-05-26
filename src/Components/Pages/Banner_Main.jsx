

export default function Banner_Main() {
  return (
    <div  className="container md:flex items-center justify-around py-12 px-4">
            <div className="space-y-4">
                <h1 className="text-7xl font-bold uppercase">
                    <span className="text-yellow-400">Be the penguin</span>
                    <br/>
                    <span className="text-gray-800">of winter</span>
                </h1>
                <p className="w-2/3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus ipsum ad rerum
                    aliquam
                    ducimus.</p>
                <button
                    className="text-white uppercase px-7 py-4 bg-green-500 rounded-xl font-medium bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="inline h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Buy Now</button>
            </div>
            <img src="/images/model.png" alt=""/>
            
     
    </div>
  )
}
