import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('', {name, email, password})
        .then(result => console.log(result))
        .catch(err => console.log(err))
    }

    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>

                    <div className="mb-3">
                        <label htmlFor="name"><strong>Name</strong></label>
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="Enter name" 
                            className="form-control rounded-0"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input 
                            type="text" 
                            name="email" 
                            placeholder="Enter email" 
                            className="form-control rounded-0"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Enter password" 
                            className="form-control rounded-0"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button 
                        type="submit" 
                        className="btn btn-success w-100 rounded-0 mb-3">
                            Register
                    </button>

                </form>

                <p className="text-center">Already Have an Account</p>
                <Link to='/login' className="btn btn-default border w-100 bg-light rounded-0        text-decoration-none">Login</Link>
            </div>
        </div>
    )
}

export default Signup;