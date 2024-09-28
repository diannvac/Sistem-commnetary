import React, { useState } from 'react';
import { FaBars, FaTimes, FaHome, FaArrowRight, FaArrowLeft } from 'react-icons/fa'; // Importamos los iconos de react-icons


function TemaochoM() {
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
                <a  href="#tema01.8" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>1.Análisis de la huella de carbono y gestión de recursos: Herramientas y técnicas para medir y reducir impactos</a>{/* BEL:CAMBIA CADA UNO DE LOS TEMAS SEGUN CORRESPONDA */}
              </li>
              <li className="mb-4">
                <a href="#tema02.8" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>2.Estrategias de sostenibilidad integradas en el modelo de negocio: Casos de cómo la sostenibilidad impulsa la innovación.</a>
              </li>
              <li className="mb-4">
                <a  href="#tema03.8" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>3.Desarrollo de productos y servicios sostenibles: Principios y prácticas para la innovación</a>
              </li>
              <li className="mb-4">
                <a  href="#tema04.8" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>4.Participación de los empleados en la sostenibilidad: Programas de involucramiento y capacitación</a>
              </li>
              <li className="mb-4">
                <a  href="#tema05.8" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>5.Gestión de la cadena de suministro sostenible: Criterios y selección de proveedores</a>
              </li>
              <li className="mb-4">
                <a  href="#tema06.8" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>6. Estrategias de marketing verde: Comunicar eficazmente los compromisos y logros</a>
              </li>
              <li className="mb-4">
                <a  href="#tema07.8" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>7.Financiamiento de iniciativas sostenibles: Opciones para apoyar proyectos de sostenibilidad</a>
              </li>
              <li className="mb-4">
                <a  href="#tema08.8" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>8.Medición y reporte del progreso en sostenibilidad: Indicadores y reportes de sostenibilidad</a>
              </li>
              <li className="mb-4">
                <a  href="#tema09.8" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>9. Cumplimiento legal y más allá: Navegar por las regulaciones y buscar la excelencia</a>
              </li>
              <li className="mb-4">
                <a  href="#tema010.8" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>10.Colaboraciones y alianzas para la sostenibilidad: Construir redes de apoyo y cooperación</a>
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
        <a href="/temasieteM" className="block p-2 rounded hover:bg-blue-700 flex items-center">
                        <FaArrowLeft className="mr-2" /> Capítulo 7
                    </a>
          <a href="/temanueveM" className="block p-2 rounded hover:bg-blue-700 flex items-center">
            Capítulo 9 <FaArrowRight className="ml-2" /> {/* BEL:AQUI CAMBIA EN EL MENU LA FECHITA DE QUE CAPITULO ES EL QUE SIGUE */}
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
        <h3 id="tema01.8" className="text-2xl font-bold text-black-900 mb-4">1.Análisis de la huella de carbono y gestión de recursos: Herramientas y técnicas para medir y reducir impactos</h3> {/* BEL: AQUI CAMBIAS LOS SUBTEMAS */}
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        
          <h4 className='font-bold'>1.1 Cómo calcular huella de carbono empresa</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>1.2 Herramientas gestión recursos sostenibilidad</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>1.3 Reducir impacto ambiental en negocios</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>1.4 Técnicas para minimizar huella de carbono corporativa"</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>1.5 Software análisis huella de carbono</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

       
       
        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />


        <hr className="border-t-8 my-4" /> {/* ESTAS SON LAS LINEAS QUE DIVIDEN LOS TEMAS */}
        {/* TEMA 2 */}
        <h3 id="tema02.8" className="text-2xl font-bold text-black-900 mb-4">2.Estrategias de sostenibilidad integradas en el modelo de negocio: Casos de cómo la sostenibilidad impulsa la innovación</h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
       
          <h4 className='font-bold'>2.1 Modelos de negocio sostenibles innovadores</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>2.2 Integrar sostenibilidad estrategia empresarial</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>2.3 Casos éxito innovación sostenibilidad corporativa</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>2.4 Estrategias negocio verde ejemplos prácticos</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>2.5 Cómo sostenibilidad fomenta innovación empresa</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          
        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />
       
       
        <hr className="border-t-8 my-4" />
        {/* TEMA 3 */}
        <h3 id="tema03.8" className="text-2xl font-bold text-black-900 mb-4">3. Desarrollo de productos y servicios sostenibles: Principios y prácticas para la innovación</h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        <h4 className='font-bold'>3.1 Crear productos sostenibles guía</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>3.2 Innovación servicios eco-friendly</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>3.3 Principios diseño sostenible en negocios</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>3.4 Desarrollo sostenible en oferta empresarial</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>3.5 Estrategias para productos verdes innovadores</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          
        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />

       
        <hr className="border-t-8 my-4" />
        {/* TEMA 4 */}
        <h3 id="tema04.8" className="text-2xl font-bold text-black-900 mb-4">4. Participación de los empleados en la sostenibilidad: Programas de involucramiento y capacitación.</h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        
        <h4 className='font-bold'>4.1 Programas capacitación sostenibilidad para empleados</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>4.2 Involucrar trabajadores en iniciativas verdes</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>4.3 Estrategias para fomentar compromiso ambiental equipo</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>4.4 Capacitación interna sobre sostenibilidad</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>4.5 Mejores prácticas involucramiento sostenibilidad laboral</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          
        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />

       
        <hr className="border-t-8 my-4" />
        {/* TEMA 5 */}
        <h3 id="tema05.8" className="text-2xl font-bold text-black-900 mb-4">5. Gestión de la cadena de suministro sostenible: Criterios y selección de proveedores.</h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        
        <h4 className='font-bold'>5.1 Criterios selección proveedores sostenibles</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>5.2 Gestión cadena suministro verde</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>5.3 Cómo asegurar sostenibilidad en cadena de suministro</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>5.4 Selección de proveedores comprometidos con el medio ambiente</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>5.5 Prácticas para una cadena de suministro eco-amigable</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          
        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />
        <hr className="border-t-8 my-4" />
        
        {/* TEMA 6 */}
        <h3 id="tema06.8" className="text-2xl font-bold text-black-900 mb-4">6.Estrategias de marketing verde: Comunicar eficazmente los compromisos y logros</h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        
        <h4 className='font-bold'>6.1 Comunicación marketing sostenible</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>6.2 Estrategias efectivas marketing verde</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>6.3 Cómo promocionar compromisos ambientales</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>6.4 Marketing y sostenibilidad casos de éxito</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>6.5 Técnicas comunicación logros sostenibles</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          
          <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />

          <hr className="border-t-8 my-4" />
        {/* TEMA 7 */}
        <h3 id="tema07.8" className="text-2xl font-bold text-black-900 mb-4">7. Financiamiento de iniciativas sostenibles: Opciones para apoyar proyectos de sostenibilidad </h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        
        <h4 className='font-bold'>7.1 Opciones financiamiento proyectos verdes</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>7.2 Cómo financiar iniciativas de sostenibilidad</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>7.3 Fuentes de inversión para sostenibilidad empresarial</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>7.4 Financiar proyectos eco-innovadores</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>7.5 Subvenciones y créditos para sostenibilidad</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          
        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />

        <hr className="border-t-8 my-4" />
        {/* TEMA 8 */}
        <h3 id="tema08.8" className="text-2xl font-bold text-black-900 mb-4">8. Medición y reporte del progreso en sostenibilidad: Indicadores y reportes de sostenibilidad</h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        
        <h4 className='font-bold'>8.1 Indicadores clave progreso sostenibilidad</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>8.2 Cómo reportar avances en sostenibilidad</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>8.3 Herramientas para medir impacto ambiental empresa</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>8.4 Elaboración de reportes de sostenibilidad</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>8.5 Medición de resultados en iniciativas verdes</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          
        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />
        <hr className="border-t-8 my-4" />
        {/* TEMA 9 */}
        <h3 id="tema09.8" className="text-2xl font-bold text-black-900 mb-4">9. Cumplimiento legal y más allá: Navegar por las regulaciones y buscar la excelencia</h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        
        <h4 className='font-bold'>9.1 Regulaciones ambientales para empresas</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>9.2 Superar cumplimiento legal hacia sostenibilidad</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>9.3 Guía normativas ambientales corporativas</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>9.4 Excelencia en sostenibilidad más allá del cumplimiento</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>9.5 Estrategias para superar estándares legales ambientales</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          
        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />

        <hr className="border-t-8 my-4" />
        {/* TEMA 10 */}
        <h3 id="tema010.8" className="text-2xl font-bold text-black-900 mb-4">10. Colaboraciones y alianzas para la sostenibilidad: Construir redes de apoyo y cooperación</h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        
        <h4 className='font-bold'>10.1 Alianzas estratégicas para sostenibilidad</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>10.2 Colaboraciones corporativas en proyectos verdes</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>10.3 Redes de apoyo para iniciativas sostenibles</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>10.4 Cómo construir alianzas sostenibles</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>10.5 Cooperación interempresarial en sostenibilidad</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          
        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />

      </main>
    </div>
  );
}

export default TemaochoM;