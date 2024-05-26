import { Link, useNavigate } from "react-router-dom";
import GithubLogin from "../Auth/GithubLogin";
import GoogleLogin from "../Auth/GoogleLogin";
import { useAuthState, useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../Firebase/firebase.config";
import { useEffect } from "react";


export default function Register() {

    
  const navigate = useNavigate();
   const userInfo = useAuthState(auth);
  const [createUserWithEmailAndPassword, error] =
    useCreateUserWithEmailAndPassword(auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    createUserWithEmailAndPassword(email, password);
  };

 

  useEffect(() => {
    if (userInfo[0]) {
      navigate("/");
    }
    if (error) {
      console.log(error?.message); 
    }
  }, [navigate, userInfo, error]);

  return (
  <div className="hero min-h-screen bg-base-200">
      <div className="hero-content grid grid-cols-2 w-full mx-auto">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className=" card shadow-2xl bg-base-100 max-w-lg">
          <form onSubmit={handleSubmit} className="card-body  ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-2">
              <button className="btn btn-primary">Register</button>

                {
          error && <p className="text-center text-red-500">{error?.message}</p>
        }


              <p className="text-center">
                Already have an account ?{" "}
                <Link to={"/login"} className="text-orange-500">
                  Login
                </Link>
              </p>
            </div>
          </form>
      <div className="flex gap-2  mx-3 mb-5 ">
        <GoogleLogin/>
      <GithubLogin/>
      </div>

    </div>
  </div>
</div>
  )
}
