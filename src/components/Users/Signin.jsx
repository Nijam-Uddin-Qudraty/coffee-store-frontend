import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import api from '../context/api';

const Signin = () => {
    const {signIn} = useContext(AuthContext)
    const handleSignIn = (e)=>{
    e.preventDefault()
    const form = e.target;
    const email = form.email.value
    const password = form.password.value 
    signIn(email,password).then((result) => {
        console.log(result)
        const update = {
            email,
            lastSignInTime:result.user?.metadata?.lastSignInTime
        }
        console.log(result.user?.metadata?.lastSignInTime)
        fetch(api,{
            method: 'PATCH',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(update)
        }).then(res=>res.json()).then(data=>console.log(data))
    }).catch((err) => {
        console.log(err)
    });
    }
    return (
        <div className='px-28 py-18 bg-accent '>
             <div className='text-center px-42 space-y-8'>
                <div className='flex justify-center'>
                    <h1 className='font-Rancho text-3xl text-shadow-lg'>Sign In</h1>
                </div>
                <div>
                    Sign In using proper mail and password
                </div>
            </div>
            <form onSubmit={handleSignIn}>
                <div className='mt-8 grid grid-cols-2 gap-6'>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email</legend>
                        <input name='email' type="email" className="input w-full" placeholder="Enter your Email" required />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Password</legend>
                        <input name='password' type="password" className="input w-full" placeholder="Enter your Password" required />
                    </fieldset>
                </div>
                <div>
                    <button className='btn btn-secondary mt-6 text-primary font-Rancho w-full' type="submit">Log In</button>
                </div>
            </form>
            
        </div>
    );
};

export default Signin;