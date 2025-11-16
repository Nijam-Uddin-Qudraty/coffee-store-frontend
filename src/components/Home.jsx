import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import CoffeeCard from './CoffeeCard';

const Home = () => {
    const coffees = useLoaderData();
    const [sCoffee, setsCoffee] = useState(coffees)
    return (
        <div>
            <div className='text-center space-y-4'>
                <p>--- Sip & Savor ---</p>
                <h1 className='text-4xl font-Rancho text-primary'>Our Popular Products</h1>
                <button className='btn btn-secondary border-black border-2 rounded-l'>
                    <p className='font-Rancho text-shadow-lg shadow-black'>Add Coffee</p>
                    <span>
                        <svg viewBox="0 0 20.5714 16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20.571442" height="16.000000" fill="none" customFrame="#000000">
                            <path id="Vector" d="M13.7143 11.4286L13.7143 2.28571L2.28571 2.28571L2.28571 11.4286C2.28571 12.0348 2.52653 12.6162 2.95518 13.0448C3.38384 13.4735 3.96522 13.7143 4.57143 13.7143L11.4286 13.7143C12.0348 13.7143 12.6162 13.4735 13.0448 13.0448C13.4735 12.6162 13.7143 12.0348 13.7143 11.4286ZM1.14286 0L18.2857 0C18.8919 5.07531e-16 19.4733 0.240816 19.902 0.66947C20.3306 1.09812 20.5714 1.67951 20.5714 2.28571L20.5714 5.71429C20.5714 6.3205 20.3306 6.90188 19.902 7.33053C19.4733 7.75918 18.8919 8 18.2857 8L16 8L16 11.4286C16 12.641 15.5184 13.8038 14.6611 14.6611C13.8037 15.5184 12.641 16 11.4286 16L4.57143 16C3.35901 16 2.19625 15.5184 1.33894 14.6611C0.481631 13.8038 1.01506e-15 12.641 0 11.4286L0 1.14286C0 0.839753 0.120408 0.549062 0.334735 0.334735C0.549063 0.120408 0.839753 5.07531e-16 1.14286 0ZM16 2.28571L16 5.71429L18.2857 5.71429L18.2857 2.28571L16 2.28571Z" fill="rgb(51,26,21)" fill-rule="nonzero" />
                        </svg>
                    </span> 
                </button>
            </div>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 mt-8'>
                {
                    sCoffee.map(coffee =><CoffeeCard key={coffee._id} setsCoffee={setsCoffee} coffee={coffee}/>)
                }
            </div>
        </div>
    );
};

export default Home;