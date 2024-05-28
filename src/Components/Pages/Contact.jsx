



export default function Contact() {
  return (
    <div className=" contact-center p-10 bg-base-200 text-base-content rounded">
   <div >
     <p className="text-4xl my-7 text-center">Contact US</p>
    <p className="text-xl text-center">Have a question or just want to say hi? We&apos;d love to hear from you.</p>
   </div>
     <form className="card-body">
        <div className="form-control">
        <input type="name" placeholder="Full Name" className="input input-bordered"  required/>
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Subject</span>
          </label>
          <input type="subject" placeholder="subject" className="input input-bordered" required />
          
          
<label className="label">
            <span className="label-text">Subject</span>
          </label>
           <input type="Message" placeholder="Write your Message" className="input input-bordered py-14 " required />

          <label className="label">
            <a href="#" className="label-text-alt link link-hover text-xl">Have any Question?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">SEND MESSAGE</button>
        </div>
      </form>

        
    
    </div>
  )
}
