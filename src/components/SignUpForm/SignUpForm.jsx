import { useState } from 'react';
import { createUserDocFromAuth, signUpEmailPassword } from '../../utils/firebase/firebase';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

export default function SignUpForm() {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("passwords do not match");
            return;
        }

        // write to db
        try {
            const userSignUp = await signUpEmailPassword(email, password);

            await createUserDocFromAuth(userSignUp);
        } catch (err) {
            if (err == "auth/email-already-in-use") {
                alert("Email already in use.");
            } else {
                console.log(err);
            }
        }
    }
    
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({...formFields, [name]: value })
    }

    return (
        <div className="sign-up-form">
            <form onSubmit={handleSubmit}>
                <label>Display Name</label>
                <input 
                    type="text" 
                    name="displayName" 
                    onChange={handleChange}
                />

                <label>Email</label>
                <input 
                    type="email" 
                    name="email" 
                    onChange={handleChange}
                />

                <label>Password</label> 
                <input 
                    type="password" 
                    name="password" 
                    onChange={handleChange}
                />

                <label>Confirm Password</label>
                <input 
                    type="password" 
                    name="confirmPassword" 
                    onChange={handleChange}
                />

                <button type="submit">Sign Up</button>
            </form>
        </div>

    );

}