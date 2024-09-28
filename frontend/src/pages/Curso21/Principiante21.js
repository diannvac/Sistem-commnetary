import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Principiante21() {
    useEffect(() => {
        const handleCardClick = (event) => {
            const card = event.target;
            const content = card.nextElementSibling;
            const allContents = document.querySelectorAll(".card p");

            if (content.classList.contains("hidden")) {
                allContents.forEach(c => {
                    c.classList.add("hidden");
                });
                content.classList.remove("hidden");
            } else {
                content.classList.add("hidden");
            }
        };

        const cards = document.querySelectorAll(".card h2");
        cards.forEach(card => {
            card.addEventListener("click", handleCardClick);
        });

        return () => {
            cards.forEach(card => {
                card.removeEventListener("click", handleCardClick);
            });
        };
    }, []);

    return (
        <div>
            <Header />

            {/* PRIMERA SECCION */}
            <section id="inici" className="relative h-screen flex justify-center items-center bg-cover bg-center" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/imagenes/psicologia.jpeg)` }}>
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
                <div className="relative z-10 text-center text-white flex flex-col justify-center items-center text-shadow-md">
                    <h1 className="font-bold text-4xl mb-8 drop-shadow-[1px_1px_1px_rgba(255,255,255,0.9)] ">FILOSOFÍA, PSICOLOGÍA y PSICOANÁLISIS EN EL ENTORNO EMPRESARIAL</h1>
                    
                    <h2 className="font-bold text-3xl mb-4 drop-shadow-[1px_1px_1px_rgba(0,0,0,0.9)] ">NIVEL PRINCIPIANTE</h2>
                </div>
            </section>

            {/* SEGUNDA SECCIÓN DESCRIPCION */}
            <section className=" bg-blue-500 info-section flex flex-col md:flex-row items-center gap-4 p-5 min-h-screen justify-center my-10">
                <div className="cards flex flex-col gap-4 w-full md:w-1/2 items-center">
                    <div className="card bg-white shadow-lg rounded-lg w-full max-w-lg p-2">
                        <h2 className="text-xl font-semibold mb-2 cursor-pointer">Descripción de modulo</h2>
                        <p className="hidden">Comprender el pensamiento y comportamiento humanos para la innovación y liderazgo global</p>
                    </div>
                    <div className="card bg-white shadow-lg rounded-lg w-full max-w-lg p-2">
                        <h2 className="text-xl font-semibold mb-2 cursor-pointer">Objetivo</h2>
                        <p className="hidden">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="card bg-white shadow-lg rounded-lg w-full max-w-lg p-2">
                        <h2 className="text-xl font-semibold mb-2 cursor-pointer">Plan de estudio</h2>
                        <p className="hidden">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="card bg-white shadow-lg rounded-lg w-full max-w-lg p-2">
                        <h2 className="text-xl font-semibold mb-2 cursor-pointer">Ventajas</h2>
                        <p className="hidden">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div className="image-container flex flex-col justify-center text-center px-8 md:w-1/2">
                    <img src={`${process.env.PUBLIC_URL}/imagenes/secc2basic.jpeg`} alt="Descripción de la imagen" className="w-full h-auto" />
                </div>
            </section>


            {/* TERCERA SECCION TARJETA DE CAPITULOS */}
            <div>
                <h2 className="text-center font-bold text-4xl tracking-wide mb-4 bg-gradient-to-r bg-clip-text  animate-pulse">
                    NIVEL PRINCIPIANTE
                </h2>
            </div>
            <section className="bg-gray-100 chapter-section flex flex-col items-center gap-4 mt-5 p-5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl">
                    {/* 1 */}
                    <Link to="/temauno" className="cardd bg-gradient-to-r from-blue-600 to-blue-400 shadow-lg rounded-lg p-5 text-white text-decoration-none transform transition-transform hover:-translate-y-2">
                        <div className="card">
                            <h2 className="text-2xl font-bold mb-3 text-shadow-md">Capítulo 1</h2>
                            <p className="font-bold hiddenn text-shadow-md">
                            Introducción a la filosofía, psicología y psicoanálisis: Definiciones básicas y su importancia en el contexto empresarial global
                            </p>
                        </div>
                    </Link>
                    {/* 2 */}
                    <Link to="/temados" className="cardd bg-gradient-to-r from-blue-600 to-blue-400 shadow-lg rounded-lg p-5 text-white text-decoration-none transform transition-transform hover:-translate-y-2">
                        <div className="card">
                            <h2 className="text-2xl font-bold mb-3 text-shadow-md">Capítulo 2</h2>
                            <p className="font-bold hiddenn text-shadow-md">
                                Los presocráticos y la naturaleza del cambio: Exploración de conceptos de cambio y permanencia, su imapcto en la innovación y gestión empresariall
                            </p>
                        </div>
                    </Link>
                    {/* 3 */}
                    <Link to="/tematres" className="cardd bg-gradient-to-r from-blue-600 to-blue-400  shadow-lg rounded-lg p-5 text-white text-decoration-none transform transition-transform hover:-translate-y-2">
                        <div className="card">
                            <h2 className="text-2xl font-bold mb-3 text-shadow-md">Capítulo 3</h2>
                            <p className="font-bold hiddenn text-shadow-md">
                               Sócrates, Platón y Aristoteles: Ética, virtud y liderazgo; aplicaciones en la cultura corporativa y toma de desiciones
                            </p>
                        </div>
                    </Link>
                    {/* 4 */}
                    <Link to="/temacuatro" className="cardd bg-gradient-to-r from-blue-600 to-blue-400  shadow-lg rounded-lg p-5 text-white text-decoration-none transform transition-transform hover:-translate-y-2">
                        <div className="card">
                            <h2 className="text-2xl font-bold mb-3 text-shadow-md">Capítulo 4</h2>
                            <p className="font-bold hiddenn text-shadow-md">
                                Estoicismo y Control Emocional: Resilencia empresarial y manejdel estrés a través de la filosofía estoica 
                            </p>
                        </div>
                    </Link>
                    {/* 5 */}
                    <Link to="/temacinco" className="cardd bg-gradient-to-r from-blue-600 to-blue-400  shadow-lg rounded-lg p-5 text-white text-decoration-none transform transition-transform hover:-translate-y-2">
                        <div className="card">
                            <h2 className="text-2xl font-bold mb-3 text-shadow-md">Capítulo 5</h2>
                            <p className="font-bold hiddenn text-shadow-md">
                                Epicureísmo y la búsqueda de la felicidad: Bienestar en el trabajo y equilibrio vida-trabajo
                            </p>
                        </div>
                    </Link>
                    {/* 6 */}
                    <Link to="/temaseis" className="cardd bg-gradient-to-r from-blue-600 to-blue-400  shadow-lg rounded-lg p-5 text-white text-decoration-none transform transition-transform hover:-translate-y-2">
                        <div className="card">
                            <h2 className="text-2xl font-bold mb-3 text-shadow-md">Capítulo 6</h2>
                            <p className="font-bold hiddenn text-shadow-md">
                                Escepticismo y la gestión de la incertidumbre: Estrategias para navegar la incertidumbre en los negocios internacionales
                            </p>
                        </div>
                    </Link>
                    {/* 7 */}
                    <Link to="/temasiete" className="cardd bg-gradient-to-r from-blue-600 to-blue-400 shadow-lg rounded-lg p-5 text-white text-decoration-none transform transition-transform hover:-translate-y-2">
                        <div className="card">
                            <h2 className="text-2xl font-bold mb-3 text-shadow-md">Capítulo 7</h2>
                            <p className="font-bold hiddenn text-shadow-md">
                                La edad media y la fusión de filosofía y teología: Influencia en las éticas empresariales y responsabilidad social
                            </p>
                        </div>
                    </Link>
                    {/* 8 */}
                    <Link to="/temaocho" className="cardd bg-gradient-to-r from-blue-600 to-blue-400  shadow-lg rounded-lg p-5 text-white text-decoration-none transform transition-transform hover:-translate-y-2">
                        <div className="card">
                            <h2 className="text-2xl font-bold mb-3 text-shadow-md">Capítulo 8</h2>
                            <p className="font-bold hiddenn text-shadow-md">
                                Renacimiento y humanismo: El papel de la creatividad y la innovación en el desarrollo de productos y servicios
                            </p>
                        </div>
                    </Link>
                    {/* 9 */}
                    <Link to="/temanueve" className="cardd bg-gradient-to-r from-blue-600 to-blue-400  shadow-lg rounded-lg p-5 text-white text-decoration-none transform transition-transform hover:-translate-y-2">
                        <div className="card">
                            <h2 className="text-2xl font-bold mb-3 text-shadow-md">Capítulo 9</h2>
                            <p className="font-bold hiddenn text-shadow-md">
                                Racionalismo y empirismo: Desarrollo de estrategias basadas en datos y experiencia
                            </p>
                        </div>
                    </Link>
                    {/* 10 */}
                    <Link to="/temadiez" className="cardd bg-gradient-to-r from-blue-600 to-blue-400  shadow-lg rounded-lg p-5 text-white text-decoration-none transform transition-transform hover:-translate-y-2">
                        <div className="card">
                            <h2 className="text-2xl font-bold mb-3 text-shadow-md">Capítulo 10</h2>
                            <p className="font-bold hiddenn text-shadow-md">
                                Ilustración y libertad de pensamiento: Empoderamiento de equipos y fomento de un ambiente de trabajo abierto
                            </p>
                        </div>
                    </Link>
                    {/* 11 */}
                    <Link to="/temaonce" className="cardd bg-gradient-to-r from-blue-600 to-blue-400  shadow-lg rounded-lg p-5 text-white text-decoration-none transform transition-transform hover:-translate-y-2">
                        <div className="card">
                            <h2 className="text-2xl font-bold mb-3 text-shadow-md">Capítulo 11</h2>
                            <p className="font-bold hiddenn text-shadow-md">
                                Romanticismo y la valoración de la emoción: Importancia del entusiasmo y pasión en el emmprendimiento
                            </p>
                        </div>
                    </Link>
                    {/* 12 */}
                    <Link to="/temadoce" className="cardd bg-gradient-to-r from-blue-600 to-blue-400  shadow-lg rounded-lg p-5 text-white text-decoration-none transform transition-transform hover:-translate-y-2">
                        <div className="card">
                            <h2 className="text-2xl font-bold mb-3 text-shadow-md">Capítulo 12</h2>
                            <p className="font-bold hiddenn text-shadow-md">
                            Existencialismo y la Búsqueda de Significado: Construcción de marcas y productos con propósito
                            </p>
                        </div>
                    </Link>
                    {/* 13 */}
                    <Link to="/temadoce" className="cardd bg-gradient-to-r from-blue-600 to-blue-400  shadow-lg rounded-lg p-5 text-white text-decoration-none transform transition-transform hover:-translate-y-2">
                        <div className="card">
                            <h2 className="text-2xl font-bold mb-3 text-shadow-md">Capítulo 13</h2>
                            <p className="font-bold hiddenn text-shadow-md">
                            Marxismo y la Teoría Crítica: Análisis de las estructuras de poder en los negocios y la sociedad
                            </p>
                        </div>
                    </Link>
                    {/* 14 */}
                    <Link to="/temadoce" className="cardd bg-gradient-to-r from-blue-600 to-blue-400  shadow-lg rounded-lg p-5 text-white text-decoration-none transform transition-transform hover:-translate-y-2">
                        <div className="card">
                            <h2 className="text-2xl font-bold mb-3 text-shadow-md">Capítulo 14</h2>
                            <p className="font-bold hiddenn text-shadow-md">
                            Estructuralismo y Postestructuralismo: Entendimiento de las estructuras subyacentes en mercados y organizaciones
                            </p>
                        </div>
                    </Link>
                    {/* 15 */}
                    <Link to="/temadoce" className="cardd bg-gradient-to-r from-blue-600 to-blue-400  shadow-lg rounded-lg p-5 text-white text-decoration-none transform transition-transform hover:-translate-y-2">
                        <div className="card">
                            <h2 className="text-2xl font-bold mb-3 text-shadow-md">Capítulo 15</h2>
                            <p className="font-bold hiddenn text-shadow-md">
                            Fenomenología y la Experiencia Subjetiva: Mejora de la experiencia del cliente y diseño centrado en el usuario
                            </p>
                        </div>
                    </Link>
                    {/* 16 */}
                    <Link to="/temadoce" className="cardd bg-gradient-to-r from-blue-600 to-blue-400  shadow-lg rounded-lg p-5 text-white text-decoration-none transform transition-transform hover:-translate-y-2">
                        <div className="card">
                            <h2 className="text-2xl font-bold mb-3 text-shadow-md">Capítulo 16</h2>
                            <p className="font-bold hiddenn text-shadow-md">
                            Psicoanálisis de Freud: Entendimiento del comportamiento del consumidor y dinámicas de equipo
                            </p>
                        </div>
                    </Link>
                    {/* 17 */}
                    <Link to="/temadoce" className="cardd bg-gradient-to-r from-blue-600 to-blue-400  shadow-lg rounded-lg p-5 text-white text-decoration-none transform transition-transform hover:-translate-y-2">
                        <div className="card">
                            <h2 className="text-2xl font-bold mb-3 text-shadow-md">Capítulo 17</h2>
                            <p className="font-bold hiddenn text-shadow-md">
                            Jung y la Psicología Analítica: Arquetipos de marca y storytelling en el marketing
                            </p>
                        </div>
                    </Link>
                    {/* 18 */}
                    <Link to="/temadoce" className="cardd bg-gradient-to-r from-blue-600 to-blue-400  shadow-lg rounded-lg p-5 text-white text-decoration-none transform transition-transform hover:-translate-y-2">
                        <div className="card">
                            <h2 className="text-2xl font-bold mb-3 text-shadow-md">Capítulo 18</h2>
                            <p className="font-bold hiddenn text-shadow-md">
                            Erickson y la Psicología del Desarrollo: Desarrollo profesional y personal en el entorno empresarial
                            </p>
                        </div>
                    </Link>
                    {/* 19 */}
                    <Link to="/temadoce" className="cardd bg-gradient-to-r from-blue-600 to-blue-400  shadow-lg rounded-lg p-5 text-white text-decoration-none transform transition-transform hover:-translate-y-2">
                        <div className="card">
                            <h2 className="text-2xl font-bold mb-3 text-shadow-md">Capítulo 19</h2>
                            <p className="font-bold hiddenn text-shadow-md">
                            Behaviorismo y Modificación del Comportamiento: Técnicas de motivación y engagement de empleados
                            </p>
                        </div>
                    </Link>
                    {/* 20 */}
                    <Link to="/temadoce" className="cardd bg-gradient-to-r from-blue-600 to-blue-400  shadow-lg rounded-lg p-5 text-white text-decoration-none transform transition-transform hover:-translate-y-2">
                        <div className="card">
                            <h2 className="text-2xl font-bold mb-3 text-shadow-md">Capítulo 20</h2>
                            <p className="font-bold hiddenn text-shadow-md">
                            Humanismo y la Psicología Positiva: Fomento de una cultura empresarial positiva y productiva
                            </p>
                        </div>
                    </Link>
                    {/* 21 */}
                    <Link to="/temadoce" className="cardd bg-gradient-to-r from-blue-600 to-blue-400  shadow-lg rounded-lg p-5 text-white text-decoration-none transform transition-transform hover:-translate-y-2">
                        <div className="card">
                            <h2 className="text-2xl font-bold mb-3 text-shadow-md">Capítulo 21</h2>
                            <p className="font-bold hiddenn text-shadow-md">
                            Cognitivismo y Procesamiento de Información: Toma de decisiones y resolución de problemas en ambientes complejos
                            </p>
                        </div>
                    </Link>
                    {/* 22 */}
                    <Link to="/temadoce" className="cardd bg-gradient-to-r from-blue-600 to-blue-400  shadow-lg rounded-lg p-5 text-white text-decoration-none transform transition-transform hover:-translate-y-2">
                        <div className="card">
                            <h2 className="text-2xl font-bold mb-3 text-shadow-md">Capítulo 22</h2>
                            <p className="font-bold hiddenn text-shadow-md">
                            Teorías Contemporáneas en Psicología Social: Dinámicas de grupo y liderazgo en equipos multiculturales
                            </p>
                        </div>
                    </Link>
                    {/* 23 */}
                    <Link to="/temadoce" className="cardd bg-gradient-to-r from-blue-600 to-blue-400  shadow-lg rounded-lg p-5 text-white text-decoration-none transform transition-transform hover:-translate-y-2">
                        <div className="card">
                            <h2 className="text-2xl font-bold mb-3 text-shadow-md">Capítulo 23</h2>
                            <p className="font-bold hiddenn text-shadow-md">
                            Neurociencia y Negocios: Aplicaciones en marketing, diseño de productos y toma de decisiones
                            </p>
                        </div>
                    </Link>
                    {/* 24 */}
                    <Link to="/temadoce" className="cardd bg-gradient-to-r from-blue-600 to-blue-400  shadow-lg rounded-lg p-5 text-white text-decoration-none transform transition-transform hover:-translate-y-2">
                        <div className="card">
                            <h2 className="text-2xl font-bold mb-3 text-shadow-md">Capítulo 24</h2>
                            <p className="font-bold hiddenn text-shadow-md">
                            Neurociencia y Negocios: Aplicaciones en marketing, diseño de productos y toma de decisiones
                            </p>
                        </div>
                    </Link>
                    {/* 25 */}
                    <Link to="/temadoce" className="cardd bg-gradient-to-r from-blue-600 to-blue-400  shadow-lg rounded-lg p-5 text-white text-decoration-none transform transition-transform hover:-translate-y-2">
                        <div className="card">
                            <h2 className="text-2xl font-bold mb-3 text-shadow-md">Capítulo 25</h2>
                            <p className="font-bold hiddenn text-shadow-md">
                            Inteligencia Emocional y su Aplicación en el Liderazgo: Desarrollo de habilidades de liderazgo empático y efectivo
                            </p>
                        </div>
                    </Link>
                    {/* 26 */}
                    <Link to="/temadoce" className="cardd bg-gradient-to-r from-blue-600 to-blue-400  shadow-lg rounded-lg p-5 text-white text-decoration-none transform transition-transform hover:-translate-y-2">
                        <div className="card">
                            <h2 className="text-2xl font-bold mb-3 text-shadow-md">Capítulo 26</h2>
                            <p className="font-bold hiddenn text-shadow-md">
                            Mindfulness y Bienestar en el Trabajo: Técnicas para mejorar el bienestar y productividad
                            </p>
                        </div>
                    </Link>
                    {/* 27 */}
                    <Link to="/temadoce" className="cardd bg-gradient-to-r from-blue-600 to-blue-400  shadow-lg rounded-lg p-5 text-white text-decoration-none transform transition-transform hover:-translate-y-2">
                        <div className="card">
                            <h2 className="text-2xl font-bold mb-3 text-shadow-md">Capítulo 27</h2>
                            <p className="font-bold hiddenn text-shadow-md">
                            Culturas Empresariales Globales y Diversidad: Estrategias para gestionar y valorar la diversidad cultural
                            </p>
                        </div>
                    </Link>
                    {/* 28 */}
                    <Link to="/temadoce" className="cardd bg-gradient-to-r from-blue-600 to-blue-400  shadow-lg rounded-lg p-5 text-white text-decoration-none transform transition-transform hover:-translate-y-2">
                        <div className="card">
                            <h2 className="text-2xl font-bold mb-3 text-shadow-md">Capítulo 28</h2>
                            <p className="font-bold hiddenn text-shadow-md">
                            Ética Empresarial desde una Perspectiva Filosófica: Construcción de organizaciones éticas y responsables
                            </p>
                        </div>
                    </Link>
                    {/* 29 */}
                    <Link to="/temadoce" className="cardd bg-gradient-to-r from-blue-600 to-blue-400  shadow-lg rounded-lg p-5 text-white text-decoration-none transform transition-transform hover:-translate-y-2">
                        <div className="card">
                            <h2 className="text-2xl font-bold mb-3 text-shadow-md">Capítulo 29</h2>
                            <p className="font-bold hiddenn text-shadow-md">
                            Impacto de la Globalización en las Teorías del Comportamiento: Adaptación de estrategias empresariales a contextos globales cambiantes
                            </p>
                        </div>
                    </Link>
                    {/* 30 */}
                    <Link to="/temadoce" className="cardd bg-gradient-to-r from-blue-600 to-blue-400  shadow-lg rounded-lg p-5 text-white text-decoration-none transform transition-transform hover:-translate-y-2">
                        <div className="card">
                            <h2 className="text-2xl font-bold mb-3 text-shadow-md">Capítulo 30</h2>
                            <p className="font-bold hiddenn text-shadow-md">
                            Filosofía Oriental y Prácticas Empresariales: Influencia de conceptos como el Taoísmo y Budismo en la gestión empresarial
                            </p>
                        </div>
                    </Link>
                    {/* 31 */}
                    <Link to="/temadoce" className="cardd bg-gradient-to-r from-blue-600 to-blue-400  shadow-lg rounded-lg p-5 text-white text-decoration-none transform transition-transform hover:-translate-y-2">
                        <div className="card">
                            <h2 className="text-2xl font-bold mb-3 text-shadow-md">Capítulo 31</h2>
                            <p className="font-bold hiddenn text-shadow-md">
                            Filosofía Africana y Ubuntu en los Negocios: Comunidad, cooperación y ética en el entorno empresarial
                            </p>
                        </div>
                    </Link>
                </div>
            </section>

            {/* SECCION DE LOS BOTONES */}
            <div className="button-container flex gap-5 justify-center mt-5 mb-4">
                <a href='/medio21' className="styled-link bg-gradient-to-r from-blue-700 to-blue-500 rounded-full px-5 py-2 text-white font-bold transform transition-transform hover:-translate-y-1">
                    NIVEL MEDIO
                </a>
                <a href='/avanzado21' className="styled-link bg-gradient-to-r from-blue-900 to-blue-700 rounded-full px-5 py-2 text-white font-bold transform transition-transform hover:-translate-y-1">
                    NIVEL AVANZADO
                </a>
            </div>

            <Footer />
        </div>
    );
}

export default Principiante21;
