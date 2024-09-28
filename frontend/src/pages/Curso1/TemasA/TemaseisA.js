import React, { useState } from 'react';
import { FaBars, FaTimes, FaHome, FaArrowRight, FaArrowLeft } from 'react-icons/fa'; // Importamos los iconos de react-icons


function TemaseisA() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Botón para abrir/cerrar el menú en pantallas pequeñas */}
      <button
        className="md:hidden p-4 text-blue-900"
        onClick={toggleMenu}
      >
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Menú Lateral */}
      <aside className={`bg-blue-900 text-white w-full md:w-1/3 lg:w-1/4 p-6 h-full md:flexbox fixed  md:transform-none top-0 left-0 z-20 ${menuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className="flex justify-between items-center mb-6 md:hidden">
          <h2 className="text-2xl font-bold">CONTENIDO</h2>
          <button onClick={toggleMenu} className="text-white">
            <FaTimes size={24} />
          </button>
        </div>
        <h2 className="text-2xl font-bold mb-6 hidden md:block">CONTENIDO</h2>
        <div className='overflow-y-auto h-[calc(100%-8rem)]'>
          <nav>
            <ul>
              <li className="mb-4">
                <a href="#introduccion" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>Introducción</a>
              </li>
              {/* BEL:CAMBIOS PARA MENU DESPLEGABLE */}
              <li className="mb-4">
                <a href="#tema1_6" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>1.Liderazgo y visión en RSC: Ser un referente en la industria</a>
              </li>
              <li className="mb-4">
                <a href="#tema2_6" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>2.RSC y transformación empresarial: Impulsar cambios significativos y sostenibles en la empresa </a>
              </li>
              <li className="mb-4">
                <a href="#tema3_6" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>3.Estrategias avanzadas para la medición del impacto de RSC: Análisis complejos y mejoras continuas </a>
              </li>
              <li className="mb-4">
                <a href="#tema4_6" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>4.Gestión de stakeholders en RSC: Maximizar el valor para todos los interesados</a>
              </li>
              <li className="mb-4">
                <a href="#tema5_6" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>5.Inversión socialmente responsable: Incorporar criterios de RSC en decisiones de inversión</a>
              </li>
              <li className="mb-4">
                <a href="#tema6_6" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>6.Impacto global de la RSC: Contribución a los Objetivos de Desarrollo Sostenible (ODS)</a>
              </li>
              <li className="mb-4">
                <a href="#tema7_6" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>7.Desafíos éticos en la implementación de RSC: Navegar dilemas complejos</a>
              </li>
              <li className="mb-4">
                <a href="#tema8_6" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>8.Innovación y tecnología en RSC: Uso de nuevas tecnologías para potenciar la RSC</a>
              </li>
              <li className="mb-4">
                <a href="#tema9_6" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>9.Creación de ecosistemas de impacto social: Fomentar redes de colaboración</a>
              </li>
              <li className="mb-4">
                <a href="#tema10_6" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>10.Reporte avanzado y transparencia en RSC: Comunicación efectiva del impacto a nivel global</a>
              </li>
              

            </ul>
          </nav>
        </div>
        {/* Ícono para salir a la página principal */}
        <div className="mt-auto flex justify-center">
          <a href="/avanzado" className="block p-2 rounded hover:bg-blue-700 flex items-center">
            <FaHome className="mr-2" />Home
          </a>
        </div>
        <div className="mt-auto flex justify-between">
        <a href="/temacincoA" className="block p-2 rounded hover:bg-blue-700 flex items-center">
                        <FaArrowLeft className="mr-2" /> Capítulo 5
                    </a>
          <a href="/temasieteA" className="block p-2 rounded hover:bg-blue-700 flex items-center">
            Capítulo 6 <FaArrowRight className="ml-2" /> {/* BEL:AQUI CAMBIA EN EL MENU LA FECHITA DE QUE CAPITULO ES EL QUE SIGUE */}
          </a>
        </div>

      </aside>

      {/* Contenido Principal */}
      <main className="flex-1 p-6 px-12 ml-0 md:ml-80">
        <h1 id="introduccion" className=" text-3xl font-bold text-blue-900 mb-4">INTRODUCCIÓN</h1>
      
        <div className="max-w-2xl mx-auto">
          <div className="relative z-10 overflow-hidden rounded-lg shadow-lg">
            <video controls className="w-full">
              <source src="https://www.example.com/video.mp4" type="video/mp4" />
              {/* Puedes agregar más sources para soporte multi-formato */}
              Tu navegador no soporta el elemento de video.
            </video>
          </div>
        </div>

        <hr className="border-t-8 my-4" />

        {/* TEMA 1*/} {/* AQUI ESTAN LOS CAMBIOS PARA CADA DESGLOSE DE TEMAS, SI REQUIERES AGREGAR MÁS SOLO TIENES QUE COPIAR Y PEGAR */}
        <h3 id="tema1_6" className="text-2xl font-bold text-black-900 mb-4">1. Liderazgo y visión en RSC: Ser un referente en la industria</h3> 
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>1.1 Cómo liderar con RSC en tu sector </h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>1.2 Estrategias de liderazgo en responsabilidad social</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>1.3 Convertirse en referente de RSC en la insdustria</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>1.4 Visión de futuro en RSC para líderes empresariales</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>1.5 Líderazgo y responsabilidad social: inspirando cambio</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>



        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />


        <hr className="border-t-8 my-4" /> {/* ESTAS SON LAS LINEAS QUE DIVIDEN LOS TEMAS */}
        {/* TEMA 2 */}
        <h3 id="tema2_6" className="text-2xl font-bold text-black-900 mb-4">2.RSC y transformación empresarial: Impulsar cambios significativos y sostenibles en la empresa </h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>2.1 RSC como motor de transformación empresarial</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>2.2 Impulsar cambio sostenible mediante RSC</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>2.3 Incorporar RSC en la estrategia de cambio de la empresa</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>2.4 Transformación corporativa a través de la responsabilidad social</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>2.5 Cambio organizacional y RSC: estrategias efectivas</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>


        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />


        <hr className="border-t-8 my-4" />
        {/* TEMA 3 */}
        <h3 id="tema3_6" className="text-2xl font-bold text-black-900 mb-4">3.Estrategias avanzadas para la medición del impacto de RSC: Análisis complejos y mejoras continuas</h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        <h4 className='font-bold'>3.1 Medir impacto de RSC con técnicas avanzadas</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>3.2 Análisis y evaluación del impacto social corporativo</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>3.3 Herramientas para la medición de RSC </h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>3.4 Mejorar impacto de RSC: enfoques y metodologías</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>3.5 Evaluación continua del impacto de la responsabilidad social</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>


        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />


        <hr className="border-t-8 my-4" />
        {/* TEMA 4 */}
        <h3 id="tema4_6" className="text-2xl font-bold text-black-900 mb-4">4.Gestión de stakeholders en RSC: Maximizar el valor para todos los interesados</h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>4.1 Gestión efectiva de stakeholders en RSC</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>4.2 Maximizar valor para stakeholders mediante RSC</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>4.3 Estrategias de RSC centradas en los stakeholders</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>4.4 Involucrar a stakeholders en iniciativas de RSC </h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>4.5 Responsabilidad socail y gestión de expectativas de stakeholders</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>


        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />


        <hr className="border-t-8 my-4" />
        {/* TEMA 5 */}
        <h3 id="tema5_6" className="text-2xl font-bold text-black-900 mb-4">5.Inversión socialmente responsable: Incorporar criterios de RSC en decisiones de inversión</h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>5.1 Criterios de RSC para inversión responsable </h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>5.2 Invertir con un enfoque en responsabilidad social</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>5.3 Cómo incorporar RSC en decisiones de inversión</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>5.4 Inversiones que reflejan valores RSC </h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>5.5 Guía para la inversión socialmente responsable </h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>


        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />
        <hr className="border-t-8 my-4" />

        {/* TEMA 6 */}
        <h3 id="tema6_6" className="text-2xl font-bold text-black-900 mb-4">6.Impacto global de la RSC: Contribución a los Objetivos de Desarrollo Sostenible (ODS)</h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>6.1 RSC y su contribución a los ODS </h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>6.2 Impacto global de la responsabilidad social empresarial</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>6.3 Cómo la RSC apoya los Objetivos de Desarrollo Sostenible </h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>6.4 Empresas y su papel en alcanzar lso ODS mediante RSC</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>6.5 RSC: un puente hacia metas globales de sotenibilidad</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>


        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />

        <hr className="border-t-8 my-4" />
        {/* TEMA 7 */}
        <h3 id="tema7_6" className="text-2xl font-bold text-black-900 mb-4">7. Desafíos éticos en la implementación de RSC: Navegar dilemas complejos</h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>7.1 Superar dilemas éticos en RSC</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>7.2 Desafíos éticos de la responsabilidad social corporativa</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>7.3 Navegando la ética en programas de RSC</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>7.4 Ética y responsabilidad social: enfrentando desafíos</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>7.5 Soluciones a dilemas éticos en RSC</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>


        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />

        <hr className="border-t-8 my-4" />
        {/* TEMA 8 */}
        <h3 id="tema8_6" className="text-2xl font-bold text-black-900 mb-4"> 8.Innovación y tecnología en RSC:Uso de nuevas tecnologías para potencias la RSC</h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>8.1 Tecnología e innovación al servicio de la RSC </h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>8.2 Potenciar RSC  através de nuevas tecnologías</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>8.3 Innovaciones tecnológicas para la responsabilidad social</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>8.4 RSC en la era digital: oportunidades y retos</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>8.5 Uso de tecnología para mejorar iniciativas de RSC</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>


        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />
        <hr className="border-t-8 my-4" />
        {/* TEMA 9 */}
        <h3 id="tema9_6" className="text-2xl font-bold text-black-900 mb-4">9.Creación de ecosistemas de impacto social: Fomentar redes de colaboración</h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>9.1 Construir ecositemas de impacto social con RSC</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>9.2 Fomentar colaboración para impacto social</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>9.3 Redes de RSC para cambio social positivo</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>9.4 Ecosistemas colaborativos en responsabilidad social</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>9.5 Unir fuerzas: creación de comunidades de RSC</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>


        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />

        <hr className="border-t-8 my-4" />
        {/* TEMA 10 */}
        <h3 id="tema10_6" className="text-2xl font-bold text-black-900 mb-4">10.Reporte avanzado y transparencia en RSC: Comunicación efectiva del impacto a nivel global</h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>10.1 Reportes avanzados de RSC y su importancia</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>10.2 Transparencia en reportes de responsabilidad social</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>10.3 Comunicar impacto de RSC: estrategias y herramientas</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>10.4 Mejorar la comunicación global de RSC</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        

        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />

      </main>
    </div>
  );
}

export default TemaseisA;
