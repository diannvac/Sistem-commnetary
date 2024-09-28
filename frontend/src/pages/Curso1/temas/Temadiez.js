import React, { useState } from 'react';
import { FaBars, FaTimes, FaHome, FaArrowRight, FaArrowLeft } from 'react-icons/fa'; // Importamos los iconos de react-icons


function Temadiez() {
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
                <a href="#tema1.9" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>1.Fundamentos de la legislación ambiental y social: Introducción a las leyes y normativas básicas que afectan a los negocios</a>
              </li>
              <li className="mb-4">
                <a href="#tema2.9" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>2.Importancia de la conformidad legal para las empresas: Cómo la legislación impacta en las operaciones y la reputación empresarial</a>
              </li>
              <li className="mb-4">
                <a href="#tema3.9" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>3.Ejemplos introductorios de legislación relevante: Leyes clave en diferentes regiones y su impacto básico en los negocios</a>
              </li>
              <li className="mb-4">
                <a href="#tema4.9" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>4.Primeros pasos para asegurar la conformidad: Checklist y guías simples para comenzar</a>
              </li>
              <li className="mb-4">
                <a href="#tema5.9" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>5.Recursos básicos y herramientas de aprendizaje: Dónde encontrar información actualizada sobre legislación relevante</a>
              </li>
              <li className="mb-4">
                <a href="#tema6.9" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>6.Casos de estudio sencillos: Empresas que han navegado exitosamente los requisitos legales</a>
              </li>
              <li className="mb-4">
                <a href="#tema7.9" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>7.Comunicación de la conformidad a los stakeholders: Estrategias para informar a clientes, empleados y socios</a>
              </li>
              <li className="mb-4">
                <a href="#tema8.9" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>8.Riesgos legales básicos y cómo evitarlos: Errores comunes y cómo prevenirlos</a>
              </li>
              <li className="mb-4">
                <a href="#tema9.9" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>9.Beneficios de una solida comprensión legal para negocios emergentes: Ventajs competitivas y de mercado</a>
              </li>
              <li className="mb-4">
                <a href="#tema10.9" className="block p-2 rounded hover:bg-blue-700" onClick={closeMenu}>10.Participación en asociaciones y redes empresariales para la actualización legal; importancia del aprendizaje continuo y el apoyo mutuo</a>
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
        <a href="/temanueve" className="block p-2 rounded hover:bg-blue-700 flex items-center">
                        <FaArrowLeft className="mr-2" /> Capítulo 9
                    </a>
          <a href="/temaonce" className="block p-2 rounded hover:bg-blue-700 flex items-center">
            Capítulo 11 <FaArrowRight className="ml-2" /> {/* BEL:AQUI CAMBIA EN EL MENU LA FECHITA DE QUE CAPITULO ES EL QUE SIGUE */}
          </a>
        </div>

      </aside>

      {/* Contenido Principal */}
      <main className="flex-1 p-6 px-12 ml-0 md:ml-80">
        <h1 id="introduccion" className=" text-3xl font-bold text-blue-900 mb-4">INTRODUCCIÓN</h1>
        <h3 className="text-2xl font-bold text-black-900 mb-4">Legislación ambiental y social internacional</h3>{/* AQUI SE PONE EL TITULO DEL CAPITULO */}
        <p className="mb-4 text-justify" >Objetivo: Proporcionar a los empresarios el conocimiento necesario sobre la legislación ambiental y social a nivel internacional, destacando la importancia de la conformidad legal para las operaciones globales y la sostenibilidad empresarial.</p>
        <ul className="list-disc pl-10 mb-4">{/* BEL:ESTO LOS QUITAS, SOLO UL */}
          <li className="mb-2">Legislación clave ambiental para empresas</li>
          <li className="mb-2">Cómo cumplir con legislación social internacional</li>
          <li className="mb-2">Impacto de leyes ambientales en negocios globales</li>
          <li className="mb-2">Recursos para entender legislación internacional</li>
          <li className="mb-2">Adaptarse a cambios en legislación ambiental</li>
         
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
        <h3 id="tema1.9" className="text-2xl font-bold text-black-900 mb-4">1.Fundamentos de la legislación ambiental y social: Introducción a las leyes y normativas básicas que afetan a los negocios</h3> {/* BEL: AQUI CAMBIAS LOS SUBTEMAS */}
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>1.1 Fundamentos legislación ambiental para negocios</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>1.2 Introducción normativas sociales empresariales</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>1.3 Leyes básicas impacto ambiental en empresas</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>1.4 Guía inicial legislación social para negocios</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>1.5 Principios de cumplimiento ambiental y social en empresas</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>



        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />


        <hr className="border-t-8 my-4" /> {/* ESTAS SON LAS LINEAS QUE DIVIDEN LOS TEMAS */}
        {/* TEMA 2 */}
        <h3 id="tema2.9" className="text-2xl font-bold text-black-900 mb-4">2.Importancia de la conformidad legal para las empresas: Cómo la legislación impacta en las operaciones y la reputación empresarial</h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>2.1 Impacto conformidad legal en negocios</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>2.2 Importancia cumplimiento leyes ambientales para empresas</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>2.3 Cómo legislación afecta reputación corporativa</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>2.4 Beneficios cumplimiento normativas socailes para empresas</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>2.5 Relación entre legislación y operaciones empresariales</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>


        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />


        <hr className="border-t-8 my-4" />
        {/* TEMA 3 */}
        <h3 id="tema3.9" className="text-2xl font-bold text-black-900 mb-4">3.Ejemplos introductorios de legislación relevante: Leyes clave en diferentes regiones y su impacto básico en los negocios</h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        <h4 className='font-bold'>3.1 Leyes ambientales clave para negocios internacionales</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>3.2 Ejemplos legislación social afectando empresas</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>3.3 Impacto normativas regionales en operaciones empresariales</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>3.4 Guía leyes ambientales por región para negocios</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>3.5 Introducción a legislación relevante para empresas globales</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>


        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />


        <hr className="border-t-8 my-4" />
        {/* TEMA 4 */}
        <h3 id="tema4.9" className="text-2xl font-bold text-black-900 mb-4">4.Primeros pasos para asegurar la conformidad: Checklist y guías simples para comenzar</h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>4.1 Checklist básico para cumplimiento legal ambiental </h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>4.2 Guías iniciales conformidad legislación social </h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>4.3 Primeros pasos hacia un cumplimiento normativo en negocios</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>4.4 Cómo empezar con conformidad legal para nuevas empresas</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>4.5 Pasos iniciales para asegurar cumplimiento de legislación ambiental</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>


        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />


        <hr className="border-t-8 my-4" />
        {/* TEMA 5 */}
        <h3 id="tema5.9" className="text-2xl font-bold text-black-900 mb-4">5.Recursos básicos y herramientas de aprendizaje: Dónde encontrar información actualizada sobre legislación relevante</h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>5.1 Recursos aprendizaje legislación ambiental para empresas</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>5.2 Herramientas online actualización legal social</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>5.3 Dónde encontrar información legislación empresarial</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>5.4 Guías y recursos para cumplimiento normativo amnbiental</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>5.5 Plataformas educativas sobre leyes y normativas empresariales</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>


        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />
        <hr className="border-t-8 my-4" />

        {/* TEMA 6 */}
        <h3 id="tema6.9" className="text-2xl font-bold text-black-900 mb-4">6.Casos de estudio sencillos: Empresas que han navegado exitosamente los requisitos legales</h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>6.1 Casos éxito cumplimiento legal empresas</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>6.2 Ejemplos negocios navegando legislación ambiental</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>6.3 Historias empresas superando desafíos legales</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>6.4 Empresas ejemplares en conformidad con legislación social</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>6.5 Lecciones de cumplimiento legal de empresas globales</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>


        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />

        <hr className="border-t-8 my-4" />
        {/* TEMA 7 */}
        <h3 id="tema7.9" className="text-2xl font-bold text-black-900 mb-4">7.Comunicación de la conformidad a los stakeholders: Estrategias para informar a clientes, empleados y socios</h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>7.1 Estrategias comunicación conformidad legal a stakeholders</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>7.2 Cómo infromar cumplimiento ambiental a clientes</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>7.3 Comunicar esfuerzos legales a empleados y socios </h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>7.4 Reportar conformidad con legislación a interesados</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>7.5 Mejores prácticas para divulgar cumplimiento normativo</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>


        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />

        <hr className="border-t-8 my-4" />
        {/* TEMA 8 */}
        <h3 id="tema8.8" className="text-2xl font-bold text-black-900 mb-4"> 8.Riesgos legales básicos y cómo evitarlos: Errores comunes y cómo prevenirlos</h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>8.1 Prevención riesgos legales en negocios</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>8.2 Errores comunes legislación ambiental y soluciones</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>8.3 Cómo evitar fallos en cumplimiento normativo social</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>8.4 Guía para prevenir riesgos legales para empresas</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>8.5 Evitar problemas legales en operaciones internacionales</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>


        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />
        <hr className="border-t-8 my-4" />
        {/* TEMA 9 */}
        <h3 id="tema9.9" className="text-2xl font-bold text-black-900 mb-4">9.Beneficios de una sólida comprensión legal para negocios emergentes: Ventajas competitivas y de mercado</h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>9.1 Ventajas comprensión legal para startups</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>9.2 Beneficios conocimiento leyes ambientales para pymes</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>9.3 Comprensión legislación como ventaja competitiva</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>9.4 Impacto conocimiento legal en crecimiento empresarial</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>9.5 Cómo legislación social beneficia a negocios nuevos</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>


        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />

        <hr className="border-t-8 my-4" />
        {/* TEMA 10 */}
        <h3 id="tema10.9" className="text-2xl font-bold text-black-900 mb-4">10.Particiáción en asociaciones y redes empresariales para la actualización legal: Importancia del aprendizaje continuo y el apoyo mutuo</h3>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>10.1 Asociaciones para actualización legal en negocios </h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>10.2 Redes empresariales apoyo cumplimiento normativo</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>10.3 Importancia aprendizaje continuo legislación para empresas</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>10.4 Unirse a grupos para mantenerse al día en leyes ambientales </h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

        <h4 className='font-bold'>10.5 Beneficios de redes de apoyo legal para negocios internacionales</h4>
        <p className="mb-4 text-justify" >Aquí va la información detallada sobre el tema seleccionado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>


        <img src="https://via.placeholder.com/400" alt="Descripción de la imagen" className="w-full md:w-1/2 lg:w-1/3 rounded shadow" />

      </main>
    </div>
  );
}

export default Temadiez;
