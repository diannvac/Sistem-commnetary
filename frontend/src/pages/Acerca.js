import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';


function Acerca() {
  return (
    <div>
      <Header></Header>

      {/* Sección de about us */}
      <div>
        <section className="relative bg-blue-600 text-white">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <defs>
              <pattern id="pattern-lines-dots" x="0" y="0" width="12%" height="12%" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="100" y2="100" stroke="#ffffff" strokeWidth="2" />
                <line x1="100" y1="0" x2="0" y2="100" stroke="#ffffff" strokeWidth="2" />
                <circle cx="50" cy="50" r="8" fill="#ffffff" />
              </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-lines-dots)" fillOpacity="0.1" />
          </svg>
          <div className="relative grid grid-cols-1 md:grid-cols-2 items-center p-16 my-2 text-lg h-20vh">
            <h1 className="font-bold text-6xl my-4 md:my-0 md:text-4xl text-center md:text-center drop-shadow-[1px_1px_1px_rgba(0,0,0,0.9)]">
              SOBRE NOSOTROS
            </h1>
            <div className="space-y-4 text-justify">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis optio earum voluptates a id
                quidem error nostrum velit, odio corporis sed officia autem perferendis atque. Voluptate animi culpa
                cum veniam.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis optio earum voluptates a id
                quidem error nostrum velit, odio corporis sed officia autem perferendis atque. Voluptate animi culpa
                cum veniam.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis optio earum voluptates a id
                quidem error nostrum velit, odio corporis sed officia autem perferendis atque. Voluptate animi culpa
                cum veniam.
              </p>
            </div>
          </div>

        </section>

        {/* SECCIÓN DE MISIÓN */}
        <section className="relative bg-gray-200 text-black">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <defs>
              <pattern id="pattern-lines-dots" x="0" y="0" width="12%" height="12%" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="100" y2="100" stroke="#ffffff" strokeWidth="2" />
                <line x1="100" y1="0" x2="0" y2="100" stroke="#ffffff" strokeWidth="2" />
                <circle cx="50" cy="50" r="8" fill="#ffffff" />
              </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-lines-dots)" fillOpacity="0.2" />
          </svg>
          <div className="relative grid grid-cols-1 md:grid-cols-2 items-center p-16 my-2 text-lg h-20vh z-10">
            <h1 className="font-bold text-6xl my-4 md:my-0 md:text-4xl text-center md:text-center drop-shadow-[1px_1px_1px_rgba(0,0,0,0.9)]">
              MISIÓN
            </h1>
            <div className="space-y-4 text-justify">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis optio earum voluptates a id
                quidem error nostrum velit, odio corporis sed officia autem perferendis atque. Voluptate animi culpa
                cum veniam.
              </p>
            </div>
          </div>
        </section>

        {/* VISIÓN */}
        <section className="relative bg-blue-600 text-white">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <defs>
              <pattern id="pattern-lines-dots" x="0" y="0" width="12%" height="12%" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="100" y2="100" stroke="#ffffff" strokeWidth="2" />
                <line x1="100" y1="0" x2="0" y2="100" stroke="#ffffff" strokeWidth="2" />
                <circle cx="50" cy="50" r="8" fill="#ffffff" />
              </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-lines-dots)" fillOpacity="0.1" />
          </svg>
          <div className="relative grid grid-cols-1 md:grid-cols-2 items-center p-16 my-2 text-lg h-20vh">
            <h1 className="font-bold text-6xl my-4 md:my-0 md:text-4xl text-center md:text-center drop-shadow-[1px_1px_1px_rgba(0,0,0,0.9)]">
              VISIÓN
            </h1>
            <div className="space-y-4 text-justify">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis optio earum voluptates a id
                quidem error nostrum velit, odio corporis sed officia autem perferendis atque. Voluptate animi culpa
                cum veniam.
              </p>
            </div>
          </div>
        </section>

        {/* VALORES */}
        <section className="relative bg-gray-200 text-black">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <defs>
              <pattern id="pattern-lines-dots" x="0" y="0" width="12%" height="12%" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="100" y2="100" stroke="#ffffff" strokeWidth="2" />
                <line x1="100" y1="0" x2="0" y2="100" stroke="#ffffff" strokeWidth="2" />
                <circle cx="50" cy="50" r="8" fill="#ffffff" />
              </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-lines-dots)" fillOpacity="0.2" />
          </svg>
          <div className="relative grid grid-cols-1 md:grid-cols-2 items-center p-16 my-2 text-lg h-20vh z-10">
            <h1 className="font-bold text-6xl my-4 md:my-0 md:text-4xl text-center md:text-center drop-shadow-[1px_1px_1px_rgba(0,0,0,0.9)]">
              VALORES
            </h1>
            <div className="space-y-4 text-justify">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis optio earum voluptates a id
                quidem error nostrum velit, odio corporis sed officia autem perferendis atque. Voluptate animi culpa
                cum veniam.
              </p>
              <ul className='list-disc list-inside'>
                <li>valor 1</li>
                <li>valor 2</li>
                <li>valor 3</li>
                <li>valor 4</li>

              </ul>
            </div>
          </div>
        </section>


        {/* POLITICAS */}
        <section className="relative bg-blue-600 text-white">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <defs>
              <pattern id="pattern-lines-dots" x="0" y="0" width="12%" height="12%" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="100" y2="100" stroke="#ffffff" strokeWidth="2" />
                <line x1="100" y1="0" x2="0" y2="100" stroke="#ffffff" strokeWidth="2" />
                <circle cx="50" cy="50" r="8" fill="#ffffff" />
              </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-lines-dots)" fillOpacity="0.1" />
          </svg>
          <div className="relative grid grid-cols-1 md:grid-cols-2 items-center p-16 my-2 text-lg h-20vh">
            <h1 className="font-bold text-6xl my-4 md:my-0 md:text-4xl text-center md:text-center drop-shadow-[1px_1px_1px_rgba(0,0,0,0.9)]">
              POLÍTICAS
            </h1>
            <div className="space-y-4 text-justify">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis optio earum voluptates a id
                quidem error nostrum velit, odio corporis sed officia autem perferendis atque. Voluptate animi culpa
                cum veniam.
              </p>
              <ul className='list-disc list-inside'>
                <li>Política 1</li>
                <li>Política 2</li>
                <li>Política 3</li>
                <li>Política 4</li>
                <li>Política 1</li>
                <li>Política 2</li>
                <li>Política 3</li>
                <li>Política 4</li>
              </ul>
            </div>
          </div>
        </section>

      </div>


      <Footer></Footer>

    </div>
  );
}

export default Acerca;
