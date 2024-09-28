import React, { useEffect, useRef, useState } from 'react';
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';
import 'grapesjs-preset-webpage/dist/index';
import 'grapesjs-preset-newsletter';
import { useNavigate, useParams } from 'react-router-dom';

const GrapesEditor = () => {
  const editorRef = useRef(null);
  const navigate = useNavigate();
  const { id } = useParams();

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
              <header class="header-block" style="text-align: center; padding: 50px 20px; background: #f0f0f0;">
                <h1 style="font-size: 2.5em; margin-bottom: 10px;">Welcome to Our Website</h1>
                <p style="font-size: 1.2em; color: #777;">Your success starts here</p>
              </header>
            `
          },
          // Banner Block
          {
            id: 'banner-block',
            label: 'Banner Block',
            content: `
              <section class="banner-block" style="position: relative; text-align: center; padding: 100px 20px; background: url('https://via.placeholder.com/1500x500') no-repeat center center; background-size: cover;">
                <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: white;">
                  <h2 style="font-size: 2em;">Achieve Your Dreams</h2>
                  <p style="font-size: 1.2em;">Join us and make it happen</p>
                  <button style="padding: 10px 20px; background: #28a745; color: white; border: none; border-radius: 5px; cursor: pointer;">Get Started</button>
                </div>
              </section>
            `
          },
          // Features Block
          {
            id: 'features-block',
            label: 'Features Block',
            content: `
              <section class="features-block" style="padding: 50px 20px; background: #fff;">
                <div style="text-align: center; margin-bottom: 30px;">
                  <h3 style="font-size: 2em;">Our Features</h3>
                  <p style="color: #777;">What makes us different</p>
                </div>
                <div style="display: flex; justify-content: space-around;">
                  <div style="width: 30%; padding: 20px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
                    <h4 style="font-size: 1.5em;">Feature 1</h4>
                    <p style="color: #777;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in venenatis enim.</p>
                  </div>
                  <div style="width: 30%; padding: 20px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
                    <h4 style="font-size: 1.5em;">Feature 2</h4>
                    <p style="color: #777;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in venenatis enim.</p>
                  </div>
                  <div style="width: 30%; padding: 20px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
                    <h4 style="font-size: 1.5em;">Feature 3</h4>
                    <p style="color: #777;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in venenatis enim.</p>
                  </div>
                </div>
              </section>
            `
          },
          // Testimonials Block
          {
            id: 'testimonials-block',
            label: 'Testimonials Block',
            content: `
              <section class="testimonials-block" style="padding: 50px 20px; background: #f9f9f9;">
                <div style="text-align: center; margin-bottom: 30px;">
                  <h3 style="font-size: 2em;">What Our Clients Say</h3>
                  <p style="color: #777;">Testimonials from our satisfied customers</p>
                </div>
                <div style="display: flex; justify-content: space-around;">
                  <div style="width: 30%; padding: 20px; background: white; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
                    <p style="color: #777;">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in venenatis enim."</p>
                    <h4 style="font-size: 1.2em; margin-top: 10px;">- John Doe</h4>
                  </div>
                  <div style="width: 30%; padding: 20px; background: white; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
                    <p style="color: #777;">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in venenatis enim."</p>
                    <h4 style="font-size: 1.2em; margin-top: 10px;">- Jane Smith</h4>
                  </div>
                  <div style="width: 30%; padding: 20px; background: white; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
                    <p style="color: #777;">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in venenatis enim."</p>
                    <h4 style="font-size: 1.2em; margin-top: 10px;">- Bob Johnson</h4>
                  </div>
                </div>
              </section>
            `
          },
          // Call to Action Block
          {
            id: 'cta-block',
            label: 'Call to Action Block',
            content: `
              <section class="cta-block" style="padding: 50px 20px; background: #28a745; color: white; text-align: center;">
                <h3 style="font-size: 2em; margin-bottom: 20px;">Ready to get started?</h3>
                <p style="font-size: 1.2em;">Join us today and start achieving your dreams</p>
                <button style="padding: 10px 20px; background: #fff; color: #28a745; border: none; border-radius: 5px; cursor: pointer; margin-top: 20px;">Sign Up Now</button>
              </section>
            `
          },
          // Footer Block
          {
            id: 'footer-block',
            label: 'Footer Block',
            content: `
              <footer class="footer-block" style="padding: 20px; background: #333; color: white; text-align: center;">
                <p>&copy; 2023 Your Company. All rights reserved.</p>
                <p style="font-size: 0.9em;">Follow us on:</p>
                <div style="margin-top: 10px;">
                  <a href="#" style="color: white; margin-right: 10px;"><i class="fa fa-facebook"></i></a>
                  <a href="#" style="color: white; margin-right: 10px;"><i class="fa fa-twitter"></i></a>
                  <a href="#" style="color: white; margin-right: 10px;"><i class="fa fa-instagram"></i></a>
                </div>
              </footer>
            `
          },
          {
            id: 'iframe-block',
            label: 'Iframe Block',
            content: `
             <iframe class="airtable-embed" src="" frameborder="0" onmousewheel="" width="100%" height="533" style="background: transparent; border: 1px solid #ccc;"></iframe>
            `
          },
          {
            id: 'form-block',
            label: 'Form Block',
            content: `
              <form class="form-block" style="padding: 20px; background: #f9f9f9; border: 1px solid #ddd; border-radius: 5px;">
                <h2 style="font-size: 1.5em; margin-bottom: 20px;">Contact Us</h2>
                <label for="name" style="display: block; margin-bottom: 10px;">
                  Name:
                  <input type="text" id="name" name="name" style="width: 100%; padding: 10px; margin-top: 5px; border: 1px solid #ccc; border-radius: 5px;">
                </label>
                <label for="email" style="display: block; margin-bottom: 10px;">
                  Email:
                  <input type="email" id="email" name="email" style="width: 100%; padding: 10px; margin-top: 5px; border: 1px solid #ccc; border-radius: 5px;">
                </label>
                <label for="message" style="display: block; margin-bottom: 10px;">
                  Message:
                  <textarea id="message" name="message" rows="5" style="width: 100%; padding: 10px; margin-top: 5px; border: 1px solid #ccc; border-radius: 5px;"></textarea>
                </label>
                <button type="submit" style="padding: 10px 20px; background: #333; color: white; border: none; border-radius: 5px; cursor: pointer;">Send Message</button>
              </form>
            `
          },
      
          
        ],
      },
    });

    editor.BlockManager.add('block-id', {
      label: 'Block Label', // Nombre del bloque
      content: '<div class="your-class">Content here</div>', // HTML que se añadirá al lienzo
      category: 'Category Label', // Categoría del bloque
      attributes: { class: 'gjs-block-section' }, // Atributos del bloque
  });
  
  // Ejemplo de algunos bloques predeterminados
  editor.BlockManager.add('section', {
      label: '<b>Section</b>',
      content: '<section><h1>Put here your title</h1></section>',
      category: 'Basic',
      attributes: { class: 'gjs-block-section' }
  });
  
  editor.BlockManager.add('text', {
      label: 'Text',
      content: '<div data-gjs-type="text">Insert your text here</div>',
      category: 'Basic',
      attributes: { class: 'gjs-fonts gjs-f-text' }
  });
  
  editor.BlockManager.add('image', {
      label: 'Image',
      content: {
          type: 'image',
          activeOnRender: 1
      },
      category: 'Basic',
      attributes: { class: 'gjs-fonts gjs-f-image' }
  });
  
  editor.BlockManager.add('column1', {
      label: '1 Column',
      content: '<div class="row"><div class="col-12">1 Column</div></div>',
      category: 'Layout',
      attributes: { class: 'gjs-fonts gjs-f-b1' }
  });
  
  editor.BlockManager.add('column2', {
      label: '2 Columns',
      content: '<div class="row"><div class="col-6">1 Column</div><div class="col-6">2 Column</div></div>',
      category: 'Layout',
      attributes: { class: 'gjs-fonts gjs-f-b2' }
  });
  
  editor.BlockManager.add('column3', {
      label: '3 Columns',
      content: '<div class="row"><div class="col-4">1 Column</div><div class="col-4">2 Column</div><div class="col-4">3 Column</div></div>',
      category: 'Layout',
      attributes: { class: 'gjs-fonts gjs-f-b3' }
  });
  
  editor.BlockManager.add('three-columns-with-images', {
    label: 'Three Columns with Images',
    content: `
      <div class="container" style="max-width: 1200px; margin: auto;">
        <div class="row align-items-center">
          <div class="col-md-4">
            <div class="image-left" style="background: #f8f9fa; padding: 20px; border-radius: 8px; text-align: center;">
              <!-- Left Image -->
              <img src="https://via.placeholder.com/300x200" alt="Left Image" class="img-fluid">
            </div>
          </div>
          <div class="col-md-4 text-center">
            <div class="text-center-content" style="background: #ffffff; padding: 20px; border-radius: 8px;">
              <h1 style="color: #333; font-size: 2rem; margin-bottom: 10px;">Main Heading</h1>
              <p style="color: #666; font-size: 1.25rem;">Subheading or Description</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="image-right" style="background: #f8f9fa; padding: 20px; border-radius: 8px; text-align: center;">
              <!-- Right Image -->
              <img src="https://via.placeholder.com/300x200" alt="Right Image" class="img-fluid">
            </div>
          </div>
        </div>
      </div>
    `,
    category: 'Layout',
    attributes: { class: 'gjs-fonts gjs-f-b2' }
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
        const css = editor.getCss();
        console.log(css);
        const content = { html, css };
        setTimeout(() => handleSubmit(content), 100);
      },
    });

    

    return () => {
      
    };
  }, []);

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

export default GrapesEditor;
