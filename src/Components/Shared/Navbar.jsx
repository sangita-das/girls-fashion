import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../Firebase/firebase.config";


export default function Navbar() {

  

  
  const [user] = useAuthState(auth);
  const [signOut] = useSignOut(auth);

  const handleSignout = async () => {
    const success =  await signOut();

    if(success) {
      alert('Log out !');
    }
    
  };

  return (
    <div className="navbar bg-base-100 px-16">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl"><img className="rounded-3xl" src="/images/download.png" alt=""/></a>
  </div>
  <div className="flex-none gap-2">
   

    {/* ---------options----------------- */}
    
    <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li>
        <Link to ={'/'}>Home</Link>
      </li>

      <li>
        <Link to ={'/about'}>About</Link>
      </li>

      <li>
        <Link to ={'/contact'}>Contact</Link>
      </li>

      <li>
        <Link to ={'/dashboard'}>Dashboard</Link>
      </li>
    
    </ul>
  </div>
  {/* ------------- */}


    {
      !user?.email ? (
         <div className=" navbar-end flex gap-4 ">
    <Link to={'/login'} className="btn mr-2">Login</Link>
    <Link to={'/register'} className="btn">Register</Link>
  </div>
  )   
  :
 (
   <div className=" navbar-end flex gap-4">

    <Link to={"/dashboard"} className="btn">
              Dashboard
    </Link>
    
      
            <button className="btn" onClick={handleSignout}>
              Logout
            </button>
       
          
           
          

       <div>
        <div className="avatar placeholder">
            <div className="bg-neutral text-neutral-content rounded-full w-12">
              <span className="text-xs">UI</span>
            </div>
          </div>
       </div>

  </div>
 )
    }
    

  </div>
</div>
  )
}
