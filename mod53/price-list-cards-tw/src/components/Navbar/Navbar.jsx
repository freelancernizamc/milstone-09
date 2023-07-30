import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'


const Navbar = () => {
    const [open, setOpen] = useState(false);

    const routes = [
        { name: "Home", id: 1, path: "/" },
        { name: "About", id: 2, path: "/about" },
        { name: "Contact", id: 3, path: "/contact" },
        { name: "Products", id: 4, path: "/products" },
        { name: "Services", id: 5, path: "/services" },
        { name: "Module55", id: 5, path: "/mod55.html" },
        { name: "Module56", id: 5, path: "/mod56.html" },
    ];

    return (
        <nav className="bg-purple-400 px-4">
            <div onClick={() => setOpen(!open)} className='md:hidden'>
                <span>
                    {
                        open === true ? <XMarkIcon className="h-6 w-6 text-purple-500" />
                            : <Bars3Icon className="h-6 w-6 text-purple-500" />
                    }
                </span>


            </div>
            <ul className={`md:flex absolute md:static duration-500 pl-8 py-2 bg-purple-400 ${open ? 'top-6' : '-top-36'}`}>
                {
                    routes.map(route => <Link
                        key={route.id}
                        route={route}
                    ></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;