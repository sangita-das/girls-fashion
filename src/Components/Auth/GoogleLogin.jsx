import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../Firebase/firebase.config';

export default function GoogleLogin() {

    const [signInWithGoogle] = useSignInWithGoogle(auth);


    const handleGoogleLogin =( ) => {
        signInWithGoogle();
    }

    
    

  return (
    <button onClick={handleGoogleLogin} className="bg-orange-400 px-5 py-3 w-full rounded-lg"> Login With Google</button>
  )
}
