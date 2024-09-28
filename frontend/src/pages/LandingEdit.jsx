import React, { useEffect, useRef } from 'react';
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';
import 'grapesjs-preset-webpage/dist/index';
import 'grapesjs-preset-newsletter';
import { useNavigate, useParams } from 'react-router-dom';

const LandingEdit = () => {
  const editorRef = useRef(null);
  const navigate = useNavigate();
  const { id } = useParams(); // Usa 'id' para obtener la página
  useEffect(() => {
    if (!editorRef.current) return;

    // Inicializar GrapesJS
    const editor = grapesjs.init({
      container: editorRef.current,
      height: '100vh',
      width: 'auto',
      storageManager: {
        type: 'remote',
        stepsBeforeSave: 1,
        urlStore: `https://modelo-de-negocios-backend-180g.onrender.com/landing-page/${id}`,
        urlLoad: `https://modelo-de-negocios-backend-180g.onrender.com/load/${id}`, // Cargar página por ID
        params: {},
        headers: {},
       
      },
      canvas: {
        styles: ['https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css'],
      },
      styleManager: {
        sectors: [{
          name: 'General',
          buildProps: ['float', 'display', 'position', 'top', 'right', 'left', 'bottom'],
        }, {
          name: 'Dimension',
          open: false,
          buildProps: ['width', 'height', 'max-width', 'min-height', 'margin', 'padding'],
        }, {
          name: 'Typography',
          open: false,
          buildProps: ['font-family', 'font-size', 'font-weight', 'letter-spacing', 'color', 'line-height', 'text-align', 'text-decoration', 'text-shadow'],
        }, {
          name: 'Decorations',
          open: false,
          buildProps: ['background-color', 'border-radius', 'border', 'box-shadow', 'background'],
        }, {
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
              <header class="header-block" style="text-align: center; padding: 50px 20px; background: #f0f0f0;">
                <h1 style="font-size: 2.5em; margin-bottom: 10px;">Welcome to Our Website</h1>
                <p style="font-size: 1.2em; color: #777;">Your success starts here</p>
              </header>
            `,
          },
          // Otros bloques...
        ],
      },
    });

      // Cargar contenido de MongoDB directamente aquí
    fetch(`https://modelo-de-negocios-backend-180g.onrender.com/load/${id}`)
    .then(response => response.json())
    .then(jsonData => {
      
      editor.addComponents(jsonData.html);
      editor.addStyle(jsonData.css);
    })
    .catch(error => console.error('Error al cargar el contenido:', error));

    // Configurar el botón de guardar
    editor.Panels.addButton('options', [
      {
        id: 'save-db',
        className: 'fa fa-floppy-o',
        command: 'save-db',
        attributes: { title: 'Guardar en DB' },
      },
    ]);

    editor.Commands.add('save-db', {
      run: (editor, sender) => {
        sender && sender.set('active', 0);
        const html = editor.getHtml();
        const css = editor.getCss();
        const content = { html, css };
        setTimeout(() => handleSubmit(content), 100);
      },
    });

    // Limpiar el editor al desmontar el componente
    return () => {
      editor.destroy();
    };
  }, [id]);

  // Manejar el envío de los datos del proyecto
  const handleSubmit = async (content) => {
    const { html, css } = content;

    const cleanHtml = html.replace(/\\/g, '');
    const cleanCss = css.replace(/\\"/g, '"');

    const data = {
      html: cleanHtml,
      css: cleanCss,
      lastUpdated: new Date().toISOString().split('T')[0],
    };

    try {
      const response = await fetch(`https://modelo-de-negocios-backend-180g.onrender.com/landing-page/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Error al guardar el contenido');
      }

      const responseData = await response.json();
      navigate(`/landingpagemeta/${responseData._id}`);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 mt-8">
      <h1 className="text-3xl font-bold mb-4">Editar Landing Page</h1>
      <div className="flex space-y-4">
        <div id="blocks" style={{ width: '200px', padding: '10px', borderRight: '1px solid #ddd', marginBottom: '10px', minHeight: '100px', border: '1px solid #ccc' }}></div>
        <div ref={editorRef} style={{ flex: '1', padding: '10px', border: '1px solid #ccc', height: '500px' }}></div>
      </div>
    </div>
  );
};

export default LandingEdit;
