import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Avanzado() {
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
            <section id="inici" className="relative h-screen flex justify-center items-center bg-cover bg-center" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/imagenes/sostenible.jpeg)` }}>
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
                <div className="relative z-10 text-center text-white flex flex-col justify-center items-center text-shadow-md">
                    <h1 className="font-bold text-4xl mb-8 drop-shadow-[1px_1px_1px_rgba(255,255,255,0.9)] ">FUNDAMENTOS DEL EMPRENDIMIENTO SOSTENIBLE</h1>
                    <h2 className="font-bold text-3xl mb-4 drop-shadow-[1px_1px_1px_rgba(0,0,0,0.9)] ">NIVEL AVANZADO</h2>
                </div>
            </section>

            {/* SEGUNDA SECCIÓN */}
            <section className=" bg-blue-500 info-section flex flex-col md:flex-row items-center gap-4 p-5 min-h-screen justify-center my-10">
                <div className="cards flex flex-col gap-4 w-full md:w-1/2 items-center">
                    <div className="card bg-white shadow-lg rounded-lg w-full max-w-lg p-2">
                        <h2 className="text-xl font-semibold mb-2 cursor-pointer">Descripción de modulo</h2>
                        <p className="hidden">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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


            {/* TERCERA SECCION */}
            <div>
                <h2 className="text-center font-bold text-4xl tracking-wide mb-4 bg-gradient-to-r bg-clip-text  animate-pulse">
                    NIVEL AVANZADO
                </h2>
            </div>
            <section className="bg-gray-100 chapter-section flex flex-col items-center gap-4 mt-5 p-5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl">
                    {/* 1 */}
                    <Link to="/temaunoA" className="cardd bg-gradient-to-r from-blue-900 to-blue-700 shadow-lg rounded-lg p-5 text-white text-decoration-none transform transition-transform hover:-translate-y-2">
                        <div className="card">
                            <h2 className="text-2xl font-bold mb-3 text-shadow-md">Capítulo 1</h2>
                            <p className="font-bold hiddenn text-shadow-md">
                            Definición y principios del emprendimiento III                            </p>
                        </div>
                    </Link>
                    {/* 2 */}
                    <Link to="/temadosA" className="cardd bg-gradient-to-r from-blue-900 to-blue-700 shadow-lg rounded-lg p-5 text-white text-decoration-none transform transition-transform hover:-translate-y-2">
                        <div className="card">
                            <h2 className="text-2xl font-bold mb-3 text-shadow-md">Capítulo 2</h2>
                            <p className="font-bold hiddenn text-shadow-md">
                            Definición de triple resultado y su relevancia III                            </p>
                        </div>
                    </Link>
                    {/* 3 */}
                    <Link to="/tematresA" className="cardd bg-gradient-to-r from-blue-900 to-blue-700  shadow-lg rounded-lg p-5 text-white text-decoration-none transform transition-transform hover:-translate-y-2">
                        <div className="card">
                            <h2 className="text-2xl font-bold mb-3 text-shadow-md">Capítulo 3</h2>
                            <p className="font-bold hiddenn text-shadow-md">
                            Concepto de modelo de negocio sostenible III                            </p>
                        </div>
                    </Link>
                    {/* 4 */}
                    <Link to="/temacuatroA" className="cardd bg-gradient-to-r from-blue-900 to-blue-700  shadow-lg rounded-lg p-5 text-white text-decoration-none transform transition-transform hover:-translate-y-2">
                        <div className="card">
                            <h2 className="text-2xl font-bold mb-3 text-shadow-md">Capítulo 4</h2>
                            <p className="font-bold hiddenn text-shadow-md">
                            Tecnología verde III                            </p>
                        </div>
                    </Link>
                    {/* 5 */}
                    <Link to="/temacincoA" className="cardd bg-gradient-to-r from-blue-900 to-blue-700  shadow-lg rounded-lg p-5 text-white text-decoration-none transform transition-transform hover:-translate-y-2">
                        <div className="card">
                            <h2 className="text-2xl font-bold mb-3 text-shadow-md">Capítulo 5</h2>
                            <p className="font-bold hiddenn text-shadow-md">
                            Economía circular III                            </p>
                        </div>
                    </Link>
                    {/* 6 */}
                    <Link to="/temaseisA" className="cardd bg-gradient-to-r from-blue-900 to-blue-700  shadow-lg rounded-lg p-5 text-white text-decoration-none transform transition-transform hover:-translate-y-2">
                        <div className="card">
                            <h2 className="text-2xl font-bold mb-3 text-shadow-md">Capítulo 6</h2>
                            <p className="font-bold hiddenn text-shadow-md">
                            Responsabilidad Social Corporativa (RSC) III
                            </p>
                        </div>
                    </Link>
                    {/* 7 */}
                    <Link to="/temasieteA" className="cardd bg-gradient-to-r from-blue-900 to-blue-700 shadow-lg rounded-lg p-5 text-white text-decoration-none transform transition-transform hover:-translate-y-2">
                        <div className="card">
                            <h2 className="text-2xl font-bold mb-3 text-shadow-md">Capítulo 7</h2>
                            <p className="font-bold hiddenn text-shadow-md">
                            Medición de impacto social y ambiental III                            </p>
                        </div>
                    </Link>
                    {/* 8 */}
                    <Link to="/temaochoA" className="cardd bg-gradient-to-r from-blue-900 to-blue-700  shadow-lg rounded-lg p-5 text-white text-decoration-none transform transition-transform hover:-translate-y-2">
                        <div className="card">
                            <h2 className="text-2xl font-bold mb-3 text-shadow-md">Capítulo 8</h2>
                            <p className="font-bold hiddenn text-shadow-md">
                            Estrategias de sostenibilidad corporativa III                            </p>
                        </div>
                    </Link>
                    {/* 9 */}
                    <Link to="/temanueveA" className="cardd bg-gradient-to-r from-blue-900 to-blue-700  shadow-lg rounded-lg p-5 text-white text-decoration-none transform transition-transform hover:-translate-y-2">
                        <div className="card">
                            <h2 className="text-2xl font-bold mb-3 text-shadow-md">Capítulo 9</h2>
                            <p className="font-bold hiddenn text-shadow-md">
                            Certificaciones y estandares globales (B Corp, ISO 26000) III
                            </p>
                        </div>
                    </Link>
                    {/* 10 */}
                    <Link to="/temadiezA" className="cardd bg-gradient-to-r from-blue-900 to-blue-700  shadow-lg rounded-lg p-5 text-white text-decoration-none transform transition-transform hover:-translate-y-2">
                        <div className="card">
                            <h2 className="text-2xl font-bold mb-3 text-shadow-md">Capítulo 10</h2>
                            <p className="font-bold hiddenn text-shadow-md">
                            Legislación ambiental y social internacional III
                            </p>
                        </div>
                    </Link>
                    {/* 11 */}
                    <Link to="/temaonceA" className="cardd bg-gradient-to-r from-blue-900 to-blue-700  shadow-lg rounded-lg p-5 text-white text-decoration-none transform transition-transform hover:-translate-y-2">
                        <div className="card">
                            <h2 className="text-2xl font-bold mb-3 text-shadow-md">Capítulo 10</h2>
                            <p className="font-bold hiddenn text-shadow-md">
                            Casos de éxito sencillos y cómo iniciaron III
                            </p>
                        </div>
                    </Link>
                    {/* 12 */}
                    <Link to="/temadoceA" className="cardd bg-gradient-to-r from-blue-900 to-blue-700  shadow-lg rounded-lg p-5 text-white text-decoration-none transform transition-transform hover:-translate-y-2">
                        <div className="card">
                            <h2 className="text-2xl font-bold mb-3 text-shadow-md">Capítulo 10</h2>
                            <p className="font-bold hiddenn text-shadow-md">
                            Sostenibilidad y Economías Verdes III
                            </p>
                        </div>
                    </Link>
                    
                </div>
            </section>


            {/* SECCION DE LOS BOTONES */}
            <div className="button-container flex gap-5 justify-center mt-5 mb-4">
                <a href='/principiante' className="styled-link bg-gradient-to-r from-blue-600 to-blue-400 rounded-full px-5 py-2 text-white font-bold transform transition-transform hover:-translate-y-1">
                    NIVEL PRINCIPIANTE
                </a>
                <a href='/medio' className="styled-link bg-gradient-to-r from-blue-700 to-blue-500 rounded-full px-5 py-2 text-white font-bold transform transition-transform hover:-translate-y-1">
                    NIVEL MEDIO
                </a>
            </div>

            <Footer />
        </div>
    );
}

export default Avanzado;