import { useLoaderData } from "react-router-dom";
import CoffeeCards from "./CoffeeCards";
import { useState } from "react";

const Home = () => {
    const loadedCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(loadedCoffees);
    // Reading data
    return (
        <div className="md:m-20 p-4 text-center">
           <div  className='mb-16'>
                <p>--- Sip & Savor ---</p>
                <h2 className='font-serif font-semibold text-3xl'>Our Popular Products </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
                {
                    coffees.map(coffee => <CoffeeCards
                    key={coffee._id}
                    coffee = {coffee}
                    coffees = {coffees}
                    setCoffees = {setCoffees}
                    ></CoffeeCards> )
                }
            </div>
        </div>
    );
};

export default Home;