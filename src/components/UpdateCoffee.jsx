
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const loadedCoffee = useLoaderData();
    const {_id, name, supplier, quantity, taste, category, details, photo } = loadedCoffee;

    const handleUpdateCoffee = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const supplier = form.supplier.value;
        const quantity = form.quantity.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const coffeeData = {name, supplier, quantity, taste, category, details, photo};
        console.log(coffeeData);

        // send data to server(create)
        fetch(`http://localhost:5000/coffees/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(coffeeData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'The coffee is successfully Updated to DB',
                    icon: 'success',
                    confirmButtonText: 'Keep Rocking'
                  })
                form.reset();
            }
        })
    }

    return (
        <div className='lg:m-24 md:m-24 p-4 bg-neutral-500'>

            <div className='text-center mb-8 mt-5'>
                <h2 className='text-3xl font-serif pb-3'>Update the {name} Coffee</h2>
            </div>

            <form onSubmit={handleUpdateCoffee} className='p-4 '>
                <div className='md:flex justify-center gap-5 pb-4'>
                    <div >
                        <label htmlFor="name"> <span className='text-xl font-semibold'>Name</span> <br />
                            <input className='px-4 rounded-sm bg-white w-96 py-1' type="text" defaultValue={name} name="name" id="name " placeholder='Coffee Name' required />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="name"> <span className='text-xl font-semibold'>Supplier</span> <br />
                            <input className='px-4 rounded-sm w-96 bg-white py-1' type="text" defaultValue={supplier}  name="supplier" id="supplier" placeholder='Enter coffee Supplier' required />
                        </label>
                    </div>
                </div>
                <div className='md:flex justify-center gap-4 pb-4'>
                    <div>
                        <label htmlFor="name"> <span className='text-xl font-semibold'>Quantity</span> <br /></label>
                        <input className='px-4 rounded-sm w-96 bg-white py-1' type="text" defaultValue={quantity} name="quantity" id="quantity" placeholder='Enter coffee quantity' required />
                    </div>
                    <div>
                        <label htmlFor="name"> <span className='text-xl font-semibold'>Taste</span> <br /></label>
                        <input className='px-4 rounded-sm w-96 bg-white py-1' type="text" defaultValue={taste} name="taste" id="taste" placeholder='Enter coffee taste' required />
                    </div>
                </div>
                <div className='md:flex justify-center gap-4 pb-4'>
                    <div>
                        <label htmlFor="name"> <span className='text-xl font-semibold'>Category</span> <br />
                        </label>
                        <input className='px-4 rounded-sm w-96 bg-white py-1' type="text" defaultValue={category} name="category" id="category" placeholder='Enter coffee category ' /> 
                    </div>
                    <div>
                        <label htmlFor="name"> <span className='text-xl font-semibold'>Details</span> <br /></label>
                        <input className='px-4 rounded-sm w-96 bg-white py-1' type="text" defaultValue={details} name="details" id="details" placeholder='Enter coffee details' />
                    </div>

                </div>
                <div className=' pb-4 grid'>
                    <div className='pb-4'>
                        <label htmlFor="name"> <span className='text-xl font-semibold'>Photo</span> <br /></label>
                        <input className='px-4 w-full rounded-sm bg-white py-1' type="text" defaultValue={photo} name="photo" id="photo" placeholder='Enter photo url' required />
                    </div>
                    <input type="submit" value="Add Coffee" className='btn btn-block font-semibold text-xl bg-[#D2B48C] border-[#331A15] hover:bg-neutral-700 text-white' />

                </div>
            </form>
        </div>
    );
};

export default UpdateCoffee;