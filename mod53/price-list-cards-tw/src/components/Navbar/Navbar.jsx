import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'


const Navbar = () => {
    const [open, setOpen] = useState(false);

    const routes = [
        { name: "Home", id: 1, path: "https://freelancernizamc.github.io/milstone-09/" },
        { name: "About", id: 2, path: "/about" },
        { name: "Contact", id: 3, path: "/contact" },
        { name: "Assignment-09", id: 4, path: "https://assignment-9-jobportal.netlify.app/" },
        { name: "Module-54", id: 5, path: "https://freelancernizamc.github.io/milstone-09/mod54/mod54.html" },
        { name: "Module-55", id: 5, path: "https://freelancernizamc.github.io/milstone-09/mod55.html" },
        { name: "Module-56", id: 5, path: "https://freelancernizamc.github.io/milstone-09/mod56.html" },
    ];

    return (
        <nav className="bg-purple-400 px-4 flex justify-between items-center">
            <h1 className='text-3xl font-extrabold text-indigo-950'>Milstone 09: <br />Module 53 Projects</h1>
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