import React from 'react';


const Index = () => {
  return (

    <main className='content'>

      {/* SEGUNDA SECCION VENTAJAS*/}
      <section id="nosotros" className="relative flex flex-col md:flex-row items-center h-auto md:h-screen bg-blue-500 text-white my-10">
        <div className="relative w-3/4 md:w-1/2 h-64 md:h-full bg-cover bg-center bg-[url('/public/imagenes/ventajasmaestria.jpeg')] mx-auto my-4"></div>
        <div className="relative z-10 w-full md:w-2/5 ml-auto md:pr-16 p-6 md:p-0 text-center flex flex-col items-center">
          <h2 className="font-bold text-3xl mb-5 drop-shadow-[1px_1px_1px_rgba(0,0,0,0.5)]">Nuestras Ventajas</h2>
          <div className="grid gap-10">
            <div className="p-4 bg-gray-800 bg-opacity-75 rounded-lg">
              <h2 className="font-bold mb-2">Adaptación a la evolución del mercado</h2>
              <p>Este programa te prepara para adaptarte rápidamente a los cambios tecnológicos y del mercado, asegurando que tus habilidades y conocimientos permanezcan relevantes en un entorno empresarial en constante evolución.</p>
            </div>
            <div className="p-4 bg-gray-800 bg-opacity-75 rounded-lg">
              <h2 className="font-bold mb-2">Amplias oportunidades de carrera</h2>
              <p>Abre puertas a roles diversos en gestión de proyectos digitales, marketing digital, y estrategia digital.</p>
            </div>
            <div className="p-4 bg-gray-800 bg-opacity-75 rounded-lg">
              <h2 className="font-bold mb-2">Ventaja competitiva</h2>
              <p>Diferénciate en el mercado laboral con habilidades avanzadas y experiencia en el ámbito digital.</p>
            </div>
          </div>
        </div>
      </section>




      {/* TERCERA SECCIÓN PLAN EDUCATIVO */}
      <section id="oferta" className="flex justify-center items-center py-10 bg-gray-100 my-10" >
        <div className="flex flex-col lg:flex-row items-center max-w-7xl mx-auto px-4">
          <div className="lg:w-1/2 pr-8">
            <div className="text-center lg:text-left mb-10">
              <h2 className="font-bold text-3xl mb-4 text-black drop-shadow-[1px_1px_1px_rgba(0,0,0,0.5)]">Conoce nuestra oferta educativa</h2>
              <p className="text-lg text-black text-justify">En la era de la transformación digital, la Maestría en Negocios Digitales se presenta como una oportunidad única para adquirir las habilidades y conocimientos necesarios para liderar en el dinámico mundo empresarial actual. Este programa está diseñado para profesionales que buscan estar a la vanguardia de las tecnologías emergentes y las estrategias digitales.
                <p>Nuestra maestría ofrece una combinación de teoría y práctica, brindando una comprensión profunda de la gestión de proyectos digitales, el marketing digital, la analítica de datos y la innovación tecnológica. A través de un plan de estudios actualizado y relevante, los estudiantes aprenderán a desarrollar e implementar estrategias digitales efectivas, gestionar equipos y proyectos, y utilizar herramientas analíticas para tomar decisiones informadas.</p>
              </p>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img src={`${process.env.PUBLIC_URL}/imagenes/ofertaeducativa.jpeg`} alt="Oferta Educativa" className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* CUARTA SECCIÓN TEMARIO*/}
      <section id="servicios" className="py-10 bg-blue-500 text-white my-10">
        <div className="text-center mb-10">
          <h2 className="font-bold text-3xl drop-shadow-[1px_1px_1px_rgba(0,0,0,0.5)]">DOMINA Y CONVIERTETE EN UN EXPERTO EN:</h2>
        </div>

        {/* primera tarjeta */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 ">
          <div className="  relative text-center overflow-hidden rounded-lg shadow-xl  transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl">
            <div className="absolute inset-0 z-0 ">
              <img src="/imagenes/sostenible.jpeg" alt="Fundamentos del Emprendimiento Sostenible" className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="relative z-10 p-6">
              <h2 className="font-bold mb-4 text-white text-2xl">Fundamentos del Emprendimiento Sostenible</h2>
              <button className="bg-blue-700 text-white py-2 px-4 rounded-full hover:bg-blue-800"><a href="/principiante" className="button-link">Saber más</a></button>
            </div>
          </div>

          {/* segunda tarjeta */}
          <div className="relative text-center overflow-hidden rounded-lg shadow-xl  transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl">
            <div className="absolute inset-0 z-0">
              <img src="/imagenes/mundodigital.jpeg" alt="Globalización y Negocios Internacionales" className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="relative z-10 p-6">
              <h2 className="font-bold mb-4 text-white text-2xl">Globalización y Negocios Internacionales</h2>
              <button className="bg-blue-700 text-white py-2 px-4 rounded-full hover:bg-blue-800"><a href="/principiante2" className="button-link">Saber más</a></button>
            </div>
          </div>
          {/* tercer tarjeta */}

          <div className="relative text-center overflow-hidden rounded-lg shadow-lg relative text-center overflow-hidden rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl">
            <div className="absolute inset-0 z-0">
              <img src="/imagenes/teamrendimiento.jpeg" alt="Formación y Gestión de Equipos de Alto Rendimiento" className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="relative z-10 p-6">
              <h2 className="font-bold mb-4 text-white text-2xl">Formación y Gestión de Equipos de Alto Rendimiento</h2>
              <button className="bg-blue-700 text-white py-2 px-4 rounded-full hover:bg-blue-800"><a href="/principiante3" className="button-link">Saber más</a></button>
            </div>
          </div>

          {/*cuarta tarjeta */}
          <div className="relative text-center overflow-hidden rounded-lg shadow-lg relative text-center overflow-hidden rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl">
            <div className="absolute inset-0 z-0">
              <img src="/imagenes/legal.jpeg" alt="Aspectos Legales y Éticos Internacionales" className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="relative z-10 p-6">
              <h2 className="font-bold mb-4 text-white text-2xl">Aspectos Legales y Éticos Internacionales</h2>
              <button className="bg-blue-700 text-white py-2 px-4 rounded-full hover:bg-blue-800"><a href="/principiante4" className="button-link">Saber más</a></button>
            </div>
          </div>

          {/* quinta tarjeta */}
          <div className="relative text-center overflow-hidden rounded-lg shadow-lg relative text-center overflow-hidden rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl">
            <div className="absolute inset-0 z-0">
              <img src="/imagenes/expansioninternacional.jpeg" alt="Finanzas y Administración para la Expansión Internacional" className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="relative z-10 p-6">
              <h2 className="font-bold mb-4 text-white text-2xl">Finanzas y Administración para la Expansión Internacional</h2>
              <button className="bg-blue-700 text-white py-2 px-4 rounded-full hover:bg-blue-800"><a href="/principiante5" className="button-link">Saber más</a></button>
            </div>
          </div>

          {/* sexta tarjeta */}
          <div className="relative text-center overflow-hidden rounded-lg shadow-lg relative text-center overflow-hidden rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl">
            <div className="absolute inset-0 z-0">
              <img src="/imagenes/negociacion.jpeg" alt="Negociación y Resolución de Conflictos" className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="relative z-10 p-6">
              <h2 className="font-bold mb-4 text-white text-2xl">Negociación y Resolución de Conflictos</h2>
              <button className="bg-blue-700 text-white py-2 px-4 rounded-full hover:bg-blue-800"><a href="/principiante6" className="button-link">Saber más</a></button>
            </div>
          </div>

          {/* septima tarjeta */}
          <div className="relative text-center overflow-hidden rounded-lg shadow-lg relative text-center overflow-hidden rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl">
            <div className="absolute inset-0 z-0">
              <img src="/imagenes/liderazgo.jpeg" alt=" Desarrollo Personal y Liderazgo" className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="relative z-10 p-6">
              <h2 className="font-bold mb-4 text-white text-2xl"> Desarrollo Personal y Liderazgo </h2>
              <button className="bg-blue-700 text-white py-2 px-4 rounded-full hover:bg-blue-800"><a href="/principiante7" className="button-link">Saber más</a></button>
            </div>
          </div>

          {/* octava tarjeta */}
          <div className="relative text-center overflow-hidden rounded-lg shadow-lg relative text-center overflow-hidden rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl">
            <div className="absolute inset-0 z-0">
              <img src="/imagenes/desarrolloproductos.jpeg" alt="Innovación y Desarrollo de Productos" className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="relative z-10 p-6">
              <h2 className="font-bold mb-4 text-white text-2xl"> Innovación y Desarrollo de Productos</h2>
              <button className="bg-blue-700 text-white py-2 px-4 rounded-full hover:bg-blue-800"><a href="/principiante8" className="button-link">Saber más</a></button>
            </div>
          </div>

          {/* 9 tarjeta */}
          <div className="relative text-center overflow-hidden rounded-lg shadow-lg relative text-center overflow-hidden rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl">
            <div className="absolute inset-0 z-0">
              <img src="/imagenes/tarjetas.jpeg" alt="Tecnologías de la Información y Digitalización" className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="relative z-10 p-6">
              <h2 className="font-bold mb-4 text-white text-2xl"> Tecnologías de la Información y Digitalización</h2>
              <button className="bg-blue-700 text-white py-2 px-4 rounded-full hover:bg-blue-800"><a href="principiante9" className="button-link">Saber más</a></button>
            </div>
          </div>

          {/* 10 tarjeta */}
          <div className="relative text-center overflow-hidden rounded-lg shadow-lg relative text-center overflow-hidden rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl">
            <div className="absolute inset-0 z-0">
              <img src="/imagenes/marketindigital.jpeg" alt="Marketing y Comunicación Global" className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="relative z-10 p-6">
              <h2 className="font-bold mb-4 text-white text-2xl">Marketing y Comunicación Global</h2>
              <button className="bg-blue-700 text-white py-2 px-4 rounded-full hover:bg-blue-800"><a href="/principiante10" className="button-link">Saber más</a></button>
            </div>
          </div>

          {/* 11 tarjeta */}
          <div className="relative text-center overflow-hidden rounded-lg shadow-lg relative text-center overflow-hidden rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl">
            <div className="absolute inset-0 z-0">
              <img src="/imagenes/estrategiacorporativa.jpeg" alt="Estrategia Corporativa y Planificación " className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="relative z-10 p-6">
              <h2 className="font-bold mb-4 text-white text-2xl">Estrategia Corporativa y Planificación </h2>
              <button className="bg-blue-700 text-white py-2 px-4 rounded-full hover:bg-blue-800"><a href="/principiante11" className="button-link">Saber más</a></button>
            </div>
          </div>

          {/* 12 tarjeta */}
          <div className="relative text-center overflow-hidden rounded-lg shadow-lg relative text-center overflow-hidden rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl">
            <div className="absolute inset-0 z-0">
              <img src="/imagenes/culturaempresarial.jpeg" alt="Cultura Empresarial y Gestión del Talento" className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="relative z-10 p-6">
              <h2 className="font-bold mb-4 text-white text-2xl">Cultura Empresarial y Gestión del Talento</h2>
              <button className="bg-blue-700 text-white py-2 px-4 rounded-full hover:bg-blue-800"><a href="/principiante12" className="button-link">Saber más</a></button>
            </div>
          </div>

          {/* 13 tarjeta */}
          <div className="relative text-center overflow-hidden rounded-lg shadow-lg relative text-center overflow-hidden rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl">
            <div className="absolute inset-0 z-0">
              <img src="/imagenes/responsabilidadyetica.jpeg" alt="Responsabilidad Social Empresarial(RSE) y Ética" className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="relative z-10 p-6">
              <h2 className="font-bold mb-4 text-white text-2xl">Responsabilidad Social Empresarial(RSE) y Ética</h2>
              <button className="bg-blue-700 text-white py-2 px-4 rounded-full hover:bg-blue-800"><a href="/principiante13" className="button-link">Saber más</a></button>
            </div>
          </div>

          {/* 14 tarjeta */}
          <div className="relative text-center overflow-hidden rounded-lg shadow-lg relative text-center overflow-hidden rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl">
            <div className="absolute inset-0 z-0">
              <img src="/imagenes/gestionriesgos.jpeg" alt="Gestión de Riesgos y Continuidad del Negocio" className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="relative z-10 p-6">
              <h2 className="font-bold mb-4 text-white text-2xl">Gestión de Riesgos y Continuidad del Negocio</h2>
              <button className="bg-blue-700 text-white py-2 px-4 rounded-full hover:bg-blue-800"><a href="/principiante14" className="button-link">Saber más</a></button>
            </div>
          </div>

          {/* 15 tarjeta */}
          <div className="relative text-center overflow-hidden rounded-lg shadow-lg relative text-center overflow-hidden rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl">
            <div className="absolute inset-0 z-0">
              <img src="/imagenes/logistica.jpeg" alt="Logística Internacional y Cadena de Suministros" className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="relative z-10 p-6">
              <h2 className="font-bold mb-4 text-white text-2xl">Logística Internacional y Cadena de Suministros</h2>
              <button className="bg-blue-700 text-white py-2 px-4 rounded-full hover:bg-blue-800"><a href="/principiante15" className="button-link">Saber más</a></button>
            </div>
          </div>

          {/* 16 tarjeta */}
          <div className="relative text-center overflow-hidden rounded-lg shadow-lg relative text-center overflow-hidden rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl">
            <div className="absolute inset-0 z-0">
              <img src="/imagenes/economiaglobal.jpeg" alt="Comercio Internacional y Economía Global" className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="relative z-10 p-6">
              <h2 className="font-bold mb-4 text-white text-2xl">Comercio Internacional y Economía Global</h2>
              <button className="bg-blue-700 text-white py-2 px-4 rounded-full hover:bg-blue-800"><a href="/principiante16" className="button-link">Saber más</a></button>
            </div>
          </div>

          {/* 17 tarjeta */}
          <div className="relative text-center overflow-hidden rounded-lg shadow-lg relative text-center overflow-hidden rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl">
            <div className="absolute inset-0 z-0">
              <img src="/imagenes/liderazgoglobal.jpeg" alt="Liderazgo Global y Desarrollo de Equipos Internacionales" className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="relative z-10 p-6">
              <h2 className="font-bold mb-4 text-white text-2xl">Liderazgo Global y Desarrollo de Equipos Internacionales</h2>
              <button className="bg-blue-700 text-white py-2 px-4 rounded-full hover:bg-blue-800"><a href="/principiante17" className="button-link">Saber más</a></button>
            </div>
          </div>

          {/* 18 tarjeta */}
          <div className="relative text-center overflow-hidden rounded-lg shadow-lg relative text-center overflow-hidden rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl">
            <div className="absolute inset-0 z-0">
              <img src="/imagenes/culturalbussines.jpeg" alt="Comunicación Intercultural y Negocios" className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="relative z-10 p-6">
              <h2 className="font-bold mb-4 text-white text-2xl">Comunicación Intercultural y Negocios</h2>
              <button className="bg-blue-700 text-white py-2 px-4 rounded-full hover:bg-blue-800"><a href="/principiante18" className="button-link">Saber más</a></button>
            </div>
          </div>

          {/* 19 tarjeta */}
          <div className="relative text-center overflow-hidden rounded-lg shadow-lg relative text-center overflow-hidden rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl">
            <div className="absolute inset-0 z-0">
              <img src="/imagenes/emprendimientosocial.jpeg" alt="Emprendimiento e Innovación Social" className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="relative z-10 p-6">
              <h2 className="font-bold mb-4 text-white text-2xl">Emprendimiento e Innovación Social</h2>
              <button className="bg-blue-700 text-white py-2 px-4 rounded-full hover:bg-blue-800"><a href="/principiante19" className="button-link">Saber más</a></button>
            </div>
          </div>

          {/* 20 tarjeta */}
          <div className="relative text-center overflow-hidden rounded-lg shadow-lg relative text-center overflow-hidden rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl">
            <div className="absolute inset-0 z-0">
              <img src="/imagenes/aprendizajecontinuo.jpeg" alt="Desarrollo Profesional y Aprendizaje Continuo" className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="relative z-10 p-6">
              <h2 className="font-bold mb-4 text-white text-2xl">Desarrollo Profesional y Aprendizaje Continuo</h2>
              <button className="bg-blue-700 text-white py-2 px-4 rounded-full hover:bg-blue-800"><a href="/principiante20" className="button-link">Saber más</a></button>
            </div>
          </div>

          {/* 21 tarjeta */}
          <div className="relative text-center overflow-hidden rounded-lg shadow-lg relative text-center overflow-hidden rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl">
            <div className="absolute inset-0 z-0">
              <img src="/imagenes/psicologia.jpeg" alt="Filosofía, Psicología y Psicoanálisis en el Entorno Empresarial" className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="relative z-10 p-6">
              <h2 className="font-bold mb-4 text-white text-2xl">Filosofía, Psicología y Psicoanálisis en el Entorno Empresarial</h2>
              <button className="bg-blue-700 text-white py-2 px-4 rounded-full hover:bg-blue-800"><a href="/principiante21" className="button-link">Saber más</a></button>
            </div>
          </div>
          {/* APARTIR DE AQUI SE AGREGARON 9 TARJETAS MÁS */}
          {/* 22 tarjeta */}
          <div className="relative text-center overflow-hidden rounded-lg shadow-lg relative text-center overflow-hidden rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl">
            <div className="absolute inset-0 z-0">
              <img src="/imagenes/googleads.jpeg" alt="Googleads" className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="relative z-10 p-6">
              <h2 className="font-bold mb-4 text-white text-2xl">Google Ads</h2>
              <button className="bg-blue-700 text-white py-2 px-4 rounded-full hover:bg-blue-800"><a href="/principiante22" className="button-link">Saber más</a></button>
            </div>
          </div>

          {/* 23 tarjeta */}
          <div className="relative text-center overflow-hidden rounded-lg shadow-lg relative text-center overflow-hidden rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl">
            <div className="absolute inset-0 z-0">
              <img src="/imagenes/googleadsavanzado.jpeg" alt="Google Ads avanzado" className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="relative z-10 p-6">
              <h2 className="font-bold mb-4 text-white text-2xl">Google Ads avanzado</h2>
              <button className="bg-blue-700 text-white py-2 px-4 rounded-full hover:bg-blue-800"><a href="/principiante23" className="button-link">Saber más</a></button>
            </div>
          </div>

          {/* 24 tarjeta */}
          <div className="relative text-center overflow-hidden rounded-lg shadow-lg relative text-center overflow-hidden rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl">
            <div className="absolute inset-0 z-0">
              <img src="/imagenes/tiktoknegocios.jpeg" alt="TikTok" className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="relative z-10 p-6">
              <h2 className="font-bold mb-4 text-white text-2xl">TikTok Ads</h2>
              <button className="bg-blue-700 text-white py-2 px-4 rounded-full hover:bg-blue-800"><a href="/principiante24" className="button-link">Saber más</a></button>
            </div>
          </div>

          {/* 25 tarjeta */}
          <div className="relative text-center overflow-hidden rounded-lg shadow-lg relative text-center overflow-hidden rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl">
            <div className="absolute inset-0 z-0">
              <img src="/imagenes/instagramnegocios.jpeg" alt="Linkedin" className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="relative z-10 p-6">
              <h2 className="font-bold mb-4 text-white text-2xl">Crecimiento en Instagram</h2>
              <button className="bg-blue-700 text-white py-2 px-4 rounded-full hover:bg-blue-800"><a href="/principiante25" className="button-link">Saber más</a></button>
            </div>
          </div>

          {/* 26 tarjeta */}
          <div className="relative text-center overflow-hidden rounded-lg shadow-lg relative text-center overflow-hidden rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl">
            <div className="absolute inset-0 z-0">
              <img src="/imagenes/shopify.jpeg" alt="Shopify" className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="relative z-10 p-6">
              <h2 className="font-bold mb-4 text-white text-2xl">Shopify</h2>
              <button className="bg-blue-700 text-white py-2 px-4 rounded-full hover:bg-blue-800"><a href="/principiante26" className="button-link">Saber más</a></button>
            </div>
          </div>

          {/* 27 tarjeta */}
          <div className="relative text-center overflow-hidden rounded-lg shadow-lg relative text-center overflow-hidden rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl">
            <div className="absolute inset-0 z-0">
              <img src="/imagenes/facebooknegocios.jpeg" alt="Facebook" className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="relative z-10 p-6">
              <h2 className="font-bold mb-4 text-white text-2xl">Facebook Ads</h2>
              <button className="bg-blue-700 text-white py-2 px-4 rounded-full hover:bg-blue-800"><a href="/principiante27" className="button-link">Saber más</a></button>
            </div>
          </div>

          {/* 28 tarjeta */}
          <div className="relative text-center overflow-hidden rounded-lg shadow-lg relative text-center overflow-hidden rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl">
            <div className="absolute inset-0 z-0">
              <img src="/imagenes/sprint.jpeg" alt="Sprint" className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="relative z-10 p-6">
              <h2 className="font-bold mb-4 text-white text-2xl">Sprint</h2>
              <button className="bg-blue-700 text-white py-2 px-4 rounded-full hover:bg-blue-800"><a href="/principiante28" className="button-link">Saber más</a></button>
            </div>
          </div>

          {/* 29 tarjeta */}
          <div className="relative text-center overflow-hidden rounded-lg shadow-lg relative text-center overflow-hidden rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl">
            <div className="absolute inset-0 z-0">
              <img src="/imagenes/digitalprogram.jpeg" alt="Programa Digital" className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="relative z-10 p-6">
              <h2 className="font-bold mb-4 text-white text-2xl">Programa Digital</h2>
              <button className="bg-blue-700 text-white py-2 px-4 rounded-full hover:bg-blue-800"><a href="/Avanzado" className="button-link">Saber más</a></button>
            </div>
          </div>

          {/* 30 tarjeta */}
          <div className="relative text-center overflow-hidden rounded-lg shadow-lg relative text-center overflow-hidden rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl">
            <div className="absolute inset-0 z-0">
              <img src="/imagenes/caiman.jpeg" alt="Reto Caiman" className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="relative z-10 p-6">
              <h2 className="font-bold mb-4 text-white text-2xl">Reto Caiman</h2>
              <button className="bg-blue-700 text-white py-2 px-4 rounded-full hover:bg-blue-800"><a href="/Avanzado" className="button-link">Saber más</a></button>
            </div>
          </div>
        </div>
      </section>

      {/* SECCION DE REGISTRO */}
      <section id="contacto" className="py-10 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center flex flex-col justify-center">
            <h1 className="font-bold text-2xl mb-4 text-black">¡COMIENZA YA!</h1>
            <h2 className="font-bold text-7xl tracking-wide mb-4 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 bg-clip-text text-transparent animate-pulse">INSCRÍBETE</h2>
            <h1 className="font-bold text-2xl mb-4 text-black">Y CONTINÚA TUS ESTUDIOS</h1>
          </div>
          <div className="bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 p-8 rounded-lg shadow-lg">
            <h2 className="text-center font-bold text-3xl mb-6 text-white drop-shadow-[1px_1px_1px_rgba(0,0,0,0.5)]">Registro</h2>
            <form action="#">
              <input type="text" id="nombrec" name="nombrec" placeholder="Nombre(s)" pattern="[A-Za-zÀ-ÿ\s]+" title="El nombre solo debe contener letras." className="w-full mb-4 p-2 border border-gray-300 rounded-xl" />
              <input type="text" id="apellidop" name="apellidop" placeholder="Apellido paterno" pattern="[A-Za-zÀ-ÿ\s]+" title="El nombre solo debe contener letras." className="w-full mb-4 p-2 border border-gray-300 rounded-xl" />
              <input type="text" id="apellidom" name="apellidom" placeholder="Apellido materno" pattern="[A-Za-zÀ-ÿ\s]+" title="El nombre solo debe contener letras." className="w-full mb-4 p-2 border border-gray-300 rounded-xl" />
              <input type="email" id="email" name="email" placeholder="Correo Electrónico" className="w-full mb-4 p-2 border border-gray-300 rounded-xl" />
              <input type="text" id="telefono" name="telefono" placeholder="Lada + Número de teléfono" className="w-full mb-4 p-2 border border-gray-300 rounded-xl" />
              <input type="text" id="username" name="username" placeholder="Nombre de Usuario" pattern=".{4,}" title="El nombre de usuario debe tener al menos 4 caracteres." className="w-full mb-4 p-2 border border-gray-300 rounded-xl" />
              <input type="password" id="password" name="password" placeholder="Contraseña" pattern=".{8,}" title="La contraseña debe tener al menos 8 caracteres." className="w-full mb-4 p-2 border border-gray-300 rounded-xl" />
              <div className='flex justify-center'>
                <button type="submit" className="bg-blue-700 text-white py-2 rounded-xl px-2.5 hover:bg-blue-800">Enviar</button>
              </div>
            </form>
          </div>
        </div>
      </section>


    </main>
  );
};

export default Index;
