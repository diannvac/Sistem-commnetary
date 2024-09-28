import React from 'react';

const Banner = () => {
  return (
    <>


      {/* PRIMERA SECCION */}
      <section className="bg-cover bg-center h-screen flex justify-center items-center relative bg-[url('/public/imagenes/imagenportada.jpeg')] mt-12" >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white flex flex-col justify-center items-center">
          <h1 className="text-5xl mb-4 mt-16 drop-shadow-[1px_1px_1px_rgba(255,255,255,0.9)] font-bold">Maestría en Negocios Digitales</h1>
          <p className="text-lg mb-6 drop-shadow-[1px_1px_1px_rgba(0,0,0,0.5)]  font-bold">¡CONVIERTETE EN UN EXPERTO EN EL MUNDO DIGITAL!</p>
          <button className="bg-blue-700 text-white border-none py-2 px-4 text-sm cursor-pointer transition-all duration-300 ease-in-out rounded-xl hover:bg-blue-800">SABER MÁS</button>
        </div>
      </section>
    </>
  );
};

export default Banner;
