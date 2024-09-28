import React, { useState } from 'react';
import { FaBars, FaTimes, FaHome, FaArrowRight, FaArrowLeft } from 'react-icons/fa'; // Importamos los iconos de react-icons


function Temados() {
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
                <a href="#tema1.1" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>1.Definición de triple resultado y su relevancia</a>{/* BEL:CAMBIA CADA UNO DE LOS TEMAS SEGUN CORRESPONDA */}
              </li>
              <li className="mb-4">
                <a href="#tema2.1" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>2.Ejemplos introductorios de empresas que aplican el triple resultado</a>
              </li>
              <li className="mb-4">
                <a href="#tema3.1" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>3.Ventajas básicas del triple resultado para negocios emergentes</a>
              </li>
              <li className="mb-4">
                <a href="#tema4.1" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>4.Como empezar a integrar el triple resultado en pequeñas decisiones empresariales</a>
              </li>
              <li className="mb-4">
                <a href="#tema5.1" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>5.Impacto del triple reultado en la percepción de los clientes</a>
              </li>
              <li className="mb-4">
                <a href="#tema6.1" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>6.Pasos iniciales para medir el triple resultado</a>
              </li>
              <li className="mb-4">
                <a href="#tema7.1" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>7.Relación entre triple resultado y competitividad en el mercado</a>
              </li>
              <li className="mb-4">
                <a href="#tema8.1" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>8.Historias motivadoras de emprendedores sostenibles</a>
              </li>
              <li className="mb-4">
                <a href="#tema9.1" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>9.Primeras herramientas de evaluación del triple resultado</a>
              </li>
              <li className="mb-4">
                <a href="#tema10.1" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>10.Estrategias simples para comunicar compromisos sostenibles a los stakeholders</a>
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
        <a href="/temauno" className="block p-2 rounded hover:bg-blue-700 flex items-center">
                        <FaArrowLeft className="mr-2" /> Capítulo 1
                    </a>
          <a href="/tematres" className="block p-2 rounded hover:bg-blue-700 flex items-center">
            Capítulo 3 <FaArrowRight className="ml-2" /> {/* BEL:AQUI CAMBIA EN EL MENU LA FECHITA DE QUE CAPITULO ES EL QUE SIGUE */}
          </a>
        </div>

      </aside>

      {/* Contenido Principal */}
      <main className="flex-1 p-6 px-12 ml-0 md:ml-80">
        <h1 id="introduccion" className=" text-3xl font-bold text-blue-900 mb-4">INTRODUCCIÓN</h1>
        <h3 className="text-2xl font-bold text-black-900 mb-4">Definición de triple resultado y su relevancia</h3>{/* AQUI SE PONE EL TITULO DEL CAPITULO */}
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
      
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
        <h3 id="tema1.1" className="text-2xl font-bold text-black-900 mb-4">1.Definición de triple resultado y su relevancia</h3> {/* BEL: AQUI CAMBIAS LOS SUBTEMAS */}
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>1.1 Qué significa triple resultado</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>1.2 Triple resultado definición y por qué importa </h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>1.3 Fundamentos del triple resultado en sostenibilidad </h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>1.4 Explicación del triple resultado para empresas</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>1.5 Importancia del triple resultado en negocios</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>



        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />


        <hr className="border-t-8 my-4" /> {/* ESTAS SON LAS LINEAS QUE DIVIDEN LOS TEMAS */}
        {/* TEMA 2 */}
        <h3 id="tema2.1" className="text-2xl font-bold text-black-900 mb-4">2.Ejemplos introductorios de empresas que aplican el triple resultado</h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>2.1 Empresas modelo en triple resultado</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>2.2 Cómo aplican empresas el triple resultado</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>2.3 Ejemplos reales de triple resultado en acción</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>2.4 Casos de estudio sobre triple resultado en negocios</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>2.5 Empresas líderes en sostenibilidad triple resultado</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>


        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />


        <hr className="border-t-8 my-4" />
        {/* TEMA 3 */}
        <h3 id="tema3.1" className="text-2xl font-bold text-black-900 mb-4">3.Ventajas básicas de triple resultado para negocios emergentes</h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        <h4 className='font-bold'>3.1 Beneficios del triple resultado paraa startups</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>3.2 Triple resultado ventajas para negocios nuevos</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>3.3 Cómo ayuda el triple resultado a empresas emergentes</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>3.4 Por qué el triple resultado es clave para pymes</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>3.5 Impacto del triple resultado en el crecimiento empresarial</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>


        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />


        <hr className="border-t-8 my-4" />
        {/* TEMA 4 */}
        <h3 id="tema4.1" className="text-2xl font-bold text-black-900 mb-4">4.Cómo empezar a integrar el triple resultado en pequeñas decisiones empresariales</h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>4.1 Introducir triple resultado en decisiones de negocio</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>4.2 Primeros pasos hacia adoptar el triple resultado</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>4.3 Guía para implementar el triple resultado en pymes</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>4.4 Cómo comenzar con el triple resultado</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>4.5 Incorporando el triple resultado en estrategias empresariales</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>


        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />


        <hr className="border-t-8 my-4" />
        {/* TEMA 5 */}
        <h3 id="tema5.1" className="text-2xl font-bold text-black-900 mb-4">5.Impacto del triple resultado en la percepción de los clientes</h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>5.1 Triple resultado y su efecto en la imagen de marca</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>5.2 Cómo el triple resultado mejora la percepción del cliente </h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>5.3 Relación entre triple resultado y satisfacción al cliente</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>5.4 Triple resultado influencia en la lealtad del cliente</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>5.5 Percepción de clientes sobre empresas con triple resultado</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>


        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />
        <hr className="border-t-8 my-4" />

        {/* TEMA 6 */}
        <h3 id="tema6.1" className="text-2xl font-bold text-black-900 mb-4">6.Pasos iniciales para medir el triple resultado </h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>6.1 Medir el triple resultado: una guía inicial</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>6.2 Herramientas para evaluar el triple resultado</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>6.3 Como empezar a medir el impacto social, ambiental y económico</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>6.4 Fundamentos para la medición del triple resultado</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>6.5 Primeros pasos en la evaluación del triple resultado</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>


        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />

        <hr className="border-t-8 my-4" />
        {/* TEMA 7 */}
        <h3 id="tema7.1" className="text-2xl font-bold text-black-900 mb-4">7.Relación entre triple resultado y competitividad en el mercado</h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>7.1 Triple resultado como ventaja competitiva</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>7.2 Cómo el triple resultado mejora la posición en el mercado</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>7.3 Relación entre sostenibilidad y competitividad empresarial</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>7.4 Triple resultado y su impacto en la competitividad</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>7.5 Sostenibilidad y ventaja competitiva en el mercado</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>


        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />

        <hr className="border-t-8 my-4" />
        {/* TEMA 8 */}
        <h3 id="tema8.1" className="text-2xl font-bold text-black-900 mb-4">8.Historias motivadoras de emprendedores sostenibles</h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>8.1 HIstorias inspiradoras de sostenibilidad empresarial</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>8.2 Emprendedores que cambiaron el juego con el triple resultado</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>8.3 Casos exitosos de negocios sostenibles</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>8.4 Emprendimientos sostenibles historias de éxito</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>8.5 Innovadores en sostenibilidad: historias para inspirar</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>


        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />
        <hr className="border-t-8 my-4" />
        {/* TEMA 9 */}
        <h3 id="tema9.1" className="text-2xl font-bold text-black-900 mb-4">9.Primeras herramientas de evaluación del triple resultado</h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>9.1 Herramientas básicas para medir sostenibilidad</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>9.2 Software y apps para evaluar el triple resultado</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>9.3 Instrumentos para medición de impacto triple resultado</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>9.4 Tecnologías para evaluación de sostenibilidad</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>9.5 Recursos iniciales para análisis del triple resultado</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>


        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />

        <hr className="border-t-8 my-4" />
        {/* TEMA 10 */}
        <h3 id="tema10.1" className="text-2xl font-bold text-black-900 mb-4">10.Estrategias simples para comunicar compromisos sostenibles a los stakeholders</h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>10.1 Comunicar sostenibilidad a interesados efectivamente</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>10.2 Estrategias de comunicación para empresas sostenibles</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>10.3 Cómo informar sobre compromisos de triple resultado</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>10.4 Mejores prácticas para divulgar sostenibilidad</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>10.5 Consejos para comunicar esfuerzos de triple resultado</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>


        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />

      </main>
    </div>
  );
}

export default Temados;
