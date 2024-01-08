import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div className="navbar  bg-primary-content">
            <div className="flex-1">
                <li className="btn btn-ghost text-2xl font-semibold">Coffee Store</li>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li className='font-semibold'>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                </ul>

                <ul className="menu menu-horizontal px-1">
                    <li className='font-semibold'>
                        <NavLink to='/addCoffee'>Add Coffee</NavLink>
                    </li>
                </ul>

                <ul className="menu menu-horizontal px-1">
                    <li className='font-semibold'>
                        <NavLink to='/login'>Sign In</NavLink>
                    </li>

                </ul>
            </div>
        </div>
    );
};

export default Header;