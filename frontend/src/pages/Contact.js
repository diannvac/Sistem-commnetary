import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Comments from '../components/Comments';


function Contact() {
  return (
    <div>
        <Header></Header>

        <section className="bg-gray-100 py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            {/* Información de contacto */}
            <div className="md:w-1/2 bg-gradient-to-r from-blue-500 to-indigo-500 px-8 py-12 text-white">
              <h2 className="text-3xl font-semibold mb-6">¡Contáctanos!</h2>
              <p className="text-lg mb-4">Estamos aquí para ayudarte en lo que necesites. Si tienes alguna pregunta, sugerencia o simplemente quieres saludar, no dudes en contactarnos.</p>
              <div className="flex items-center space-x-4">
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-12H7v2h6V8zm0 4H7v2h6v-2zm0 4H7v2h6v-2z"/>
                </svg>
                <p>Nombre de la Calle, Ciudad, México</p>
              </div>
              <div className="flex items-center mt-2 space-x-4">
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-9h4v2h-4v-2z"/>
                </svg>
                <p>+123456789</p>
              </div>
              <div className="flex items-center mt-2 space-x-4">
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-12H7v2h6V8zm0 4H7v2h6v-2zm0 4H7v2h6v-2z"/>
                </svg>
                <p>info@maestriaennegociosdigitales.com</p>
              </div>
              <div className="flex mt-6 space-x-4">
                <a href="#" className="text-blue-200 hover:text-blue-300"><i className="fab fa-facebook-square fa-2x"></i></a>
                <a href="#" className="text-blue-200 hover:text-blue-300"><i className="fab fa-twitter-square fa-2x"></i></a>
                <a href="#" className="text-blue-200 hover:text-blue-300"><i className="fab fa-linkedin fa-2x"></i></a>
                <a href="#" className="text-blue-200 hover:text-blue-300"><i className="fab fa-instagram-square fa-2x"></i></a>
              </div>
            </div>
            {/* Formulario de contacsato */}
            <div className="md:w-1/2 bg-white px-8 py-12">
              <h2 className="text-3xl font-semibold mb-6 text-gray-800">Envíanos un Mensaje</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-800">Nombre</label>
                  <input type="text" id="name" name="name" className="w-full border-2 border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500 transition-colors duration-300" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-800">Correo Electrónico</label>
                  <input type="email" id="email" name="email" className="w-full border-2 border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500 transition-colors duration-300" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-800">Mensaje</label>
                  <textarea id="message" name="message" rows="4" className="w-full border-2 border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500 transition-colors duration-300"></textarea>
                </div>
                <div>
                  <button type="submit" className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition-colors duration-300">Enviar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

        <Footer></Footer>

    </div>
  );
}

export default Contact;
