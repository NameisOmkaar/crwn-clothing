import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../signUp-form/sign-up.form";

const SignIn = () => {
  const logGoogleuser = async () => {
    const { user } = await signInWithGooglePopup();
     const userDocRef = await createUserDocumentFromAuth(user);
     console.log(userDocRef)
  };
  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={logGoogleuser}>Sign in with Google Popup </button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
