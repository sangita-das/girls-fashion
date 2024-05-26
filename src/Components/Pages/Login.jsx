import { Link, useNavigate } from "react-router-dom";
import GithubLogin from "../Auth/GithubLogin";
import GoogleLogin from "../Auth/GoogleLogin";
import { useAuthState, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../Firebase/firebase.config";
import { useEffect } from "react";


export default function Login() {

  const navigate = useNavigate();
  const userInfo = useAuthState(auth);
  
  const [
  signInWithEmailAndPassword,

  error,
] = useSignInWithEmailAndPassword(auth);

  const handleSignin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInWithEmailAndPassword (email, password)
  }

  useEffect(() => {
    if (userInfo[0]) {
      navigate("/");
    }
  
  }, [ navigate, userInfo]);

  
  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSignin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
                  type="email"
                  placeholder="email"
                  name = "email"
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
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>

        {
          error && <p className="text-center text-red-500">{error?.message}</p>
        }

         <div>
          <p className="text-center">Don&apos;t Have Any Account ? <Link to={'/register'} className="text-orange-600">Register</Link> </p>
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
