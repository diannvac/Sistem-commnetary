import React, { useState } from 'react';
import { FaBars, FaTimes, FaHome, FaArrowRight, FaArrowLeft } from 'react-icons/fa'; // Importamos los iconos de react-icons


function TemanueveM() {
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
                <a  href="#tema01.9" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>1.Preparación detallada para el proceso de certificación: Pasos y documentación necesarios</a>{/* BEL:CAMBIA CADA UNO DE LOS TEMAS SEGUN CORRESPONDA */}
              </li>
              <li className="mb-4">
                <a href="#tema02.9" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>2.Análisis en profundidad de B Corp y ISO 26000: Beneficios específicos y desafíos</a>
              </li>
              <li className="mb-4">
                <a  href="#tema03.9" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>3.Gestión de cambios internos para cumplir con los estándares: Estrategias organizacionales</a>
              </li>
              <li className="mb-4">
                <a  href="#tema04.9" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>4.Medición y reporte del impacto según los requisitos de certificación: Herramientas y métodos</a>
              </li>
              <li className="mb-4">
                <a  href="#tema05.9" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>5.Casos de estudio detallados: Lecciones aprendidas de empresas en el proceso de certificación</a>
              </li>
              <li className="mb-4">
                <a  href="#tema06.9" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>6.Integración de las certificaciones en la estrategia de RSC y sostenibilidad: Cómo maximizar el impacto</a>
              </li>
              <li className="mb-4">
                <a  href="#tema07.9" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>7.Alianzas y colaboraciones para facilitar la certificación: Creación de redes de apoyo</a>
              </li>
              <li className="mb-4">
                <a  href="#tema08.9" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>8.Desafíos comunes en el proceso de certificación y cómo superarlos: Soluciones prácticas</a>
              </li>
              <li className="mb-4">
                <a  href="#tema09.9" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>9.Mantener y renovar certificaciones: Compromisos y procesos continuos</a>
              </li>
              <li className="mb-4">
                <a  href="#tema010.9" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>10.Impacto de las certificaciones en la cadena de suministro y las operaciones globales: Mejoras y adaptaciones</a>
              </li>
              
            </ul>
          </nav>
        </div>
          {/* Ícono para salir a la página principal */}
          <div className="mt-auto flex justify-center">
          <a href="/medio" className="block p-2 rounded hover:bg-blue-700 flex items-center">
            <FaHome className="mr-2" />Home
          </a>
        </div>
        <div className="mt-auto flex justify-between">
        <a href="/temaochoM" className="block p-2 rounded hover:bg-blue-700 flex items-center">
                        <FaArrowLeft className="mr-2" /> Capítulo 8
                    </a>
          <a href="/temadiezM" className="block p-2 rounded hover:bg-blue-700 flex items-center">
            Capítulo 10 <FaArrowRight className="ml-2" /> {/* BEL:AQUI CAMBIA EN EL MENU LA FECHITA DE QUE CAPITULO ES EL QUE SIGUE */}
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
        <h3 id="tema01.9" className="text-2xl font-bold text-black-900 mb-4">1.Preparación detallada para el proceso de certificación: Pasos y documentación necesarios</h3> {/* BEL: AQUI CAMBIAS LOS SUBTEMAS */}
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        
          <h4 className='font-bold'>1.1 Cómo prepararse para certificación B Corp paso a paso</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>1.2 Documentación necesaria para certificación ISO 26000</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>1.3 Guía completa para proceso de certificación sostenible</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>1.4 Lista de verificación para certificación empresarial global</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>1.5 Etapas y requisitos para obtener certificaciones de sostenibilidad</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

       
       
        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />


        <hr className="border-t-8 my-4" /> {/* ESTAS SON LAS LINEAS QUE DIVIDEN LOS TEMAS */}
        {/* TEMA 2 */}
        <h3 id="tema02.9" className="text-2xl font-bold text-black-900 mb-4">2.Análisis en profundidad de B Corp y ISO 26000: Beneficios específicos y desafíos</h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
       
          <h4 className='font-bold'>2.1 Beneficios de convertirse en empresa B Corp explicados</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>2.2 Desafíos y soluciones en certificación ISO 26000</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>2.3 Comparativa: B Corp vs ISO 26000 para negocios</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>2.4 Impacto positivo de certificaciones B Corp en negocios</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>2.5 Cómo ISO 26000 mejora la responsabilidad social corporativa</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          
        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />
       
       
        <hr className="border-t-8 my-4" />
        {/* TEMA 3 */}
        <h3 id="tema03.9" className="text-2xl font-bold text-black-900 mb-4">3. Gestión de cambios internos para cumplir con los estándares: Estrategias organizacionales</h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        <h4 className='font-bold'>3.1 Estrategias para implementar cambios hacia sostenibilidad ISO 26000</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>3.2 Gestión organizacional para certificación B Corp</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>3.3 Adaptar empresa a estándares de sostenibilidad globales</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>3.4 Cambio cultural empresarial para cumplimiento de estándares sostenibles</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>3.5 Liderazgo y gestión de cambio para certificaciones ambientales</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          
        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />

       
        <hr className="border-t-8 my-4" />
        {/* TEMA 4 */}
        <h3 id="tema04.9" className="text-2xl font-bold text-black-900 mb-4">4. Medición y reporte del impacto según los requisitos de certificación: Herramientas y métodos</h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        
        <h4 className='font-bold'>4.1 Herramientas para medir impacto sostenible en certificaciones</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>4.2 Reportar avances sostenibilidad según B Corp e ISO 26000</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>4.3 Métodos efectivos para documentar impacto social y ambienta</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>4.4 Cómo cuantificar y reportar impacto para certificaciones</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>4.5 Sistemas de seguimiento del impacto para certificaciones globales</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          
        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />

       
        <hr className="border-t-8 my-4" />
        {/* TEMA 5 */}
        <h3 id="tema05.9" className="text-2xl font-bold text-black-900 mb-4">5. Casos de estudio detallados: Lecciones aprendidas de empresas en el proceso de certificación.</h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        
        <h4 className='font-bold'>5.1 Historias de éxito en certificación B Corp e ISO 26000</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>5.2 Lecciones aprendidas de empresas certificadas globalmente</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>5.3 Casos reales de negocios sostenibles y sus estrategias de certificación</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>5.4 Experiencias empresariales en obtener certificaciones de sostenibilidad</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>5.5 Estudios de caso: Desafíos y victorias en certificación sostenible</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          
        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />
        <hr className="border-t-8 my-4" />
        
        {/* TEMA 6 */}
        <h3 id="tema06.9" className="text-2xl font-bold text-black-900 mb-4">6.Integración de las certificaciones en la estrategia de RSC y sostenibilidad: Cómo maximizar el impacto</h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        
        <h4 className='font-bold'>6.1 Maximizar impacto RSC con certificaciones B Corp</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>6.2 Incorporar ISO 26000 en estrategias de sostenibilidad</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>6.3 Sinergia entre certificaciones y sostenibilidad corporativa</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>6.4 Cómo certificaciones refuerzan estrategias de RSC</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>6.5 Integrar prácticas certificadas en planificación sostenible</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          
          <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />

          <hr className="border-t-8 my-4" />
        {/* TEMA 7 */}
        <h3 id="tema07.9" className="text-2xl font-bold text-black-900 mb-4">7. Alianzas y colaboraciones para facilitar la certificación: Creación de redes de apoyo</h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        
        <h4 className='font-bold'>7.1 Alianzas clave para éxito en certificación sostenible</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>7.2 Redes de apoyo para empresas en proceso de certificación</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>7.3 Colaboraciones estratégicas para obtener B Corp e ISO 26000</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>7.4 Cómo alianzas pueden simplificar la certificación sostenible</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>7.5 Unirse a comunidades para facilitar proceso de certificación</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          
        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />

        <hr className="border-t-8 my-4" />
        {/* TEMA 8 */}
        <h3 id="tema08.9" className="text-2xl font-bold text-black-900 mb-4">8.Desafíos comunes en el proceso de certificación y cómo superarlos: Soluciones prácticas</h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        
        <h4 className='font-bold'>8.1 Superar obstáculos en camino a certificación sostenible</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>8.2 Soluciones a desafíos comunes en certificaciones B Corp/ISO</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>8.3 Cómo manejar dificultades en proceso de certificación</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>8.4 Tips para superar barreras en certificación de sostenibilidad</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>8.5 Guía para enfrentar desafíos en certificaciones globales</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          
        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />
        <hr className="border-t-8 my-4" />
        {/* TEMA 9 */}
        <h3 id="tema09.9" className="text-2xl font-bold text-black-900 mb-4">9. Mantener y renovar certificaciones: Compromisos y procesos continuos</h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        
        <h4 className='font-bold'>9.1 Cómo mantener y renovar tu certificación B Corp</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>9.2 Proceso de renovación de certificación ISO 26000</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>9.3 Estrategias para el mantenimiento de estándares globales</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>9.4 Compromisos a largo plazo en certificaciones de sostenibilidad</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>9.5 Guía para la actualización continua de certificaciones empresariales</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          
        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />

        <hr className="border-t-8 my-4" />
        {/* TEMA 10 */}
        <h3 id="tema010.9" className="text-2xl font-bold text-black-900 mb-4">10. Impacto de las certificaciones en la cadena de suministro y las operaciones globales: Mejoras y adaptaciones</h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        
        <h4 className='font-bold'>10.1 Beneficios de certificaciones B Corp en la cadena de suministro global</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>10.2 Cómo ISO 26000 mejora operaciones y cadena de suministro</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>10.3 Adaptaciones necesarias para cumplir con estándares globales en la cadena de suministro</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>10.4 Impacto de certificaciones sostenibles en operaciones internacionales</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>10.5 Mejoras en la cadena de suministro gracias a certificaciones de sostenibilidad</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>10.6 Estrategias para integrar B Corp e ISO 26000 en la cadena de suministro</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>10.7 Certificaciones globales y su efecto en la eficiencia operacional</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>10.8 Casos de éxito: Implementación de estándares sostenibles en cadenas de suministro</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>10.9 Cómo las certificaciones sostenibles transforman operaciones globales</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>10.10 Adaptación de procesos globales a certificaciones B Corp e ISO 26000</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />

      </main>
    </div>
  );
}

export default TemanueveM;