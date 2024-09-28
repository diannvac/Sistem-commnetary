import React, { useState } from 'react';
import { FaBars, FaTimes, FaHome, FaArrowRight, FaArrowLeft } from 'react-icons/fa'; // Importamos los iconos de react-icons


function Temaseis() {
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
                <a href="#tema1.5" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>1.Conceptos básicos de RSC: Qué es y por qué es importante </a>
              </li>
              <li className="mb-4">
                <a href="#tema2.5" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>2.Primeros pasos en RSC para pequeños negocios: implementación de acciones sencillas</a>
              </li>
              <li className="mb-4">
                <a href="#tema3.5" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>3.Beneficios de la RSC para las empresas: Mejora de la imagen y la relación con la comunidad</a>
              </li>
              <li className="mb-4">
                <a href="#tema4.5" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>4.Ejemplos inspiradores de RSC en empresas reconocidas: Casos fáciles de entender</a>
              </li>
              <li className="mb-4">
                <a href="#tema5.5" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>5.Cómo comunicar las iniciativas de RSC a clientes y empleados: Estrategias básicas de comunicación</a>
              </li>
              <li className="mb-4">
                <a href="#tema6.5" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>6.Voluntariado corporativo: Organización de actividades sencillas</a>
              </li>
              <li className="mb-4">
                <a href="#tema7.5" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>7.Introducción a las políticas de RSC: creación de políticas simples</a>
              </li>
              <li className="mb-4">
                <a href="#tema8.5" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>8.RSC y medio ambiente: Acciones básicas para reducir el impacto ambiental</a>
              </li>
              <li className="mb-4">
                <a href="#tema9.5" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>9.RSC y ética empresarial: Principios éticos en los negocios</a>
              </li>
              <li className="mb-4">
                <a href="#tema10.5" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>10.Recursos y herramientas para empezar en RSC: Guías y plataformas de aprendizaje</a>
              </li>

            </ul>
          </nav>
        </div>
        {/* Ícono para salir a la página principal */}
        <div className="mt-auto flex justify-center">
          <a href="/principiante" className="block p-2 rounded hover:bg-blue-700 flex items-center">
            <FaHome className="mr-2" />Home
          </a>
        </div>
        <div className="mt-auto flex justify-between">
        <a href="/temacinco" className="block p-2 rounded hover:bg-blue-700 flex items-center">
                        <FaArrowLeft className="mr-2" /> Capítulo 5 
                    </a>
          <a href="/temasiete" className="block p-2 rounded hover:bg-blue-700 flex items-center">
            Capítulo 7 <FaArrowRight className="ml-2" /> {/* BEL:AQUI CAMBIA EN EL MENU LA FECHITA DE QUE CAPITULO ES EL QUE SIGUE */}
          </a>
        </div>

      </aside>

      {/* Contenido Principal */}
      <main className="flex-1 p-6 px-12 ml-0 md:ml-80">
        <h1 id="introduccion" className=" text-3xl font-bold text-blue-900 mb-4">INTRODUCCIÓN</h1>
        <h3 className="text-2xl font-bold text-black-900 mb-4">Responsabilidad Social Corporativa (RSC) </h3>{/* AQUI SE PONE EL TITULO DEL CAPITULO */}
        <p className="mb-4 text-justify" >Objetivo: Profundizar en como las RSC no solo mejora la imagen de la empresa, sino que tambien contribuye significativamente a su sostenibilidad y al bienestar de la comunidad</p>
        <ul className="list-disc pl-10 mb-4">{/* BEL:ESTO LOS QUITAS, SOLO UL */}
          <li className="mb-2">Conceptos básicos de RSC para empresas</li>
          <li className="mb-2">Cómo empezar con RSC en tu empresa</li>
          <li className="mb-2">Beneficios de implementar RSC</li>
          <li className="mb-2">Ejemplos inspiradores de RSC </li>
          <li className="mb-2">Estrategias para comunicar RSC</li>
         
        </ul>
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
        <h3 id="tema1.5" className="text-2xl font-bold text-black-900 mb-4">1.Conceptos básicos de RSC: Qué es y por qué es importante</h3> {/* BEL: AQUI CAMBIAS LOS SUBTEMAS */}
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>1.1 Definición de Responsabilidad  Social Corporativa</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>1.2 Importancia de la RSC en negocios modernos</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>1.3 Qué significa RSC para una empresa</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>1.4 Por qué la RSC es calve en el éxito empresarial</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>1.5 Fundamentos de la Responsabilidad Social Empresarial</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>



        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />


        <hr className="border-t-8 my-4" /> {/* ESTAS SON LAS LINEAS QUE DIVIDEN LOS TEMAS */}
        {/* TEMA 2 */}
        <h3 id="tema2.5" className="text-2xl font-bold text-black-900 mb-4">2.Primeros pasos en RSC para pequeños negocios: implementación de acciones sencillas </h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>2.1 Cómo empezar con RSC en tu negocio</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>2.2 Acciones simples de RSC para pymes</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>2.3 Guía inicial para implementar RSC en pequeñas empresas</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>2.4 Primeros pasos hacia la responsabilidad social en negocios </h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>2.5 Implementar RSC en negocios pequeños consejos</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>


        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />


        <hr className="border-t-8 my-4" />
        {/* TEMA 3 */}
        <h3 id="tema3.5" className="text-2xl font-bold text-black-900 mb-4">3.Beneficios de la RSC para las empresas: Mejora de la imagen y la relación con la comunidad</h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        <h4 className='font-bold'>3.1 Beneficios de adoptar RSC en tu empresa </h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>3.2 Cómo la RSC mejora la imagen corporativa</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>3.3 RSC y su impacto en la relación comunidad-empresa</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>3.4 Ventajas de la Responsabilidad Social para negocios</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>3.5 Mejorar la imagen empresarial con RSC</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>


        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />


        <hr className="border-t-8 my-4" />
        {/* TEMA 4 */}
        <h3 id="tema4.5" className="text-2xl font-bold text-black-900 mb-4">4.Ejemplos inspiradores de RSC en empresas reconocidas: Casos fáciles de entender</h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>4.1 Casos de éxito en Responsabilidad Social Corporativa </h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>4.2 Empresas líderes en RSC y sus estrategias</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>4.3 Ejemplos motivadores de RSC en el mundo empresarial</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>4.4 Historias de éxito de RSC en grandes empresas</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>4.5 Iniciativas destacadas de Responsabilidad Social Empresarial</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>


        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />


        <hr className="border-t-8 my-4" />
        {/* TEMA 5 */}
        <h3 id="tema5.5" className="text-2xl font-bold text-black-900 mb-4">5.Como comunicar las iniciativas de RSC a clientes y empleados: Estrategias básicas de comunicación</h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>5.1 Comunicar acciones de RSC a stakeholders</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>5.2 Estrategias de comunicación para iniciativas RSC</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>5.3 Cómo informar sobre tu compromiso con la RSC</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>5.4 Divulgación efectiva de proyectos de RSC</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>5.5 Técnicas para comunicar esfuerzos de responsabilidad social</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>


        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />
        <hr className="border-t-8 my-4" />

        {/* TEMA 6 */}
        <h3 id="tema6.5" className="text-2xl font-bold text-black-900 mb-4">6.Voluntariado corporativo: Organización de actividades sencillas</h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>6.1 Organizar voluntariado en tu empresa</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>6.2 Actividades de voluntariado para equipos corporativos</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>6.3 Guía para voluntariado empresarial</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>6.4 Iniciar un programa de voluntariado en negocios</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>6.5 Ejemplos de voluntariado corporativo efectivo</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>


        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />

        <hr className="border-t-8 my-4" />
        {/* TEMA 7 */}
        <h3 id="tema7.5" className="text-2xl font-bold text-black-900 mb-4">7.Introducción a las políticas de RSC: Creación de políticas simples</h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>7.1 Desarrollar políticas de RSC en tu empresa</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>7.2 Guía básica para políticas de responsabilidad social</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>7.3 Creación de un marco de RSC para pyme</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>7.4 Establecer principios de RSC en tu  negocio</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>7.5 Cómo redactar políticas de Responsabilidad Social Corporativa</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>


        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />

        <hr className="border-t-8 my-4" />
        {/* TEMA 8 */}
        <h3 id="tema8.5" className="text-2xl font-bold text-black-900 mb-4">8.RSC y medio ambiente: Acciones básicas para reducir el impacto ambiental</h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>8.1 RSC y su contribución a la sostenibilidad ambiental</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>8.2 Acciones ecológicas bajo la estrategia de RSC</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>8.3 Reducir huella ambiental a través de RSC</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>8.4 RSC para la protección del medio ambiente</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>8.5 Iniciativas de RSC enfocadas en sostenibilidad</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>


        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />
        <hr className="border-t-8 my-4" />
        {/* TEMA 9 */}
        <h3 id="tema9.5" className="text-2xl font-bold text-black-900 mb-4">9.RSC y ética empresarial: Principios éticos en los negocios</h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>9.1 RSC y su base en la ética empresarial</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>9.2 Principios éticos fundamentales en RSC </h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>9.3 Cómo la RSC refuerza la ética en negocios</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>9.4 Ética y responsabilidad social en la empresa </h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>9.5 Integrar valores éticos en estrategias de RSC </h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>


        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />

        <hr className="border-t-8 my-4" />
        {/* TEMA 10 */}
        <h3 id="tema10.5" className="text-2xl font-bold text-black-900 mb-4">10.Recursos y herramientas para empezar en RSC: Guías y plataformas de aprendizaje</h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>10.1 Redcursos para introducirte en RSC </h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>10.2 Herramientas útiles para gestionar RSC en tu empresa</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>10.3 Plataformas de aprendizaje sobre Responsabilidad Social Corporativa</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>10.4 Guías prácticas para empezar con RSC </h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>10.5 Mejores prácticas y recursos en RSC para negocios</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>


        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />

      </main>
    </div>
  );
}

export default Temaseis;
