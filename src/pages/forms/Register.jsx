
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./forms.css";

const Register = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // form submit handler
    const formSubmitHandler = (event) => {
        event.preventDefault()

        if (email.trim() === "") {
            return toast.error("Email is required")
        }
        if (password.trim() === "") {
            return toast.error("Password is required")
        }
        if (userName.trim() === "") {
            return toast.error("User name is required")
        }
        if (confirmPassword.trim() === "") {
            return toast.error("Confirm password is required")
        }
        console.log({ email, password, userName, confirmPassword })
    }
    return (
        <div className="form-wrapper">
            <ToastContainer />
            <form onSubmit={formSubmitHandler} className="form">
                <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="Email" />
                <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="Password" />
                <input onChange={(e) => setUserName(e.target.value)} value={userName} type="text" placeholder="Username" />
                <input onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} type="Confirm password" placeholder="Confirm Password" />
                <button className="form-btn">Register</button>

            </form>
        </div>
    )
}

export default Register;