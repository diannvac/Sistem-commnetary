
import React, { useEffect, useRef, useState } from 'react';
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';
import 'grapesjs-preset-webpage/dist/index';
import 'grapesjs-preset-newsletter';
import { useNavigate, useParams } from 'react-router-dom';

const GrapesEditor2 = () => {
  const editorRef = useRef(null);
  const navigate = useNavigate();
  const { id } = useParams();

  // Obtener el ID de la ubicación (si se pasa como parámetro en la URL)





  useEffect(() => {
    if (!editorRef.current) return;

    const editor = grapesjs.init({
      container: editorRef.current,
      fromElement: true,
      height: '100vh',
      width: 'auto',
      storageManager: {
        type: 'remote',
        stepsBeforeSave: 1,
        urlStore: 'https://modelo-de-negocios-backend-180g.onrender.com/save',
        params: {},
        headers: {},
      },
     
      store: async (data, options) => {
        const response = await fetch(options.urlStore, {
          method: 'POST',
          headers: options.headers,
          body: JSON.stringify({ content: data }),
        });
        if (!response.ok) throw new Error('Failed to save');
      },
      canvas: {
        styles: ['https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css'],
      },
      styleManager: {
        sectors: [{
          name: 'General',
          buildProps: ['float', 'display', 'position', 'top', 'right', 'left', 'bottom'],
      },{
          name: 'Dimension',
          open: false,
          buildProps: ['width', 'height', 'max-width', 'min-height', 'margin', 'padding'],
      },{
          name: 'Typography',
          open: false,
          buildProps: ['font-family', 'font-size', 'font-weight', 'letter-spacing', 'color', 'line-height', 'text-align', 'text-decoration', 'text-shadow'],
      },{
          name: 'Decorations',
          open: false,
          buildProps: ['background-color', 'border-radius', 'border', 'box-shadow', 'background'],
      },{
          name: 'Extra',
          open: false,
          buildProps: ['opacity', 'transition', 'perspective', 'transform'],
      }],
      },
      blockManager: {
        appendTo: '#blocks',
        custom: true,
        blocks: [

          {
            id: 'header-block',
            label: 'Header Block',
            content: `
              <div class="header-block" style="text-align: center; padding: 20px; background: #f0f0f0;">
                <h1>Header Title</h1>
                <p>Header Subtitle</p>
              </div>
            `
            
          },

          {
            id: 'landing-page',
            label: '<b>Landing Page</b>',
            attributes: { class: 'gjs-block-section' },
            content: `
              <section class="bg-gray-100">
                <div class="container mx-auto py-16">
                  <header class="text-center mb-12">
                    <h1 class="text-5xl font-bold text-gray-900 mb-4">Bienvenidos a Nuestra Landing Page</h1>
                    <p class="text-xl text-gray-600">Descripción breve sobre la landing page.</p>
                  </header>
                  <div class="flex flex-wrap -mx-4 mb-12">
                    <div class="w-full md:w-1/3 px-4 mb-8 md:mb-0">
                      <div class="bg-white p-6 rounded-lg shadow-lg text-center">
                        <h2 class="text-2xl font-bold mb-4">Característica 1</h2>
                        <p class="text-gray-600">Descripción de la característica 1.</p>
                      </div>
                    </div>
                    <div class="w-full md:w-1/3 px-4 mb-8 md:mb-0">
                      <div class="bg-white p-6 rounded-lg shadow-lg text-center">
                        <h2 class="text-2xl font-bold mb-4">Característica 2</h2>
                        <p class="text-gray-600">Descripción de la característica 2.</p>
                      </div>
                    </div>
                    <div class="w-full md:w-1/3 px-4">
                      <div class="bg-white p-6 rounded-lg shadow-lg text-center">
                        <h2 class="text-2xl font-bold mb-4">Característica 3</h2>
                        <p class="text-gray-600">Descripción de la característica 3.</p>
                      </div>
                    </div>
                  </div>
                  <div class="text-center">
                    <button class="bg-blue-500 text-white py-2 px-4 rounded-lg text-lg">Actúa Ahora</button>
                  </div>
                </div>
              </section>
            `,
          },
          {
            id: 'carousel',
            label: '<b>Carousel</b>',
            attributes: { class: 'gjs-block-carousel' },
            content: `
              <div id="carouselExampleIndicators" class="carousel slide relative" data-bs-ride="carousel">
                <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner relative w-full overflow-hidden">
                  <div class="carousel-item active float-left w-full">
                    <img src="https://via.placeholder.com/800x400" class="block w-full" alt="Slide 1">
                  </div>
                  <div class="carousel-item float-left w-full">
                    <img src="https://via.placeholder.com/800x400" class="block w-full" alt="Slide 2">
                  </div>
                  <div class="carousel-item float-left w-full">
                    <img src="https://via.placeholder.com/800x400" class="block w-full" alt="Slide 3">
                  </div>
                </div>
                <button class="carousel-control-prev absolute top-0 bottom-0 left-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next absolute top-0 bottom-0 left-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                  <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            `,
          },
          {
            id: 'feature-block',
            label: '<b>Feature Block</b>',
            attributes: { class: 'gjs-block-section' },
            content: `
              <section class="bg-white p-6 rounded-lg shadow-lg">
                <h2 class="text-2xl font-bold mb-4">Características</h2>
                <p class="text-gray-600 mb-4">Esto es un bloque de características utilizando Tailwind CSS.</p>
                <ul class="list-disc pl-5 space-y-2">
                  <li>Característica 1</li>
                  <li>Característica 2</li>
                  <li>Característica 3</li>
                </ul>
              </section>
            `,
          },
          {
            id: 'testimonial-block',
            label: '<b>Testimonial</b>',
            attributes: { class: 'gjs-block-section' },
            content: `
              <section class="bg-gray-100 p-6 rounded-lg shadow-lg">
                <blockquote class="italic text-gray-600">
                  "Este producto ha cambiado mi vida para mejor. Lo recomiendo a todos."
                </blockquote>
                <p class="mt-4 text-gray-800 font-semibold">- Satisfecho Cliente</p>
              </section>
            `,
          },
          {
            id: 'cta-block',
            label: '<b>Call to Action</b>',
            attributes: { class: 'gjs-block-section' },
            content: `
              <section class="bg-blue-500 text-white p-6 text-center rounded-lg">
                <h2 class="text-3xl font-bold mb-4">¡Actúa Ahora!</h2>
                <p class="mb-4">Este es un bloque de llamado a la acción usando Tailwind CSS.</p>
                <button class="bg-white text-blue-500 font-semibold py-2 px-4 rounded-lg">Haz clic aquí</button>
              </section>
            `,
          },
          {
            id: 'hero-section',
            label: '<b>Hero Section</b>',
            attributes: { class: 'gjs-block-section' },
            content: `
              <section class="bg-gray-800 text-white p-10 text-center">
                <h1 class="text-5xl mb-4 text-white">Bienvenidos a nuestra Landing Page</h1>
                <p class="text-xl mb-4">We provide the best solutions for your business</p>
                <a href="#" class="bg-blue-500 text-white py-2 px-4 rounded">Get Started</a>
              </section>
            `,
          },
          {
            id: 'features',
            label: '<b>Hero section 2</b>',
            content: `
              <head>
                <link href="https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
              </head>
              <body class="antialiased bg-slate-100">
                <main class="py-20">
                  <section class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="text-center">
                      <h1 class="text-4xl font-extrabold text-slate-900 tracking-tight">Nuestro Producto</h1>
                      <p class="mt-4 text-lg leading-6 text-slate-600">Esto es un ejemplo de una sección de héroe con características utilizando Tailwind CSS.</p>
                    </div>
                    <div class="mt-12">
                      <div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-8">
                        <div class="text-center">
                          <div class="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m0-4h.01M12 12h.01M12 16h.01M17 16h.01M12 16h.01M7 16h.01M12 16h.01M16 12h1v4h-1M8 12h1v4H8v-4z"/>
                            </svg>
                          </div>
                          <h3 class="mt-4 text-lg leading-6 font-medium text-slate-900">Característica 1</h3>
                          <p class="mt-2 text-base leading-6 text-slate-600">Descripción breve de la característica 1.</p>
                        </div>
                        <div class="text-center">
                          <div class="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m0-4h.01M12 12h.01M12 16h.01M17 16h.01M12 16h.01M7 16h.01M12 16h.01M16 12h1v4h-1M8 12h1v4H8v-4z"/>
                            </svg>
                          </div>
                          <h3 class="mt-4 text-lg leading-6 font-medium text-slate-900">Característica 2</h3>
                          <p class="mt-2 text-base leading-6 text-slate-600">Descripción breve de la característica 2.</p>
                        </div>
                        <div class="text-center">
                          <div class="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m0-4h.01M12 12h.01M12 16h.01M17 16h.01M12 16h.01M7 16h.01M12 16h.01M16 12h1v4h-1M8 12h1v4H8v-4z"/>
                            </svg>
                          </div>
                          <h3 class="mt-4 text-lg leading-6 font-medium text-slate-900">Característica 3</h3>
                          <p class="mt-2 text-base leading-6 text-slate-600">Descripción breve de la característica 3.</p>
                        </div>
                      </div>
                    </div>
                  </section>
                </main>
              </body>
            `,
          },
          {
            id: 'testimonials',
            label: '<b>Testimonios</b>',
            content: `
              <section class="bg-gray-50 py-12">
                <div class="container mx-auto px-4">
                  <div class="text-center mb-12">
                    <h2 class="text-4xl font-bold text-gray-800">Lo que dicen nuestros clientes</h2>
                    <p class="text-lg text-gray-600">Las opiniones de nuestros clientes satisfechos</p>
                  </div>
                  <div class="flex flex-wrap -mx-4">
                    <div class="w-full md:w-1/3 px-4 mb-8">
                      <div class="bg-white p-6 rounded-lg shadow-lg text-center">
                        <p class="italic text-gray-600">"Este producto ha superado mis expectativas. Altamente recomendable."</p>
                        <p class="mt-4 text-gray-800 font-semibold">- Juan Pérez</p>
                      </div>
                    </div>
                    <div class="w-full md:w-1/3 px-4 mb-8">
                      <div class="bg-white p-6 rounded-lg shadow-lg text-center">
                        <p class="italic text-gray-600">"Servicio de primera, muy satisfecho con los resultados obtenidos."</p>
                        <p class="mt-4 text-gray-800 font-semibold">- María García</p>
                      </div>
                    </div>
                    <div class="w-full md:w-1/3 px-4 mb-8">
                      <div class="bg-white p-6 rounded-lg shadow-lg text-center">
                        <p class="italic text-gray-600">"La atención al cliente es excelente, siempre dispuestos a ayudar."</p>
                        <p class="mt-4 text-gray-800 font-semibold">- Carlos López</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            `,
          },
          {
            id: 'pricing',
            label: '<b>Precios</b>',
            content: `
              <section class="bg-white py-16">
                <div class="container mx-auto px-4">
                  <div class="text-center mb-12">
                    <h2 class="text-4xl font-bold text-gray-800">Nuestros Planes</h2>
                    <p class="text-lg text-gray-600">Elige el plan que mejor se adapte a tus necesidades</p>
                  </div>
                  <div class="flex flex-wrap -mx-4">
                    <div class="w-full md:w-1/3 px-4 mb-8">
                      <div class="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
                        <h3 class="text-2xl font-bold mb-4">Básico</h3>
                        <p class="text-gray-600 mb-4">$19/mes</p>
                        <ul class="list-disc pl-5 space-y-2 mb-4 text-gray-600">
                          <li>Característica 1</li>
                          <li>Característica 2</li>
                          <li>Característica 3</li>
                        </ul>
                        <button class="bg-blue-500 text-white py-2 px-4 rounded-lg">Seleccionar</button>
                      </div>
                    </div>
                    <div class="w-full md:w-1/3 px-4 mb-8">
                      <div class="bg-white p-6 rounded-lg shadow-lg text-center border-2 border-blue-500">
                        <h3 class="text-2xl font-bold mb-4">Estándar</h3>
                        <p class="text-gray-600 mb-4">$49/mes</p>
                        <ul class="list-disc pl-5 space-y-2 mb-4 text-gray-600">
                          <li>Característica 1</li>
                          <li>Característica 2</li>
                          <li>Característica 3</li>
                          <li>Característica 4</li>
                        </ul>
                        <button class="bg-blue-500 text-white py-2 px-4 rounded-lg">Seleccionar</button>
                      </div>
                    </div>
                    <div class="w-full md:w-1/3 px-4 mb-8">
                      <div class="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
                        <h3 class="text-2xl font-bold mb-4">Premium</h3>
                        <p class="text-gray-600 mb-4">$99/mes</p>
                        <ul class="list-disc pl-5 space-y-2 mb-4 text-gray-600">
                          <li>Característica 1</li>
                          <li>Característica 2</li>
                          <li>Característica 3</li>
                          <li>Característica 4</li>
                          <li>Característica 5</li>
                        </ul>
                        <button class="bg-blue-500 text-white py-2 px-4 rounded-lg">Seleccionar</button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            `,
          },
        
          {
            id: 'landing-page',
            label: '<b>Landing Page</b>',
            attributes: { class: 'gjs-block-section' },
            content: `
              <section class="bg-gray-100">
                <div class="container mx-auto py-16">
                  <header class="text-center mb-12">
                    <h1 class="text-5xl font-bold text-gray-900 mb-4">Bienvenidos a Nuestra Landing Page</h1>
                    <p class="text-xl text-gray-600">Descripción breve sobre la landing page.</p>
                  </header>
                  <div class="flex flex-wrap -mx-4 mb-12">
                    <div class="w-full md:w-1/3 px-4 mb-8 md:mb-0">
                      <div class="bg-white p-6 rounded-lg shadow-lg text-center">
                        <h2 class="text-2xl font-bold mb-4">Característica 1</h2>
                        <p class="text-gray-600">Descripción de la característica 1.</p>
                      </div>
                    </div>
                    <div class="w-full md:w-1/3 px-4 mb-8 md:mb-0">
                      <div class="bg-white p-6 rounded-lg shadow-lg text-center">
                        <h2 class="text-2xl font-bold mb-4">Característica 2</h2>
                        <p class="text-gray-600">Descripción de la característica 2.</p>
                      </div>
                    </div>
                    <div class="w-full md:w-1/3 px-4">
                      <div class="bg-white p-6 rounded-lg shadow-lg text-center">
                        <h2 class="text-2xl font-bold mb-4">Característica 3</h2>
                        <p class="text-gray-600">Descripción de la característica 3.</p>
                      </div>
                    </div>
                  </div>
                  <div class="text-center">
                    <button class="bg-blue-500 text-white py-2 px-4 rounded-lg text-lg">Actúa Ahora</button>
                  </div>
                </div>
              </section>
            `,
          },
          {
            id: 'carousel',
            label: '<b>Carousel</b>',
            attributes: { class: 'gjs-block-carousel' },
            content: `
              <div id="carouselExampleIndicators" class="carousel slide relative" data-bs-ride="carousel">
                <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner relative w-full overflow-hidden">
                  <div class="carousel-item active float-left w-full">
                    <img src="https://via.placeholder.com/800x400" class="block w-full" alt="Slide 1">
                  </div>
                  <div class="carousel-item float-left w-full">
                    <img src="https://via.placeholder.com/800x400" class="block w-full" alt="Slide 2">
                  </div>
                  <div class="carousel-item float-left w-full">
                    <img src="https://via.placeholder.com/800x400" class="block w-full" alt="Slide 3">
                  </div>
                </div>
                <button class="carousel-control-prev absolute top-0 bottom-0 left-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next absolute top-0 bottom-0 left-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                  <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            `,
          },
          {
            id: 'feature-block',
            label: '<b>Feature Block</b>',
            attributes: { class: 'gjs-block-section' },
            content: `
              <section class="bg-white p-6 rounded-lg shadow-lg">
                <h2 class="text-2xl font-bold mb-4">Características</h2>
                <p class="text-gray-600 mb-4">Esto es un bloque de características utilizando Tailwind CSS.</p>
                <ul class="list-disc pl-5 space-y-2">
                  <li>Característica 1</li>
                  <li>Característica 2</li>
                  <li>Característica 3</li>
                </ul>
              </section>
            `,
          },
          {
            id: 'testimonial-block',
            label: '<b>Testimonial</b>',
            attributes: { class: 'gjs-block-section' },
            content: `
              <section class="bg-gray-100 p-6 rounded-lg shadow-lg">
                <blockquote class="italic text-gray-600">
                  "Este producto ha cambiado mi vida para mejor. Lo recomiendo a todos."
                </blockquote>
                <p class="mt-4 text-gray-800 font-semibold">- Satisfecho Cliente</p>
              </section>
            `,
          },
          {
            id: 'cta-block',
            label: '<b>Call to Action</b>',
            attributes: { class: 'gjs-block-section' },
            content: `
              <section class="bg-blue-500 text-white p-6 text-center rounded-lg">
                <h2 class="text-3xl font-bold mb-4">¡Actúa Ahora!</h2>
                <p class="mb-4">Este es un bloque de llamado a la acción usando Tailwind CSS.</p>
                <button class="bg-white text-blue-500 font-semibold py-2 px-4 rounded-lg">Haz clic aquí</button>
              </section>
            `,
          },
          {
            id: 'hero-section',
            label: '<b>Hero Section</b>',
            attributes: { class: 'gjs-block-section' },
            content: `
              <section class="bg-gray-800 text-white p-10 text-center">
                <h1 class="text-5xl mb-4 text-white ">Bienvenidos a nuestra Landing Page</h1>
              </section>
            `,
          },
          {
            id: 'feature-block',
            label: '<b>Feature Block</b>',
            attributes: { class: 'gjs-block-section' },
            content: `
              <section class="bg-white p-6 rounded-lg shadow-lg">
                <h2 class="text-2xl font-bold mb-4">Características</h2>
                <p class="text-gray-600 mb-4">Esto es un bloque de características utilizando Tailwind CSS.</p>
                <ul class="list-disc pl-5 space-y-2">
                  <li>Característica 1</li>
                  <li>Característica 2</li>
                  <li>Característica 3</li>
                </ul>
              </section>
            `,
          },
          {
            id: 'cta-block',
            label: '<b>Call to Action</b>',
            attributes: { class: 'gjs-block-section' },
            content: `
              <section class="bg-blue-500 text-white p-6 text-center rounded-lg">
                <h2 class="text-3xl font-bold mb-4">¡Actúa Ahora!</h2>
                <p class="mb-4">Este es un bloque de llamado a la acción usando Tailwind CSS.</p>
                <button class="bg-white text-blue-500 font-semibold py-2 px-4 rounded-lg">Haz clic aquí</button>
              </section>
            `,
          },
          {
            id: 'testimonial-block',
            label: '<b>Testimonial</b>',
            attributes: { class: 'gjs-block-section' },
            content: `
              <section class="bg-gray-100 p-6 rounded-lg shadow-lg">
                <blockquote class="italic text-gray-600">
                  "Este producto ha cambiado mi vida para mejor. Lo recomiendo a todos."
                </blockquote>
                <p class="mt-4 text-gray-800 font-semibold">- Satisfecho Cliente</p>
              </section>
            `,
          },

            {
                id: 'hero-section',
                label: '<b >Hero Section</b>',
                attributes: { class: 'gjs-block-section' },
                content: `
                  <section class="bg-gray-800 text-white p-10 text-center">
                    <h1 class="text-5xl mb-4 text-white ">Bienvenidos a nuestra Landing Page</h1>
                    <p class="text-xl mb-4">We provide the best solutions for your business</p>
                    <a href="#" class="bg-blue-500 text-white py-2 px-4 rounded">Get Started</a>
                  </section>`,
              },
              {
                id: 'features',
                label: '<b>Hero section 2</b>',
                content: `
                
                  <head>
                    <link href="https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400&display=swap" rel="stylesheet">
                    <style>
                        body {
                            font-family : Urbanist, sans-serif;
                            @apply bg-white dark:bg-gray-900
                        }
                
                        .navbar-active .hamburger div:first-child {
                            @apply rotate-45 translate-y-1.5;
                        }
                
                        .navbar-active .hamburger div:last-child {
                            @apply -rotate-45 -translate-y-1;
                        }
                
                        .navbar-active div:first-child div:first-child div:last-child div {
                            @apply block;
                        }
                
                        .scrolling-active {
                            @apply shadow-lg;
                        }
                    </style>
                </head>
                
                <body class="bg-white dark:bg-gray-900">
                    <section class="w-full px-6 pb-12 antialiased bg-white dark:bg-gray-900">
                        <div class="mx-auto max-w-7xl">
                            <nav class="relative z-50 h-24 select-none" x-data="{ showMenu: false }">
                                <div class="container relative flex flex-wrap items-center justify-between h-24 mx-auto font-medium md:justify-center sm:px-4 md:px-0">
                                    <div class="flex items-center justify-start w-1/4 h-full pr-4">
                                        <a href="#_" class="inline-block py-4 md:py-0">
                                            <span class="p-1 text-xl font-black leading-none text-gray-900 dark:text-gray-100"><span>tail</span><span class="text-indigo-600">blocks</span></span>
                                        </a>
                                    </div>
                                    <div class="top-0 left-0 z-20 flex flex-col items-start justify-center w-full h-full p-4 md:p-0 md:w-3/4 md:items-center md:justify-end md:flex-row md:relative bg-white dark:bg-gray-900 md:bg-transparent lg:p-0 md:overflow-hidden md:h-24 dark:md:bg-transparent hidden">
                                        <div class="inline-flex items-center order-2 h-full font-medium md:order-1">
                                            <a href="#_" class="flex items-center justify-center w-full h-full px-4 md:px-6 text-sm font-semibold text-gray-600 dark:text-gray-200">Home</a>
                                            <a href="#_" class="flex items-center justify-center w-full h-full px-4 md:px-6 text-sm font-semibold text-gray-600 dark:text-gray-200">Features</a>
                                            <a href="#_" class="flex items-center justify-center w-full h-full px-4 md:px-6 text-sm font-semibold text-gray-600 dark:text-gray-200">Blog</a>
                                            <a href="#_" class="flex items-center justify-center w-full h-full px-4 md:px-6 text-sm font-semibold text-gray-600 dark:text-gray-200">Contact</a>
                                        </div>
                                        <div class="relative flex items-center justify-end w-full h-full mt-2 space-x-4 md:w-auto md:mt-0 md:pl-5 md:order-2">
                                            <a href="#_" class="flex items-center justify-center w-full px-6 py-3 text-sm font-medium leading-4 text-gray-900 bg-gray-200 border border-gray-300 rounded-lg md:px-3 md:w-24 lg:w-full dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600">
                                                Sign in
                                            </a>
                                            <a href="#_" class="flex items-center justify-center w-full px-6 py-3 text-sm font-medium leading-4 text-white bg-indigo-600 border border-indigo-600 rounded-lg md:px-3 md:w-24 lg:w-full dark:hover:bg-indigo-700 dark:border-indigo-700">
                                                Sign up
                                            </a>
                                        </div>
                                    </div>
                                    <div @click="showMenu = !showMenu" class="absolute right-0 flex flex-col items-center justify-center w-10 h-10 ml-auto group md:hidden">
                                        <div class="relative flex overflow-hidden items-center justify-center w-10 h-10 transform transition-all ring-0 ring-gray-200 rounded-full hover:ring-8 ring-opacity-30 duration-200 cursor-pointer">
                                            <div class="flex flex-col justify-between w-5 h-5 transform transition-all duration-300 origin-center overflow-hidden">
                                                <div class="bg-black dark:bg-gray-100 h-0.5 w-7 transform transition-all duration-300 origin-left group-hover:translate-x-10"></div>
                                                <div class="bg-black dark:bg-gray-100 h-0.5 w-1/2 rounded transform transition-all duration-300 delay-75"></div>
                                                <div class="bg-black dark:bg-gray-100 h-0.5 w-7 transform transition-all duration-300 origin-left group-hover:translate-x-10"></div>
                
                                                <div class="absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 flex w-12 group-hover:translate-x-0">
                                                    <div class="absolute bg-white dark:bg-gray-900 flex items-center justify-center w-5 h-5 transform transition-all duration-500 rotate-0 group-hover:rotate-180">
                                                        <svg class="w-3 h-3 text-gray-900 dark:text-gray-100" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M8 4l8 8-8 8"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                            <div class="container px-6 mx-auto">
                                <div class="flex flex-col items-center lg:flex-row">
                                    <div class="flex flex-col items-start justify-center w-full text-left lg:w-1/2 lg:pr-16 lg:text-left">
                                        <h1 class="my-4 text-4xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">Landing template for startups</h1>
                                        <p class="pr-0 mb-4 text-base text-gray-600 lg:text-lg xl:text-xl lg:pr-20 dark:text-white">Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.</p>
                                        <a href="#" class="flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white bg-indigo-600 border border-transparent rounded-full hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo md:py-4 md:text-lg md:px-10">
                                            Get started
                                        </a>
                                    </div>
                                    <div class="w-full lg:w-1/2">
                                        <div class="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                                            <img src="https://cdn.devdojo.com/images/november2020/hero-image.jpeg">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </body>`,
              },
              {
                id: 'iframe-block',
                label: 'Iframe Block',
                content: `
                  <iframe class="iframe-block" style="width: 100%; height: 300px;" frameborder="0"></iframe>
                `,
                category: 'Basic',
                
              },
    
        ],
      },
     
    });

    editor.on('load', () => {
      const html = editor.getHtml();
      const css = editor.getCss();
    });

    editor.Panels.addButton('options', [
      {
        id: 'save-db',
        className: 'fa fa-floppy-o',
        command: 'save-db',
        attributes: { title: 'Save DB' },
      },
    ]);

    editor.Commands.add('save-db', {
      run: (editor, sender) => {

  
        sender && sender.set('active', 0);
        const html = editor.getHtml();
        console.log(html);
        // const css = editor.getCss();
        // console.log(css);
        const content = { html };
        setTimeout(() => handleSubmit(content), 100); // Agrega un pequeño retraso antes de enviar los datos.

      },
    });

    return () => {
      editor.destroy();
    };
  }, []);

  const handleSubmit = async (content) => {


    const data = {
      content: JSON.stringify(content),
      lastUpdated: new Date().toISOString().split('T')[0],

     

    };

    try {
      const response = await fetch('https://modelo-de-negocios-backend-180g.onrender.com/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Error al guardar el contenido');
      }

      const responseData = await response.json();
      console.log("Data to be submitted:", data);
      console.log('Document ID received:', responseData._id);

      navigate(`/landingpagemeta/${responseData._id}`);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="max-w-screen-xl mx-auto px-4 mt-8">
      <h1 className="text-3xl font-bold mb-4">Nueva Landing</h1>
      
      <div className="flex space-y-4">
        <div id="blocks" style={{ width: '200px', padding: '10px', borderRight: '1px solid #ddd', marginBottom: '10px', minHeight: '100px', border: '1px solid #ccc' }}></div>
        <div ref={editorRef} style={{ flex: '1', padding: '10px', border: '1px solid #ccc', height: '500px' }}></div>
      </div>
    </div>
  );
};

export default GrapesEditor2;
