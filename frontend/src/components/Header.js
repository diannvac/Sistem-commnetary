import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { UserAuth } from "../context/AuthContext";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const {user, logOut} = UserAuth();
  const cerrarSesión = async () => {
    try {
      await logOut();
      window.location.href = '/loginUser'; 
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50 ">
    <nav className="flex justify-between items-center px-4 py-4 max-w-10xl mx-auto">
      <div className="logo text-black font-bold text-xl">
        <h5>MAESTRÍA EN NEGOCIOS DIGITALES</h5>
      </div>
      <div className="menu-icon text-black text-2xl cursor-pointer md:hidden" onClick={toggleMenu}>
        &#9776;
      </div>
      <ul className={`menu md:flex ${menuOpen ? 'flex' : 'hidden'} md:mt-0 mt-4 md:mr-0 mr-4 md:bg-transparent bg-white md:border-none border-t-2 border-gray-300 md:flex-row md:flex-wrap flex-col items-center justify-center md:ml-auto`}>
        <li><Link to="/" className="text-black hover:bg-blue-500 hover:text-white px-4 py-2 rounded-md transition duration-300 ease-in-out">Inicio</Link></li>
        <li><Link to="/acerca" className="text-black hover:bg-blue-500 hover:text-white px-4 py-2 rounded-md transition duration-300 ease-in-out">Acerca</Link></li>
        <li><Link to="/contact" className="text-black hover:bg-blue-500 hover:text-white px-4 py-2 rounded-md transition duration-300 ease-in-out">Contacto</Link></li>
        <li><Link to="/main" className="text-black hover:bg-blue-500 hover:text-white px-4 py-2 rounded-md transition duration-300 ease-in-out">Blog</Link></li>
        {user && (
         <li><Link onClick={cerrarSesión} className="text-black hover:bg-blue-500 hover:text-white px-4 py-2 rounded-md transition duration-300 ease-in-out">Cerrar sesión</Link></li>
        )}
      </ul>
    </nav>
  </header>
  );
};

export default Header;
