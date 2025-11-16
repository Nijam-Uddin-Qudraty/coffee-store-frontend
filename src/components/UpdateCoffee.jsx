import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';
const UpdateCoffee = () => {
    const {_id,name, Count,Supplier, Taste,  Price, Photo,Details} = useLoaderData()

     const handleAddCoffee=e=>{
            e.preventDefault();
            const form = e.target;
            const formData = new FormData(form)
            const updatedCoffee = Object.fromEntries(formData.entries())
            console.log(updatedCoffee)
            
            // data fetching     
            fetch(`http://localhost:3000/coffees/${_id}`,{
                method: "PUT",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updatedCoffee)
            }).
            then((res)=>res.json()).then(data=>{
                if(data.modifiedCount){
                    Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                });
                }
            })
            
            
            form.reset()
        }
        return (
            <div className='px-28 py-18 bg-accent '>
                <div className='text-center px-42 space-y-8'>
                    <div className='flex justify-center'>
                        <h1 className='font-Rancho text-shadow-lg text-3xl'>Update Existing Coffee Details</h1>
    
                    </div>
                    <div>
                        It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
                    </div>
                </div>
                <form onSubmit={handleAddCoffee}>
                    <div className='mt-8 grid grid-cols-2 gap-6'>
                        <fieldset className="fieldset">
                        <legend className="fieldset-legend">Name</legend>
                        <input name='name' defaultValue={name} type="text" className="input w-full" placeholder="Enter coffee name" />
                        </fieldset>
                        <fieldset className="fieldset">
                        <legend className="fieldset-legend">Count</legend>
                        <input name='Count' defaultValue={Count} type="text" className="input w-full" placeholder="Enter coffee Count" />
                        </fieldset>
    
                        <fieldset className="fieldset">
                        <legend className="fieldset-legend">Supplier</legend>
                        <input name='Supplier'defaultValue={Supplier} type="text" className="input w-full" placeholder="Enter coffee Supplier" />
                        </fieldset>
                        <fieldset className="fieldset">
                        <legend className="fieldset-legend">Taste</legend>
                        <input name='Taste' defaultValue={Taste} type="text" className="input w-full" placeholder="Enter coffee Taste" />
                        </fieldset>
                        <fieldset className="fieldset">
                        <legend className="fieldset-legend">Price</legend>
                        <input name='Price' defaultValue={Price} type="text" className="input w-full" placeholder="Enter coffee Price" />
                        </fieldset>
                        <fieldset className="fieldset">
                        <legend className="fieldset-legend">Details</legend>
                        <input name='Details' defaultValue={Details} type="text" className="input w-full" placeholder="Enter coffee Details" />
                        </fieldset>
                </div>
                <div>
                    <fieldset className="fieldset">
                    <legend className="fieldset-legend">Photo</legend>
                    <input name='Photo' defaultValue={Photo} type="text" className="input w-full" placeholder="Enter coffee Photo" />
                    </fieldset>
                <button className='btn btn-secondary mt-6 text-primary font-Rancho w-full' type="submit">Add Coffee</button>
                </div>
    
                </form>
            </div>
        );
    };

export default UpdateCoffee;