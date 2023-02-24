import SignUpForm from "../../components/SignUpForm/SignUpForm";

import { signInWithGooglePopup, createUserDocFromAuth } from '../../utils/firebase/firebase';

export default function SignIn() {
    const googleAuthSignIn = async () => {
        const res = await signInWithGooglePopup();
        // const y = await createUserDocFromAuth(x);

        console.log(res)
    }

    return (
        <div>
            <button onClick={googleAuthSignIn}>sign in with google auth</button>
            <SignUpForm />
        </div>
    )
}