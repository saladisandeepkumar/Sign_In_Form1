import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import validation from './LoginValidation';

function Login() {
    const [values, setValues] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({});

    const handleInput = (event) => {
        setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const validationErrors = validation(values);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            try {
                const res = await axios.post('http://localhost:8081/login', values);
                console.log('Signin Successful:', res.data);

                if (res.data === "Success") {
                    window.location.href = "/home";  // Redirecting using window.location
                } else {
                    alert("Signin failed. Try again.");
                }
            } catch (error) {
                console.error('Signin Error:', error.response?.data || error.message);
                alert("An error occurred. Please try again.");
            }
        }
    };

    return (
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Sign-In</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='email'><strong>Email</strong></label>
                        <input
                            type='email'
                            placeholder='Enter Email'
                            name='email'
                            value={values.email}
                            onChange={handleInput}
                            className='form-control rounded-0'
                        />
                        {errors.email && <span className='text-danger'>{errors.email}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'><strong>Password</strong></label>
                        <input
                            type='password'
                            placeholder='Enter Password'
                            name='password'
                            value={values.password}
                            onChange={handleInput}
                            className='form-control rounded-0'
                        />
                        {errors.password && <span className='text-danger'>{errors.password}</span>}
                    </div>
                    <button type='submit' className='btn btn-success w-100 rounded-0'>Log in</button>
                    <p></p>
                    <Link to="/signup" className='btn btn-default border w-100 rounded-0 text-decoration-none'>Create Account</Link>
                </form>
            </div>
        </div>
    );
}

export default Login;
