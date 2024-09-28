import React, { useState } from 'react';
import { FaBars, FaTimes, FaHome, FaArrowRight, FaArrowLeft } from 'react-icons/fa'; // Importamos los iconos de react-icons


function TemacincoM() {
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
                <a  href="#tema01.5" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>1.Desarrollo de productos y servicios dentro de la economía circular: Estrategias para la innovación</a>{/* BEL:CAMBIA CADA UNO DE LOS TEMAS SEGUN CORRESPONDA */}
              </li>
              <li className="mb-4">
                <a href="#tema02.5" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>2.Medición del impacto ambiental y económico de prácticas circulares: Herramientas y metodologías</a>
              </li>
              <li className="mb-4">
                <a  href="#tema03.5" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>3.Estrategias de mercado para negocios circulares: Posicionamiento y diferenciación</a>
              </li>
              <li className="mb-4">
                <a  href="#tema04.5" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>4.Casos de estudio intermedios en economía circular: Lecciones aprendidas y estrategias aplicadas</a>
              </li>
              <li className="mb-4">
                <a  href="#tema05.5" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>5.Financiación de proyectos de economía circular: Acceso a inversiones y fondos</a>
              </li>
              <li className="mb-4">
                <a  href="#tema06.5" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>6.Integración de proveedores y cadena de suministro en la economía circular: Estrategias y desafíos</a>
              </li>
              <li className="mb-4">
                <a  href="#tema07.5" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>7.Certificaciones y estándares para productos circulares: Proceso y beneficios</a>
              </li>
              <li className="mb-4">
                <a  href="#tema08.5" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>8.Políticas públicas y su influencia en la economía circular: Navegando el entorno regulatorio</a>
              </li>
              <li className="mb-4">
                <a  href="#tema09.5" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>9.Innovaciones en logística y operaciones para la economía circular: Eficiencia y reducción de huella de carbono</a>
              </li>
              <li className="mb-4">
                <a  href="#tema010.5" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>10.Construcción de una marca y reputación basadas en la economía circular: Comunicación efectiva con los stakeholders</a>
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
        <a href="/temacuatroM" className="block p-2 rounded hover:bg-blue-700 flex items-center">
                        <FaArrowLeft className="mr-2" /> Capítulo 4
                    </a>
          <a href="/temaseisM" className="block p-2 rounded hover:bg-blue-700 flex items-center">
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
        <h3 id="tema01.5" className="text-2xl font-bold text-black-900 mb-4">1.Desarrollo de productos y servicios dentro de la economía circular: Estrategias para la innovación</h3> {/* BEL: AQUI CAMBIAS LOS SUBTEMAS */}
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        
          <h4 className='font-bold'>1.1 Estrategias innovación economía circular productos</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>1.2 Crear servicios en modelo circular</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>1.3 Desarrollo producto economía circular guía</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>1.4 Innovar con principios economía circular</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>1.5 Cómo diseñar productos sostenibles economía circular</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

       
       
        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />


        <hr className="border-t-8 my-4" /> {/* ESTAS SON LAS LINEAS QUE DIVIDEN LOS TEMAS */}
        {/* TEMA 2 */}
        <h3 id="tema02.5" className="text-2xl font-bold text-black-900 mb-4">2.Medición del impacto ambiental y económico de prácticas circulares: Herramientas y metodologías</h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
       
          <h4 className='font-bold'>2.1 Herramientas medición impacto economía circular</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>2.2 Evaluar efectos ambientales prácticas circulares</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>2.3 Metodologías impacto económico economía circular</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>2.4 Cómo medir sostenibilidad en negocios circulares</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>2.5 Indicadores impacto prácticas economía circular</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          
        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />
       
       
        <hr className="border-t-8 my-4" />
        {/* TEMA 3 */}
        <h3 id="tema03.5" className="text-2xl font-bold text-black-900 mb-4">3. Estrategias de mercado para negocios circulares: Posicionamiento y diferenciación</h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        <h4 className='font-bold'>3.1 Marketing para negocios economía circular</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>3.2 Diferenciar marca con economía circular</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>3.3 Estrategias posicionamiento negocios sostenibles</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>3.4 Mercado ventajas economía circular</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>3.5 Posicionar productos servicios circulares</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          
        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />

       
        <hr className="border-t-8 my-4" />
        {/* TEMA 4 */}
        <h3 id="tema04.5" className="text-2xl font-bold text-black-900 mb-4">4. Casos de estudio intermedios en economía circular: Lecciones aprendidas y estrategias aplicadas</h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        
        <h4 className='font-bold'>4.1 Casos éxito economía circular lecciones</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>4.2 Estrategias aplicadas economía circular estudios</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>4.3 Aprendizajes negocios modelo circular</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>4.4 Historias empresas economía circular</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>4.5 Lecciones prácticas economía circular empresas</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          
        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />

       
        <hr className="border-t-8 my-4" />
        {/* TEMA 5 */}
        <h3 id="tema05.5" className="text-2xl font-bold text-black-900 mb-4">5. Financiación de proyectos de economía circular: Acceso a inversiones y fondos</h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        
        <h4 className='font-bold'>5.1 Cómo financiar proyectos economía circular</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>5.2 Fuentes financiación sostenibilidad circular</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>5.3 Acceder inversiones economía circular</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>5.4 Fondos para iniciativas circulares</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>5.5 Guía financiamiento negocios ecológicos</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          
        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />
        <hr className="border-t-8 my-4" />
        
        {/* TEMA 6 */}
        <h3 id="tema06.5" className="text-2xl font-bold text-black-900 mb-4">6.ntegración de proveedores y cadena de suministro en la economía circular: Estrategias y desafíos</h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        
        <h4 className='font-bold'>6.1 Integrar proveedores economía circular</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>6.2 Cadena suministro sostenible estrategias</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>6.3 Desafíos logística economía circular</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>6.4 Gestión cadena de valor circular</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>6.5 Colaboración proveedores modelo circular</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          
          <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />

          <hr className="border-t-8 my-4" />
        {/* TEMA 7 */}
        <h3 id="tema07.5" className="text-2xl font-bold text-black-900 mb-4">7. Certificaciones y estándares para productos circulares: Proceso y beneficios</h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        
        <h4 className='font-bold'>7.1 Obtener certificaciones productos circulares</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>7.2 Estándares calidad economía circular</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>7.3 Beneficios certificación sostenibilidad</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>7.4 Proceso certificar producto circular</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>7.5 Guía estándares productos economía circular</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          
        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />

        <hr className="border-t-8 my-4" />
        {/* TEMA 8 */}
        <h3 id="tema08.5" className="text-2xl font-bold text-black-900 mb-4">8.Políticas públicas y su influencia en la economía circular: Navegando el entorno regulatorio</h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        
        <h4 className='font-bold'>8.1 Influencia políticas públicas economía circular</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>8.2 Navegar regulaciones sostenibilidad</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>8.3 Impacto ley en modelos circulares</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>8.4 Entorno legal economía circular</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>8.5 Adaptarse políticas sostenibilidad negocio</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          
        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />
        <hr className="border-t-8 my-4" />
        {/* TEMA 9 */}
        <h3 id="tema09.5" className="text-2xl font-bold text-black-900 mb-4">9. Innovaciones en logística y operaciones para la economía circular: Eficiencia y reducción de huella de carbono</h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        
        <h4 className='font-bold'>9.1 Logística verde eficiencia operaciones</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>9.2 Innovaciones reducir carbono economía circular</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>9.3 Optimizar operaciones modelo circular</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>9.4 Logística sostenible prácticas circulares</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>9.5 Reducir huella operaciones circulares</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          
        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />

        <hr className="border-t-8 my-4" />
        {/* TEMA 10 */}
        <h3 id="tema010.5" className="text-2xl font-bold text-black-900 mb-4">10. Construcción de una marca y reputación basadas en la economía circular: Comunicación efectiva con los stakeholders</h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        
        <h4 className='font-bold'>10.1 Construir marca economía circular</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>10.2 Comunicar sostenibilidad stakeholders</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>10.3 Reputación basada principios circulares</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>10.4 Estrategias comunicación economía circular</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>10.5 Engagement cliente modelo sostenible</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          
        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />

      </main>
    </div>
  );
}

export default TemacincoM;