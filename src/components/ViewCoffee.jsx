import React from 'react'
import { useLoaderData } from 'react-router'

export default function ViewCoffee() {
    const {name, Count,Supplier, Taste, Price, Photo,Details} = useLoaderData()
  return (
    <div className='bg-accent flex gap-28 px-46 py-18'>
        <div>
            <figure>
                <img  src={Photo} alt="" />
            </figure>
        </div>
        <div className='mt-12'>
            <h1 className='font-Rancho text-3xl text-shadow-lg space-y-2'> {name}</h1>
            <div>
            <p><strong>Supplier:</strong> {Supplier}</p>
            <p><strong>Taste:</strong> {Taste}</p>
            <p><strong>Price:</strong> {Price}</p>
            <p><strong>Details:</strong> {Details}</p>
            <p><strong>Count:</strong> {Count}</p>
            </div>
        </div>
    </div>
  )
}
