import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import conclass from '../../utilities/conclass';

export const LayoutsHeaderComponent: React.FC = () => {
    const router = useRouter();
    const links = [
        { name: "Component", link: "/" },
        { name: "Service", link: "/service" }
    ];

    const [open, setOpen] = useState(false);
    console.log(router.asPath)
    return (
        <nav className="fixed bg-transparent absolute border-gray-200 px-4 sm:px-4 py-2 top-0 left-0 w-full flex justify-center items-center z-10">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <a
                    href="#"
                    className="flex items-center py-3 px-3 rounded-lg hover:bg-gradient-to-r from-purple-500 to-pink-500"
                >
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsUZ5NvBu8_shabCg_Egobw0_5x_tuTshDpQ&usqp=CAU"
                        className="mr-3 h-6 sm:h-9"
                        alt="Hollow UI Logo"
                    />
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Hollow UI</span>
                </a>
                <button
                    onClick={() => setOpen(!open)}
                    className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            fillRule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                    <svg
                        className="hidden w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    ><path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    ></path>
                    </svg>
                </button>
                <div className={conclass('w-full md:block md:w-auto', !open ? 'hidden' : '')}>
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                        {links.map((list, index: any) => (
                            <li
                                id={index}
                                key={index}
                                className={conclass(router.asPath === list.link ? 'text-emerald-500' : 'text-white', 'font-bold hover:text-gray-400')}
                            >
                                <Link href={list.link}>
                                    <a>{list.name}</a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}