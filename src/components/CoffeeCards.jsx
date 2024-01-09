import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCards = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, quantity, taste, category, details, photo } = coffee;

    const handleDelete = _id => {
        // console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                //   Swal.fire({
                //     title: "Deleted!",
                //     text: "Your file has been deleted.",
                //     icon: "success"
                //   });
                fetch(`http://localhost:5000/coffees/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                            const remaining = coffees.filter(cof => cof._id !== _id);
                            setCoffees(remaining)
                        }

                    })
            }
        });
    }

    return (
        <div className="card card-side bg-stone-700 shadow-xl">
            <figure><img src={photo} alt="coffee pic" /></figure>
            <div className="flex justify-end w-full p-4 space-x-8">
                <div className='md:text-xl font-mono'>
                    <h2><span className='font-semibold text-neutral-900'>Coffee: </span> {name}</h2>
                    <p><span className='font-semibold text-neutral-900'>Quantity: </span>{quantity}</p>
                    <p> <span className='font-semibold text-neutral-900'>Taste: </span>{taste}</p>
                    <p> <span className='font-semibold text-neutral-900'>Category: </span>{category}</p>
                    <p> <span className='font-semibold text-neutral-900'>About: </span>{details}</p>
                </div>
                <div className=" grid md:gap-4 gap-2">
                    <Link to={`/updateCoffee/${_id}`}>
                        <button className="btn btn-primary">Edit</button>
                    </Link>
                    <button className="btn btn-primary">Details</button>
                    <button
                        onClick={() => handleDelete(_id)}
                        className="btn btn-primary">X
                        </button>
                </div>
            </div>
        </div>

    );
};

export default CoffeeCards;