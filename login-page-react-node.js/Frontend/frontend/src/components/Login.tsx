import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ValidationLogin from '../loginValidation';
import axios from 'axios';

export default function Login() {
    const navigate = useNavigate()
    const [values, setValues]=useState({
        email:'',
        password:''
    });
    const [errors, setErrors]=useState({
        email:'',
        password:''
    })
    const handleInput = (event)=>{
        setValues(prev=>({...prev, [event.target.name]:[event.target.value]}))
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
        setErrors(ValidationLogin(values))
        if(errors.email==='' && errors.password === ''){
            axios.post('http://localhost:8081/login_zahtev', values)
            .then((res)=>{
                if(res){
                    sessionStorage.setItem("token2",res?.data[0]?.id);
                    navigate('/home')
                }else{
                    alert('Email or password is wrong')
                }
                console.log(res)
            })
            .catch(err=>{console.log(err)})
    
        }
    }
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div className="bg-white p-3 rounded w-25">
        <h2>Sign-In</h2>
            <form action="" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email">Email</label>
                    <input name='email' onChange={(event)=>{handleInput(event)}} type="email" placeholder='Enter email' className='form-control rounded-0' />
                    <span className='text-danger'>{errors?.email}</span>
                </div>
                <div className="mb-3">
                    <label htmlFor="password">Password</label>
                    <input name='password' onChange={(event)=>{handleInput(event)}} type="password" placeholder='Enter Password' className='form-control rounded-0' />
                    <span className='text-danger'>{errors?.password}</span>
                </div>
                <button onSubmit={(event)=>{handleSubmit(event)}} className='btn btn-success w-100'>Log in</button>
                <p>You are agree to our terms and policies</p>
                <Link to='/signup' className='btn btn-default border bg-light w-100'>Create Account</Link>
            </form>
        </div>
    </div>
  )
}
