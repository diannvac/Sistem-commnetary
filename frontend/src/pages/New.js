import React, { useState } from 'react';
import { useQuill } from 'react-quilljs';
import { useNavigate } from 'react-router-dom';
import toolbar from '../toolbar';
import 'quill/dist/quill.snow.css';
import {storage} from '../api/firebase.config';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

function New() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [keywords, setKeywords] = useState('');
  const [canonicalUrl, setCanonicalUrl] = useState('');
  const [author, setAuthor] = useState('');
  const [question1, setQuestion1] = useState('');
  const [answer1, setAnswer1] = useState('');
  const [question2, setQuestion2] = useState('');
  const [answer2, setAnswer2] = useState('');
  const [question3, setQuestion3] = useState('');
  const [answer3, setAnswer3] = useState('');
  const [lastUpdated] = useState(new Date().toISOString().split('T')[0]);
  const { quill, quillRef } = useQuill({ modules: { toolbar: toolbar } });
  const [imageUrl, setImageUrl] = useState('');
  const [imageRedirectUrl, setImageRedirectUrl] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    const imageRef = ref(storage, 'Blog/' + file.name);
    try {
      const snapshot = await uploadBytes(imageRef, file);
      const url = await getDownloadURL(snapshot.ref);
      setImageUrl(url);
    } catch (error) {
      console.error('Error uploading image: ', error);
    }
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    //hdsgshdfsdjfds

    const data = {
      title: title,
      description: description,
      content: JSON.stringify(quill.getContents()),
      keywords: keywords,
      canonicalUrl: canonicalUrl,
      author: author,
      question1: question1,
      answer1: answer1,
      question2: question2,
      answer2: answer2,
      question3: question3,
      answer3: answer3,
      imageUrl: imageUrl,
      lastUpdated: new Date().toISOString().split('T')[0],
      
    };
    try {
      await fetch('https://modelo-de-negocios-backend-180g.onrender.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      // Agregar datos estructurados JSON-LD al head del documento
      const blogStructuredData = {
        '@context': 'http://schema.org',
        '@type': 'BlogPosting',
        headline: data.title,
        description: data.description,
        keywords: data.keywords,
        url: data.canonicalUrl,
        datePublished: new Date().toISOString(),
        author: {
          '@type': 'Person',
          name: data.author,
        },
        // Incluir FAQ dentro de la estructura del blog
      "mainEntityOfPage": {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": data.question1, // Asegurarse de que 'name' esté presente
            "acceptedAnswer": {
              "@type": "Answer",
              "text": data.answer1 // Asegurarse de que 'text' esté presente
            }
          },
          {
            "@type": "Question",
            "name": data.question2, 
            "acceptedAnswer": {
              "@type": "Answer",
              "text": data.answer2
            }
          },
          {
            "@type": "Question",
            "name": data.question3, 
            "acceptedAnswer": {
              "@type": "Answer",
              "text": data.answer3
            }
          }
        ]
      }
    };

      const scriptBlog = document.createElement('script');
      scriptBlog.type = 'application/ld+json';
      scriptBlog.textContent = JSON.stringify(blogStructuredData);
      document.head.appendChild(scriptBlog);

      navigate('/administrator');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 mt-8">
      <h1 className="text-3xl font-bold mb-4">Nuevo Blog</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-gray-700">
            Título:
          </label>
          <input
            type="text"
            placeholder="Título"
            value={title}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-gray-700">
            Descripción:
          </label>
          <input
            type="text"
            placeholder="Descripción"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="keywords" className="block text-gray-700">
            Keywords:
          </label>
          <input
            type="text"
            placeholder="Keywords"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="canonicalUrl" className="block text-gray-700">
            URL canónica:
          </label>
          <input
            type="text"
            placeholder="URL canónica"
            value={canonicalUrl}
            onChange={(e) => setCanonicalUrl(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="author" className="block text-gray-700">
            Autor:
          </label>
          <input
            type="text"
            placeholder="Autor"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="question1" className="block text-gray-700">
            Pregunta:
          </label>
          <input
            type="text"
            placeholder="Pregunta"
            value={question1}
            onChange={(e) => setQuestion1(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="answer1" className="block text-gray-700">
            Respuesta:
          </label>
          <input
            type="text"
            placeholder="Respuesta"
            value={answer1}
            onChange={(e) => setAnswer1(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="question2" className="block text-gray-700">
            Pregunta 2:
          </label>
          <input
            type="text"
            placeholder="Pregunta 2"
            value={question2}
            onChange={(e) => setQuestion2(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="answer2" className="block text-gray-700">
            Respuesta:
          </label>
          <input
            type="text"
            placeholder="Respuesta"
            value={answer2}
            onChange={(e) => setAnswer2(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="question3" className="block text-gray-700">
            Pregunta 3:
          </label>
          <input
            type="text"
            placeholder="Pregunta 3"
            value={question3}
            onChange={(e) => setQuestion3(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="answer3" className="block text-gray-700">
            Respuesta:
          </label>
          <input
            type="text"
            placeholder="Respuesta"
            value={answer3}
            onChange={(e) => setAnswer3(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>

    

        <div>
          <label htmlFor="image" className="block text-gray-700">
            Imagen:
          </label>
          <input
            type="file"
            id="image"
            onChange={handleImageUpload}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>
        
        
        {/* Editor Quill */}
        <div className="mb-6">
          <label className="block mb-2 text-gray-700">Contenido:</label>
          <div ref={quillRef} style={{ height: '400px' }} className="border border-gray-300 rounded">
            {/* Editor Quill */}
          </div>
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default New;
