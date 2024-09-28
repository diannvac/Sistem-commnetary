import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="mt-10 bg-blue-900 text-white p-10">
            <div className="flex flex-wrap justify-between">
                <div className="flex-1 font-bold mb-4 md:mb-0 md:text-center">
                    <p>VISÍTANOS EN NUESTRAS REDES SOCIALES</p>
                    <p>Para más contenido:</p>
                    <div className="mt-8 flex justify-center space-x-5">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white mr-5 text-2xl hover:opacity-70">
                            <FaFacebook />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white mr-5 text-2xl hover:opacity-70">
                            <FaTwitter />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:opacity-70">
                            <FaInstagram />
                        </a>
                    </div>
                </div>
                <div className="flex-1 mb-4 md:mb-0 text-left px-7">
                    <p className="font-bold space-x-6">Información</p>
                    <ul className="list-none p-0">
                        <li className="mb-2">Dirección del corporativo</li>
                        <li><Link to="/faq" className='mb-2'>Preguntas frecuentes</Link></li>
                        <li><Link to="/contact" className='mb-2'>Contacto</Link></li>
                    </ul>
                </div>
                <div className="flex-1 mb-4 md:mb-0 text-left">
                    <p className="font-bold">Maestrías</p>
                    <ul className="list-none p-0">
                        <li className="mb-2">Niveles</li>
                        <li className="mb-2">Plan de estudios</li>
                        <li><Link to="/blog" className='mb-2'>Blog</Link></li>
                    </ul>
                </div>
                <div className="flex-1 text-left">
                    <p className="font-bold">Sobre nosotros</p>
                    <ul className="list-none p-0">
                        <li className="mb-2">Historia</li>
                        <li><Link to="/acerca" className='mb-2'>Misión y visión</Link></li>
                        <li><Link to="/acerca" className='mb-2'>Políticas y valores</Link></li>
                    </ul>
                </div>
            </div>
            <div className="text-center mt-5">
                <p className="m-0 text-sm">Todos los derechos reservados © 2024</p>
            </div>
        </footer>
    );
};

export default Footer;
