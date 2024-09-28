import React, { useState } from 'react';
import { FaBars, FaTimes, FaHome, FaArrowRight, FaArrowLeft } from 'react-icons/fa'; // Importamos los iconos de react-icons


function TemadoceM() {
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
                <a  href="#tema01.12" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>1.Desarrollo e implementación de estrategias de sostenibilidad: Planificación detallada y ejecución</a>{/* BEL:CAMBIA CADA UNO DE LOS TEMAS SEGUN CORRESPONDA */}
              </li>
              <li className="mb-4">
                <a href="#tema02.12" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>2.Gestión de la cadena de suministro verde: Criterios y prácticas para proveedores</a>
              </li>
              <li className="mb-4">
                <a  href="#tema03.12" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>3.Innovaciones en productos y servicios sostenibles: Desarrollo centrado en la sostenibilidad</a>
              </li>
              <li className="mb-4">
                <a  href="#tema04.12" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>4.Casos de estudio de empresas en transición hacia la economía verde: Lecciones y estrategias</a>
              </li>
              <li className="mb-4">
                <a  href="#tema05.12" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>5.Financiamiento y subvenciones para proyectos verdes: Cómo acceder a recursos financieros</a>
              </li>
              <li className="mb-4">
                <a  href="#tema06.12" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>6.Certificaciones ambientales para negocios: Proceso y beneficios</a>
              </li>
              <li className="mb-4">
                <a  href="#tema07.12" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>7.Marketing verde y comunicación de iniciativas sostenibles: Estrategias efectivas</a>
              </li>
              <li className="mb-4">
                <a  href="#tema08.12" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>8.Medición y reporte del progreso hacia la sostenibilidad: Indicadores y herramientas avanzadas</a>
              </li>
              <li className="mb-4">
                <a  href="#tema09.12" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>9.Colaboraciones estratégicas para la sostenibilidad: Construcción de alianzas</a>
              </li>
              <li className="mb-4">
                <a  href="#tema10.12" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>10.Impacto social de las economías verdes: Contribución a la comunidad y el bienestar social</a>
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
        <a href="/temaonceM" className="block p-2 rounded hover:bg-blue-700 flex items-center">
                        <FaArrowLeft className="mr-2" /> Capítulo 11
                    </a>
          <a href="/avanzado" className="block p-2 rounded hover:bg-blue-700 flex items-center">
            Nivel avanzado <FaArrowRight className="ml-2" /> {/* BEL:AQUI CAMBIA EN EL MENU LA FECHITA DE QUE CAPITULO ES EL QUE SIGUE */}
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
        <h3 id="tema01.12" className="text-2xl font-bold text-black-900 mb-4">1.Desarrollo e implementación de estrategias de sostenibilidad: Planificación detallada y ejecución</h3> {/* BEL: AQUI CAMBIAS LOS SUBTEMAS */}
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        
          <h4 className='font-bold'>1.1 Cómo desarrollar e implementar estrategias de sostenibilidad</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>1.2 Planificación de sostenibilidad empresarial efectiva</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>1.3 Pasos para ejecutar una estrategia de sostenibilidad</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>1.4 Guía para la implementación de prácticas sostenibles en negocios</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>1.5 Estrategias de sostenibilidad: Planificación y casos de éxito</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

       
       
        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />


        <hr className="border-t-8 my-4" /> {/* ESTAS SON LAS LINEAS QUE DIVIDEN LOS TEMAS */}
        {/* TEMA 2 */}
        <h3 id="tema02.12" className="text-2xl font-bold text-black-900 mb-4">2.Gestión de la cadena de suministro verde: Criterios y prácticas para proveedores</h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
       
          <h4 className='font-bold'>2.1 Implementar una cadena de suministro verde: Criterios clave</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>2.2 Prácticas sostenibles para gestión de proveedores</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>2.3 Cómo gestionar una cadena de suministro eco-amigable</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>2.4 Selección de proveedores sostenibles: Guía para empresas</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>2.5 Optimización de la cadena de suministro con enfoque verde</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          
        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />
       
       
        <hr className="border-t-8 my-4" />
        {/* TEMA 3 */}
        <h3 id="tema03.12" className="text-2xl font-bold text-black-900 mb-4">3. Innovaciones en productos y servicios sostenibles: Desarrollo centrado en la sostenibilidad</h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        <h4 className='font-bold'>3.1 Innovación de productos sostenibles: Estrategias y ejemplos</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>3.2 Desarrollo de servicios eco-friendly: Cómo comenzar</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>3.3 Innovar en sostenibilidad: Productos y servicios verdes</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>3.4 Creación de ofertas sostenibles para el mercado moderno</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>3.5 Estrategias para el desarrollo de productos eco-sostenibles</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          
        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />

       
        <hr className="border-t-8 my-4" />
        {/* TEMA 4 */}
        <h3 id="tema04.12" className="text-2xl font-bold text-black-900 mb-4">4.Casos de estudio de empresas en transición hacia la economía verde: Lecciones y estrategias</h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        
        <h4 className='font-bold'>4.1 Transformación empresarial hacia la economía verde: Casos reales</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>4.2 Lecciones aprendidas de empresas sostenibles</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>4.3 Cómo las empresas se convierten en modelos de sostenibilidad</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>4.4 Estrategias de éxito para la transición a prácticas verdes</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>4.5 Historias inspiradoras de sostenibilidad empresarial</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          
        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />

       
        <hr className="border-t-8 my-4" />
        {/* TEMA 5 */}
        <h3 id="tema05.12" className="text-2xl font-bold text-black-900 mb-4">5. Financiamiento y subvenciones para proyectos verdes: Cómo acceder a recursos financieros</h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        
        <h4 className='font-bold'>5.1 Guía de financiamiento para proyectos de sostenibilidad</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>5.2 Subvenciones y recursos financieros para iniciativas verdes</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>5.3 Cómo obtener financiamiento para tu proyecto sostenible</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>5.4 Opciones de financiamiento para negocios eco-amigables</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>5.5 Acceder a subvenciones para la innovación en sostenibilidad</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          
        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />
        <hr className="border-t-8 my-4" />
        
        {/* TEMA 6 */}
        <h3 id="tema06.12" className="text-2xl font-bold text-black-900 mb-4">6.Certificaciones ambientales para negocios: Proceso y beneficios</h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        
        <h4 className='font-bold'>6.1 Certificaciones verdes para empresas: Cómo obtenerlas</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>6.2 Beneficios de las certificaciones ambientales en negocios</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>6.3 Proceso para lograr una certificación sostenible empresarial</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>6.4 Impacto de las certificaciones verdes en el mercado</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>6.5 Guía completa para certificaciones de sostenibilidad</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          
          <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />

          <hr className="border-t-8 my-4" />
        {/* TEMA 7 */}
        <h3 id="tema07.12" className="text-2xl font-bold text-black-900 mb-4">7. Marketing verde y comunicación de iniciativas sostenibles: Estrategias efectivas</h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        
        <h4 className='font-bold'>7.1 Estrategias de marketing verde para empresas</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>7.2 Comunicar eficazmente tu compromiso con la sostenibilidad</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>7.3 Cómo promover iniciativas sostenibles: Marketing eco-friendly</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>7.4 Marketing y sostenibilidad: Conectar con consumidores conscientes</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>7.5 Casos de éxito en comunicación de sostenibilidad empresarial</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          
        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />

        <hr className="border-t-8 my-4" />
        {/* TEMA 8 */}
        <h3 id="tema08.12" className="text-2xl font-bold text-black-900 mb-4">8.Medición y reporte del progreso hacia la sostenibilidad: Indicadores y herramientas avanzadas</h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        
        <h4 className='font-bold'>8.1 Medir el progreso en sostenibilidad: Herramientas y técnicas</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>8.2 Indicadores clave para evaluar la sostenibilidad empresarial</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>8.3 Cómo reportar avances en prácticas sostenibles</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>8.4 Herramientas para el seguimiento de objetivos de sostenibilidad</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>8.5 Reportes de sostenibilidad: Mejores prácticas y ejemplos</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          
        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />
        <hr className="border-t-8 my-4" />
        {/* TEMA 9 */}
        <h3 id="tema09.12" className="text-2xl font-bold text-black-900 mb-4">9. Colaboraciones estratégicas para la sostenibilidad: Construcción de alianzas</h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        
        <h4 className='font-bold'>9.1 Alianzas estratégicas para impulsar la sostenibilidad</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>9.2 Colaboraciones exitosas en proyectos verdes</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>9.3 Cómo formar alianzas para la innovación sostenible</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>9.4 Partnerships para el avance de economías verdes</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>9.5 Construir redes colaborativas para la sostenibilidad</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          
        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />

        <hr className="border-t-8 my-4" />
        {/* TEMA 10 */}
        <h3 id="tema010.12" className="text-2xl font-bold text-black-900 mb-4">10. Impacto social de las economías verdes: Contribución a la comunidad y el bienestar social</h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        
        <h4 className='font-bold'>10.1 Economías verdes y su impacto en la comunidad</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>10.2 Cómo las prácticas sostenibles benefician al bienestar social</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>10.3 Contribuciones sociales de negocios eco-sostenibles</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
          
        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />

      </main>
    </div>
  );
}

export default TemadoceM;