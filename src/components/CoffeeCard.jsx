import React from 'react'
import { FaEye, FaPen } from 'react-icons/fa'
import { FaDeleteLeft } from 'react-icons/fa6'
import { MdDelete } from 'react-icons/md'
import { Link } from 'react-router'
import Swal from 'sweetalert2'

export default function CoffeeCard({coffee,setsCoffee}) {
    const {_id,name, Count, Price, Photo} = coffee
    const handleDelete=(_id)=>{
        console.log(_id)
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success",
                cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
            });
            swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
            }).then((result) => {
                
            if (result.isConfirmed) {
                    fetch(`http://localhost:3000/coffees/${_id}`,{
                    method : "DELETE"
                }).then(res=>res.json()).then(data=>{
                        if(data.deletedCount){
                            swalWithBootstrapButtons.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            console.log(deletedCount)
                            setsCoffee(prev => prev.filter(coffee => coffee._id !== _id));
                        }
                    })
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire({
                title: "Cancelled",
                text: "Your imaginary file is safe :)",
                icon: "error"
                });
            }
        });
    }
  return (
    <div>
        <div className="card card-side bg-accent shadow-sm">
            <figure>
                <img src={Photo} alt={name}/>
            </figure>
            <div className="flex mt-8 w-full justify-around">
                <div className='mt-10 space-y-2'>
                    <h2 ><strong>Name:</strong> {name}</h2>
                    <p><strong>Count:</strong> {Count}</p>
                    <p><strong>Price:</strong> {Price}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className='join join-vertical  space-y-2'>
                        <Link to={`/coffee/${_id}`} className="btn btn-secondary"><FaEye/></Link>
                        <button className="btn btn-primary"><FaPen/></button>
                        <button onClick={()=>handleDelete(_id)} className="btn btn-primary"><MdDelete/></button>
                    </div>                    
                </div>
            </div>
        </div>
    </div>
  )
}
