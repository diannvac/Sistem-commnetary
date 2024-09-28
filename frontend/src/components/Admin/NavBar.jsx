import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from "../../context/AuthContext";
import { FiMenu } from 'react-icons/fi'; 

function Navbar() {
  
    const {user, logOut} = UserAuth();
    const cerrarSesión=async()=>{
      try {
        await logOut();
      } catch (error) {
        console.log(error);
      }
    }

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    

  
  
    return (
    <>

        <div className="max-w-2xl mx-auto classname">

            <nav className="border-gray-200  shadow-lg pt-3">
            <div className="container mx-auto flex flex-wrap items-center justify-between">
                <a href="#" className="flex">
                
                    <span className="self-center text-lg font-semibold whitespace-nowrap">Maestría en negocios</span>
                </a>
                <button data-collapse-toggle="mobile-menu" type="button" className="md:hidden ml-3 text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center" aria-controls="mobile-menu-2" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
                <div className="hidden md:block w-full md:w-auto" id="mobile-menu">
                <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
                    <li>
                    <a href="#" className="bg-blue-700 md:bg-transparent text-white block pl-3 pr-4 py-2 md:text-blue-700 md:p-0 rounded focus:outline-none" aria-current="page">Home</a>
                    </li>
                    {/* <li>
                        <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 font-medium flex items-center justify-between w-full md:w-auto">Dropdown <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
                       
                        <div id="dropdownNavbar" className="hidden bg-white text-base z-10 list-none divide-y divide-gray-100 rounded shadow my-4 w-44">
                            <ul className="py-1" aria-labelledby="dropdownLargeButton">
                            <li>
                                <a href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Dashboard</a>
                            </li>
                            <li>
                                <a href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Settings</a>
                            </li>
                            <li>
                                <a href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Earnings</a>
                            </li>
                            </ul>
                            <div className="py-1">
                            <a href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Sign out</a>
                            </div>
                        </div>
                    </li> */}
                    <li>
                    <a className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-2 pr-2 py-2 md:hover:text-blue-700 md:p-0"><Link  to="/new">Subir blogs</Link></a>
                    </li>
                    <li>
                    <a href="#" className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-2 pr-2 py-2 md:hover:text-blue-700 md:p-0"><Link  to="/landingpagecreator">Subir Landing Page</Link></a>
                    </li>
                    <li>
                    <a href="#" className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-2 pr-2 py-2 md:hover:text-blue-700 md:p-0"><Link  to="/main">Blogs</Link></a>
                    </li>
                    <li>
                    <a href="#" onClick={cerrarSesión} className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-2 pr-2 py-2 md:hover:text-blue-700 md:p-0"><Link  to="/main">Cerrar sesión</Link></a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>


        </div>

    </>
     )};
    export default Navbar;