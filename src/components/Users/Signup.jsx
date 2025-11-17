import React, { useContext } from 'react';

import Swal from 'sweetalert2';
import { AuthContext } from '../context/AuthContext';
import { FaGoogle } from 'react-icons/fa';
import api from '../context/api';

export default function Signup() {
    const {createUser,signInWithGoogle,} = useContext(AuthContext)
  const handleSignup=e=>{
            e.preventDefault();
            const form = e.target;
            const formData = new FormData(form)
            const newUser = Object.fromEntries(formData.entries())
            console.log(newUser)
            const {email, password, ...rest} = newUser

            createUser(email,password).then((result)=>
                {
                    console.log(result.user)

                    const addUser = {
                        email, ...rest,
                        creationTime: result.user?.metadata?.creationTime,
                        lastSignInTime: result.user?.metadata?.lastSignInTime
                    }

                    fetch(api,{
                        method: "POST",
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(addUser)
                    }).then(res=>res.json()).then(data=>{
                        if(data.insertedId){
                            Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Your work has been saved",
                            showConfirmButton: false,
                            timer: 1500
                            });
                        }
                    })

                }).catch((error) => 
                    {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(`${errorCode}: ${errorMessage}`)
                });
            form.reset()
        
        }
    // const handleGoogleSignup=()=>{
    //     signInWithGoogle().then(result=>
    //         {  
    //             const user = result.user
    //             console.log(user)
    //             const addUser={
    //             name : user.displayName,
    //             email:user.email,
    //             photo: user.photoURL,
    //             creationTime: user?.metadata?.creationTime,
    //             lastSignInTime: user?.metadata?.lastSignInTime
    //             }
    //             fetch(api,
    //                 {
    //                     method: 'POST',
    //                     headers: {
    //                         'content-type':'application/json'
    //                     },
    //                     body: JSON.stringify(addUser)
    //                 }
    //             ).then(res=>res.json()).then(data=>{
    //                 if(data.insertedId){
    //                     Swal.fire({
    //                         position: "top-end",
    //                         icon: "success",
    //                         title: "Your work has been saved",
    //                         showConfirmButton: false,
    //                         timer: 1500
    //                         })
    //                 }
    //             })

    //         }
    //     ).catch(err => {
    //         Swal.fire("Error", err.message, "error");
    //     });
    // }
    return (
        <div className='px-28 py-18 bg-accent '>
        <div className='text-center px-42 space-y-8'>
            <div className='flex justify-center'>
                <h1 className='font-Rancho text-3xl text-shadow-lg'>Sign Up</h1>
            </div>
            <div>
                Create your user account by filling in your personal details below.
            </div>
    </div>

    <form onSubmit={handleSignup}>
        <div className='mt-8 grid grid-cols-2 gap-6'>

            <fieldset className="fieldset">
                <legend className="fieldset-legend">Full Name</legend>
                <input name='name' type="text" className="input w-full" placeholder="Enter your full name" required />
            </fieldset>

            <fieldset className="fieldset">
                <legend className="fieldset-legend">Username</legend>
                <input name='username' type="text" className="input w-full" placeholder="Enter a username" required />
            </fieldset>

            <fieldset className="fieldset">
                <legend className="fieldset-legend">Email</legend>
                <input name='email' type="email" className="input w-full" placeholder="Enter your email" required />
            </fieldset>

            <fieldset className="fieldset">
                <legend className="fieldset-legend">Password</legend>
                <input name='password' type="password" className="input w-full" placeholder="Enter a password" required />
            </fieldset>

            <fieldset className="fieldset">
                <legend className="fieldset-legend">Phone Number</legend>
                <input name='phone' type="text" className="input w-full" placeholder="Enter your phone number" />
            </fieldset>

            <fieldset className="fieldset">
                <legend className="fieldset-legend">Gender</legend>
                <select name='gender' className="input w-full">
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
            </fieldset>

            <fieldset className="fieldset">
                <legend className="fieldset-legend">Date of Birth</legend>
                <input name='dob' type="date" className="input w-full" />
            </fieldset>

            <fieldset className="fieldset">
                <legend className="fieldset-legend">Country</legend>
                <input name='country' type="text" className="input w-full" placeholder="Enter your country" />
            </fieldset>

            <fieldset className="fieldset col-span-2">
                <legend className="fieldset-legend">Bio</legend>
                <textarea name='bio' className="input w-full" placeholder="Write a short bio about yourself"></textarea>
            </fieldset>

        </div>

        <div>
            <fieldset className="fieldset">
                <legend className="fieldset-legend">Profile Photo URL</legend>
                <input name='photo' type="text" className="input w-full" placeholder="Enter profile photo URL" />
            </fieldset>

            <button className='btn btn-secondary mt-6 text-primary font-Rancho w-full' type="submit">
                Create Account
            </button>
            {/* <div className="mt-6">
                  <div className="text-center text-gray-500 my-4">— OR —</div>

                        <button
                            type="button"
                            onClick={handleGoogleSignup}
                            className="btn btn-outline w-full flex items-center justify-center gap-3"
                        >
                            <FaGoogle/>
                            Continue with Google
                        </button>
                </div> */}

        </div>
    </form>
        </div>

    );
}
