import React, { useState } from 'react';
import { FaBars, FaTimes, FaHome, FaArrowRight, FaArrowLeft } from 'react-icons/fa'; // Importamos los iconos de react-icons


function Temacuatro() {
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
                <a href="#tema1.3" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>1.Introducción a la tecnología verde: Definición y ejemplos básicos</a>{/* BEL:CAMBIA CADA UNO DE LOS TEMAS SEGUN CORRESPONDA */}
              </li>
              <li className="mb-4">
                <a href="#tema2.3" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>2.Beneficios de la tecnología verde para pequelas empresas: Ahorro de costos y beneficios medioambientales</a>
              </li>
              <li className="mb-4">
                <a href="#tema3.3" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>3.Innovaciones verdes simples: SOluciones fáciles de implementar </a>
              </li>
              <li className="mb-4">
                <a href="#tema4.3" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>4.Primeros pasos hacia la adopción de tecnología verde: Cómo comenzar en tu negocio</a>
              </li>
              <li className="mb-4">
                <a href="#tema5.3" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>5.Casos de éxito inspiradores: Historias de pequeñas empresas que han implementado tecnología verde</a>
              </li>
              <li className="mb-4">
                <a href="#tema6.3" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>6.Recursos y herramientas básicas para la exploración de tecnologias verdes: Dónde encontrar información y apoyo</a>
              </li>
              <li className="mb-4">
                <a href="#tema7.3" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>7.Impacto de la tecnología verde en la operación empresarial: Mejoras en eficiencia y reducción de residuos</a>
              </li>
              <li className="mb-4">
                <a href="#tema8.3" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>8.Estrategias de marketing verde para principiantes: Cómo comunicar tus esfuerzos verdes a los clientes</a>
              </li>
              <li className="mb-4">
                <a href="#tema9.3" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>9.Subvenciones y financiación para proyectos verdes iniicales: Opciones de apoyo financiero disponibles</a>
              </li>
              <li className="mb-4">
                <a href="#tema10.3" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>10.Retos comunes al introducir tecnología verde y como superarlos: Soluciones prácticas</a>
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
        <a href="/tematres" className="block p-2 rounded hover:bg-blue-700 flex items-center">
                        <FaArrowLeft className="mr-2" /> Capítulo 3
                    </a>
          <a href="/temacinco" className="block p-2 rounded hover:bg-blue-700 flex items-center">
            Capítulo 5 <FaArrowRight className="ml-2" /> {/* BEL:AQUI CAMBIA EN EL MENU LA FECHITA DE QUE CAPITULO ES EL QUE SIGUE */}
          </a>
        </div>

      </aside>

      {/* Contenido Principal */}
      <main className="flex-1 p-6 px-12 ml-0 md:ml-80">
        <h1 id="introduccion" className=" text-3xl font-bold text-blue-900 mb-4">INTRODUCCIÓN</h1>
        <h3 className="text-2xl font-bold text-black-900 mb-4">Innovación y tecnología verde</h3>{/* AQUI SE PONE EL TITULO DEL CAPITULO */}
        <p className="mb-4 text-justify" >Fomentar la compresión y aplicación de innovaciones y tecnologías verdes para prommover prácticas empresariales sostenibles.</p>
        <ul className="list-disc pl-10 mb-4">{/* BEL:ESTO LOS QUITAS, SOLO UL */}
          <li className="mb-2">Introducción a tecnología verde en negocios</li>
          <li className="mb-2">Beneficios de adoptar innovaciones verdes</li>
          <li className="mb-2">Ejemplos de tecnología verde para pymes </li>
          <li className="mb-2">Cómo implementar tecnología verde</li>
          <li className="mb-2">Casos de éxito en tecnología verde</li>
          <li className="mb-2">Financiación para proyectos verdes</li>
          <li className="mb-2">Desafios al introducir tecnología verde</li>
    
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
        <h3 id="tema1.3" className="text-2xl font-bold text-black-900 mb-4">1.Concepto de modelo de negocio sostenible </h3> {/* BEL: AQUI CAMBIAS LOS SUBTEMAS */}
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>1.1 Qué es un modelo de negocio sostenible</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>1.2 Definición modelo negocio sostenible</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>1.3 Principios negocios sostenibles </h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>1.4 Conceptos clave negocio verde</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>1.5 Fundamentos negocios sostenibilidad</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>



        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />


        <hr className="border-t-8 my-4" /> {/* ESTAS SON LAS LINEAS QUE DIVIDEN LOS TEMAS */}
        {/* TEMA 2 */}
        <h3 id="tema2.3" className="text-2xl font-bold text-black-900 mb-4">2.Diferencias entre modelos tradicionales y sostenibles</h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>2.1 Comparación negocios tradicionales vs sostenibles</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>2.2 Diferencias modelo de negocio tradicional sostenible</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>2.3 VS sostenibilidad negocios tradicionales</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>2.4 Contraste entre negocios verdes y convencionales</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>2.5 Como difieren negocios sostenibles de tradicionales</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>


        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />


        <hr className="border-t-8 my-4" />
        {/* TEMA 3 */}
        <h3 id="tema3.3" className="text-2xl font-bold text-black-900 mb-4">3.Beneficios básicos de adoptar un modelo sostenible</h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        <h4 className='font-bold'>3.1 Ventajas de negocios sostenibles</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>3.2 Beneficios de adoptar modelo sostenible</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>3.3 Por qué elegir negocio sostenible </h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>3.4 Ganancias sostenibilidad empresarial</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>3.5 Impacto posititivo negocios verdes</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>


        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />


        <hr className="border-t-8 my-4" />
        {/* TEMA 4 */}
        <h3 id="tema4.3" className="text-2xl font-bold text-black-900 mb-4">4.Ejemplos inspiradores de negocios sostenibles emergentes </h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>4.1 Casos éxito negocios sostenibles emergentes</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>4.2 Startups verdes inspiradoras</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>4.3 Ejemplos negocios verdes innovadores</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>4.4 Historias inspiración negocio sostenibilidad</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>4.5 Empresas emergentes modelo sostenible</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>


        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />


        <hr className="border-t-8 my-4" />
        {/* TEMA 5 */}
        <h3 id="tema5.3" className="text-2xl font-bold text-black-900 mb-4">5.Primeros pasos para pensar en sostenibilidad </h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>5.1 Iniciar camino hasta sostenibilidad negocio</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>5.2 Primeros pasos negocio verde</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>5.3 Cómo empezar sostenibilidad empresarial</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>5.4 Introducción a la sostenibilidad para pymes</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>5.5 Comenzado con prácticas sostenibles en negocios.</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>


        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />
        <hr className="border-t-8 my-4" />

        {/* TEMA 6 */}
        <h3 id="tema6.3" className="text-2xl font-bold text-black-900 mb-4">6.Herramientas básicas para planificar un negocio sostenible</h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>6.1 Herramientas planificación negocio sostenible </h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>6.2 Software gestión sostenibilidad empresarial</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>6.3 Recursos para negocios verdes </h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>6.4 PLanificar empresa sostenible herramientas </h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>6.5 Guías para negocio sostenibles</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>


        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />

        <hr className="border-t-8 my-4" />
        {/* TEMA 7 */}
        <h3 id="tema7.3" className="text-2xl font-bold text-black-900 mb-4">7.Estrategias iniciales para la escalabilidad sostenible</h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>7.1 Cómo escalar negocios sostenibles</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>7.2 Estrategias escalabilidad sostenibilidad</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>7.3 Crecimiento sostenible para pymes</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>7.4 Ampliar negocio sostenible estrategias</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>7.5 Escalando tu empresa verde</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>


        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />

        <hr className="border-t-8 my-4" />
        {/* TEMA 8 */}
        <h3 id="tema8.3" className="text-2xl font-bold text-black-900 mb-4">8.Impacto de los modelos sostenibles en los stakeholders locales</h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>8.1 Efecto negocios verdes en comunidad local</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>8.2 Impacto negocio sostenible stakeholders</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>8.3 Beneficios sostenibilidad para comunidad</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>8.4 Cómo negocios sostenibles afectan locales</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>8.5 Relación empresa sostenible y comunidad</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>


        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />
        <hr className="border-t-8 my-4" />
        {/* TEMA 9 */}
        <h3 id="tema9.3" className="text-2xl font-bold text-black-900 mb-4">9.Conceptos básicos de economía circular como modelo de negocios</h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>9.1 Introducción economía circular negocios</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>9.2 Cómo aplicar economía circular empresa</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>9.3 Principios básicos economía circular negocio</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>9.4 Modelo negocio basado economía circular</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>9.5 Economía circular para emprendedores</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>


        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />

        <hr className="border-t-8 my-4" />
        {/* TEMA 10 */}
        <h3 id="tema10.3" className="text-2xl font-bold text-black-900 mb-4">10.Cómo la sostenibilidad puede ser un diferenciador en el mercado</h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>10.1 Sostenibilidad como ventaja competitiva</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>10.2 Diferenciarse mercado con sostenibilidad</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>10.3 Negocio verde diferenciador mercado </h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>10.4 Usar sostenibilidad como diferenciación</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>10.5 Posicionamiento mercado mediante sostenibilidad</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>


        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />

      </main>
    </div>
  );
}

export default Temacuatro;
