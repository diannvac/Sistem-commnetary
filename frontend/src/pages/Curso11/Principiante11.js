import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Principiante11() {
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
            <section id="inici" className="relative h-screen flex justify-center items-center bg-cover bg-center" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/imagenes/estrategiacorporativa.jpeg)` }}>
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
                <div className="relative z-10 text-center text-white flex flex-col justify-center items-center text-shadow-md">
                    <h1 className="font-bold text-4xl mb-8 drop-shadow-[1px_1px_1px_rgba(255,255,255,0.9)] ">ESTRATEGIA CORPORATIVA Y PLANIFICACIÓN</h1>
                    
                    <h2 className="font-bold text-3xl mb-4 drop-shadow-[1px_1px_1px_rgba(0,0,0,0.9)] ">NIVEL PRINCIPIANTE</h2>
                </div>
            </section>

            {/* SEGUNDA SECCIÓN DESCRIPCION */}
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
                            Visión y misión globales
                            </p>
                        </div>
                    </Link>
                    {/* 2 */}
                    <Link to="/temados" className="cardd bg-gradient-to-r from-blue-600 to-blue-400 shadow-lg rounded-lg p-5 text-white text-decoration-none transform transition-transform hover:-translate-y-2">
                        <div className="card">
                            <h2 className="text-2xl font-bold mb-3 text-shadow-md">Capítulo 2</h2>
                            <p className="font-bold hiddenn text-shadow-md">
                                Análisis competitivo internacional (Modelo de las 5 fuerzas de Porter)
                            </p>
                        </div>
                    </Link>
                    {/* 3 */}
                    <Link to="/tematres" className="cardd bg-gradient-to-r from-blue-600 to-blue-400  shadow-lg rounded-lg p-5 text-white text-decoration-none transform transition-transform hover:-translate-y-2">
                        <div className="card">
                            <h2 className="text-2xl font-bold mb-3 text-shadow-md">Capítulo 3</h2>
                            <p className="font-bold hiddenn text-shadow-md">
                               Planificación estratégica y ejecución
                            </p>
                        </div>
                    </Link>
                    {/* 4 */}
                    <Link to="/temacuatro" className="cardd bg-gradient-to-r from-blue-600 to-blue-400  shadow-lg rounded-lg p-5 text-white text-decoration-none transform transition-transform hover:-translate-y-2">
                        <div className="card">
                            <h2 className="text-2xl font-bold mb-3 text-shadow-md">Capítulo 4</h2>
                            <p className="font-bold hiddenn text-shadow-md">
                                Gestión del cambio organizacional 
                            </p>
                        </div>
                    </Link>
                    {/* 5 */}
                    <Link to="/temacinco" className="cardd bg-gradient-to-r from-blue-600 to-blue-400  shadow-lg rounded-lg p-5 text-white text-decoration-none transform transition-transform hover:-translate-y-2">
                        <div className="card">
                            <h2 className="text-2xl font-bold mb-3 text-shadow-md">Capítulo 5</h2>
                            <p className="font-bold hiddenn text-shadow-md">
                                Modelos de crecimiento empresarial (orgánico, fusiones, adquisiciones)
                            </p>
                        </div>
                    </Link>
                    {/* 6 */}
                    <Link to="/temaseis" className="cardd bg-gradient-to-r from-blue-600 to-blue-400  shadow-lg rounded-lg p-5 text-white text-decoration-none transform transition-transform hover:-translate-y-2">
                        <div className="card">
                            <h2 className="text-2xl font-bold mb-3 text-shadow-md">Capítulo 6</h2>
                            <p className="font-bold hiddenn text-shadow-md">
                                Estrategias de escalabilidad y expansión
                            </p>
                        </div>
                    </Link>
                    {/* 7 */}
                    <Link to="/temasiete" className="cardd bg-gradient-to-r from-blue-600 to-blue-400 shadow-lg rounded-lg p-5 text-white text-decoration-none transform transition-transform hover:-translate-y-2">
                        <div className="card">
                            <h2 className="text-2xl font-bold mb-3 text-shadow-md">Capítulo 7</h2>
                            <p className="font-bold hiddenn text-shadow-md">
                                Benchmarking y aorendizaje continuo
                            </p>
                        </div>
                    </Link>
                    {/* 8 */}
                    <Link to="/temaocho" className="cardd bg-gradient-to-r from-blue-600 to-blue-400  shadow-lg rounded-lg p-5 text-white text-decoration-none transform transition-transform hover:-translate-y-2">
                        <div className="card">
                            <h2 className="text-2xl font-bold mb-3 text-shadow-md">Capítulo 8</h2>
                            <p className="font-bold hiddenn text-shadow-md">
                                Gestión de la innovación corporativa
                            </p>
                        </div>
                    </Link>
                    {/* 9 */}
                    <Link to="/temanueve" className="cardd bg-gradient-to-r from-blue-600 to-blue-400  shadow-lg rounded-lg p-5 text-white text-decoration-none transform transition-transform hover:-translate-y-2">
                        <div className="card">
                            <h2 className="text-2xl font-bold mb-3 text-shadow-md">Capítulo 9</h2>
                            <p className="font-bold hiddenn text-shadow-md">
                                Alianzas estratégicas y joint ventures
                            </p>
                        </div>
                    </Link>
                    {/* 10 */}
                    <Link to="/temadiez" className="cardd bg-gradient-to-r from-blue-600 to-blue-400  shadow-lg rounded-lg p-5 text-white text-decoration-none transform transition-transform hover:-translate-y-2">
                        <div className="card">
                            <h2 className="text-2xl font-bold mb-3 text-shadow-md">Capítulo 10</h2>
                            <p className="font-bold hiddenn text-shadow-md">
                                Balanced Scorecard y otros modelos de gestión del rendimiento 
                            </p>
                        </div>
                    </Link>
                    {/* 11 */}
                    <Link to="/temaonce" className="cardd bg-gradient-to-r from-blue-600 to-blue-400  shadow-lg rounded-lg p-5 text-white text-decoration-none transform transition-transform hover:-translate-y-2">
                        <div className="card">
                            <h2 className="text-2xl font-bold mb-3 text-shadow-md">Capítulo 11</h2>
                            <p className="font-bold hiddenn text-shadow-md">
                                Blockchain para negocios
                            </p>
                        </div>
                    </Link>
                    {/* 12 */}
                    <Link to="/temadoce" className="cardd bg-gradient-to-r from-blue-600 to-blue-400  shadow-lg rounded-lg p-5 text-white text-decoration-none transform transition-transform hover:-translate-y-2">
                        <div className="card">
                            <h2 className="text-2xl font-bold mb-3 text-shadow-md">Capítulo 12</h2>
                            <p className="font-bold hiddenn text-shadow-md">
                                Nuevos modelos de trabajo 
                            </p>
                        </div>
                    </Link>
                    {/* 13 */}
                    <Link to="/temadoce" className="cardd bg-gradient-to-r from-blue-600 to-blue-400  shadow-lg rounded-lg p-5 text-white text-decoration-none transform transition-transform hover:-translate-y-2">
                        <div className="card">
                            <h2 className="text-2xl font-bold mb-3 text-shadow-md">Capítulo 13</h2>
                            <p className="font-bold hiddenn text-shadow-md">
                                Estrategias de crecimiento exponencial
                            </p>
                        </div>
                    </Link>
                </div>
            </section>

            {/* SECCION DE LOS BOTONES */}
            <div className="button-container flex gap-5 justify-center mt-5 mb-4">
                <a href='/medio11' className="styled-link bg-gradient-to-r from-blue-700 to-blue-500 rounded-full px-5 py-2 text-white font-bold transform transition-transform hover:-translate-y-1">
                    NIVEL MEDIO
                </a>
                <a href='/avanzado11' className="styled-link bg-gradient-to-r from-blue-900 to-blue-700 rounded-full px-5 py-2 text-white font-bold transform transition-transform hover:-translate-y-1">
                    NIVEL AVANZADO
                </a>
            </div>

            <Footer />
        </div>
    );
}

export default Principiante11;
