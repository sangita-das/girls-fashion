import { useSignInWithGithub } from "react-firebase-hooks/auth";
import auth from "../Firebase/firebase.config";


export default function GithubLogin() {

    const [signInWithGithub, user, loading, error] = useSignInWithGithub(auth);

    const handleGithubLogin = ( ) => {
        signInWithGithub();
    }

    

  return (
    <button onClick={handleGithubLogin} className="bg-orange-400 px-5 py-3 w-full rounded-lg">Login With Github</button>
  )
}
