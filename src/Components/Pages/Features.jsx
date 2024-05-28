

export default function Features() {
  return (
      /* ---------Features section start----------- */
        <div className="container grid lg:grid-cols-2 gap-5 px-8 mx-auto my-12 ">

            <div className=" flex justify-center items-center shadow-lg rounded-2xl p-4 space-y-4 gap-5">
                <div className="py-2">
                    <img className="w-30 h-20 mx-auto" src="icons/image 12.png" alt=""/>
                </div>
                <div>
                    <h2 className="text-2xl font-bold ">Find the Perfect Fit</h2>
                    <p>Everybody is different, which is why we
                        offer styles for every body.</p>
                </div>
            </div>


            <div className="flex justify-center items-center shadow-lg rounded-2xl p-4 space-y-4 row-span-3 ">
                <img className="h-80 mx-auto" src="images/shopping.png" alt=""/>
            </div>


            <div className=" flex justify-center items-center shadow-lg rounded-2xl p-4 space-y-4 gap-5  ">
                <div className="py-2">
                    <img className="w-30 h-20 mx-auto" src="icons/image 13.png" alt=""/>
                </div>
                <div>
                    <h2 className="text-2xl font-bold">Free Exchanges</h2>
                    <p>One of the many reasons you can shop
                        with peace of mind.</p>
                </div>
            </div>

            <div className=" flex justify-center items-center shadow-lg rounded-2xl p-4 space-y-4 gap-5">
                <div className="py-2">
                    <img className="w-30 h-20 mx-auto" src="icons/image 14.png" alt=""/>
                </div>
                <div>
                    <h2 className="text-2xl font-bold">Contact Our Seller</h2>
                    <p>They are here to help you. That&apos;s quite
                        literally what we pay them for.</p>
                </div>
            </div>
        </div>

  )
}
