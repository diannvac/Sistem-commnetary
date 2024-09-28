import React, { useState } from 'react';
import { FaBars, FaTimes, FaHome, FaArrowRight, FaArrowLeft } from 'react-icons/fa'; // Importamos los iconos de react-icons


function TematresM() {
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
                <a  href="#tema01.3" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>1.Análisis de la cadena de valor en modelos sostenibles</a>{/* BEL:CAMBIA CADA UNO DE LOS TEMAS SEGUN CORRESPONDA */}
              </li>
              <li className="mb-4">
                <a href="#tema02.3" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>2.Implementación de prácticas de economía circular</a>
              </li>
              <li className="mb-4">
                <a  href="#tema03.3" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>3.Herramientas y marcos para evaluar la sostenibilidad</a>
              </li>
              <li className="mb-4">
                <a  href="#tema04.3" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>4.Estrategias de marketing para modelos de negocio sostenibles</a>
              </li>
              <li className="mb-4">
                <a  href="#tema05.3" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>5.Gestión de recursos y optimización de la eficiencia</a>
              </li>
              <li className="mb-4">
                <a  href="#tema06.3" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>6.Casos de estudio de negocios que han escalado sosteniblemente</a>
              </li>
              <li className="mb-4">
                <a  href="#tema07.3" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>7.Innovaciones tecnológicas para la sostenibilidad</a>
              </li>
              <li className="mb-4">
                <a  href="#tema08.3" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>8.Financiamiento y apoyo para negocios sostenibles</a>
              </li>
              <li className="mb-4">
                <a  href="#tema09.3" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>9.Desafíos al escalar negocios sostenibles y cómo enfrentarlos</a>
              </li>
              <li className="mb-4">
                <a  href="#tema010.3" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>10.Integración de la sostenibilidad en la cultura empresarial</a>
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
        <a href="/temadosM" className="block p-2 rounded hover:bg-blue-700 flex items-center">
                        <FaArrowLeft className="mr-2" /> Capítulo 2
                    </a>
          <a href="/temacuatroM" className="block p-2 rounded hover:bg-blue-700 flex items-center">
            Capítulo 4 <FaArrowRight className="ml-2" /> {/* BEL:AQUI CAMBIA EN EL MENU LA FECHITA DE QUE CAPITULO ES EL QUE SIGUE */}
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
        <h3 id="tema01.3" className="text-2xl font-bold text-black-900 mb-4">1.Análisis de la cadena de valor en modelos sostenibles</h3> {/* BEL: AQUI CAMBIAS LOS SUBTEMAS */}
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        
          <h4 className='font-bold'>1.1 Evaluar cadena de valor en sostenibilidad</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>1.2 Análisis cadena valor negocios verdes</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>1.3 Optimización cadena de valor sostenible</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>1.4 Cómo analizar sostenibilidad en cadena de valor</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>1.5 Principios de cadena de valor eco-amigable</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

       
       
        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />


        <hr className="border-t-8 my-4" /> {/* ESTAS SON LAS LINEAS QUE DIVIDEN LOS TEMAS */}
        {/* TEMA 2 */}
        <h3 id="tema02.3" className="text-2xl font-bold text-black-900 mb-4">2.Implementación de prácticas de economía circular</h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
       
          <h4 className='font-bold'>2.1 Introducir economía circular en empresas</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>2.2 Guía práctica economía circular negocios</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>2.3 Cómo empezar con economía circular</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>2.4 Prácticas efectivas economía circular</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>2.5 Transformación hacia economía circular pasos</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          
        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />
       
       
        <hr className="border-t-8 my-4" />
        {/* TEMA 3 */}
        <h3 id="tema03.3" className="text-2xl font-bold text-black-900 mb-4">3.Herramientas y marcos para evaluar la sostenibilidad</h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        <h4 className='font-bold'>3.1 Evaluación sostenibilidad herramientas empresariales</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>3.2 Marcos de trabajo sostenibilidad corporativa</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>3.3 Instrumentos medición impacto sostenible</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>3.4 Software evaluación prácticas sostenibles</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>3.5 Herramientas clave para análisis sostenibilidad</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          
        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />

       
        <hr className="border-t-8 my-4" />
        {/* TEMA 4 */}
        <h3 id="tema04.3" className="text-2xl font-bold text-black-900 mb-4">4.Estrategias de marketing para modelos de negocio sostenibles</h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        
        <h4 className='font-bold'>4.1 Marketing verde estrategias efectivas</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>4.2 Promover negocios sostenibles técnicas  </h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>4.3 Estrategias marketing eco-friendly </h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>4.4 Cómo mercadear tu negocio sostenible </h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>4.5 Marketing digital para sostenibilidad</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          
        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />

       
        <hr className="border-t-8 my-4" />
        {/* TEMA 5 */}
        <h3 id="tema05.3" className="text-2xl font-bold text-black-900 mb-4">5.Gestión de recursos y optimización de la eficiencia</h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        
        <h4 className='font-bold'>5.1 Mejorar eficiencia en modelos sostenibles</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>5.2 Gestión recursos empresariales sostenibles</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>5.3 Optimización recursos negocios verdes</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>5.4 Estrategias para una gestión eficiente de recursos</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>5.5 Aumentar eficiencia operativa en sostenibilidad</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          
        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />
        <hr className="border-t-8 my-4" />
        
        {/* TEMA 6 */}
        <h3 id="tema06.3" className="text-2xl font-bold text-black-900 mb-4">6.Casos de estudio de negocios que han escalado sosteniblemente</h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        
        <h4 className='font-bold'>6.1 Casos éxito empresas sostenibles crecimiento</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>6.2 Historias empresas verdes escalado exitoso</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>6.3 Cómo escalar tu negocio de manera sostenible</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>6.4 Lecciones de negocios sostenibles que crecieron</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>6.5 Escalabilidad en el mundo empresarial sostenible</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          
          <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />

          <hr className="border-t-8 my-4" />
        {/* TEMA 7 */}
        <h3 id="tema07.3" className="text-2xl font-bold text-black-900 mb-4">7.Innovaciones tecnológicas para la sostenibilidad</h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        
        <h4 className='font-bold'>7.1 Tecnología verde para negocios</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>7.2 Innovaciones sostenibles en el sector empresarial</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>7.3 Soluciones tech para sostenibilidad</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>7.4 Avances tecnológicos en sostenibilidad</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>7.5 Tecnologías emergentes negocios verdes</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          
        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />

        <hr className="border-t-8 my-4" />
        {/* TEMA 8 */}
        <h3 id="tema08.3" className="text-2xl font-bold text-black-900 mb-4">8.Financiamiento y apoyo para negocios sostenibles</h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        
        <h4 className='font-bold'>8.1 Fuentes de financiamiento para empresas verdes</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>8.2 Cómo financiar tu startup sostenible</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>8.3 Apoyo financiero negocios eco-amigables</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>8.4 ubvenciones para proyectos sostenibles</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>8.5 Inversión en sostenibilidad empresarial</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          
        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />
        <hr className="border-t-8 my-4" />
        {/* TEMA 9 */}
        <h3 id="tema09.3" className="text-2xl font-bold text-black-900 mb-4">9. Desafíos al escalar negocios sostenibles y cómo enfrentarlos</h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        
        <h4 className='font-bold'>9.1 Superar obstáculos en crecimiento sostenible</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>9.2 Retos al expandir negocios eco-amigables</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>9.3 Soluciones problemas escalabilidad sostenible</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>9.4 Cómo manejar crecimiento en empresas verdes</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>9.5 Estrategias para escalar sosteniblemente</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          
        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />

        <hr className="border-t-8 my-4" />
        {/* TEMA 10 */}
        <h3 id="tema010.3" className="text-2xl font-bold text-black-900 mb-4">10. Integración de la sostenibilidad en la cultura empresarial</h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        
        <h4 className='font-bold'>10.1 Crear cultura corporativa sostenible</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>10.2 Incorporar sostenibilidad en valores empresariales</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>10.3 Cultura de trabajo enfocada en verde</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>10.4 Estrategias para una cultura empresarial eco-friendly</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          <h4 className='font-bold'>10.5 Fomentar sostenibilidad como parte de la cultura corporativa</h4>
          <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

          
        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />

      </main>
    </div>
  );
}

export default TematresM;