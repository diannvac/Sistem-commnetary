import React, { useState, useEffect } from 'react';
import { useQuill } from 'react-quilljs';
import { useNavigate, useParams } from 'react-router-dom';
import toolbar from '../toolbar';
import 'quill/dist/quill.snow.css';
import {storage} from '../api/firebase.config';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

function Edit() {
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
  const [lastUpdated, setLastUpdated] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const { quill, quillRef } = useQuill({ modules: { toolbar: toolbar } });
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const encodedKeywords = encodeURIComponent(params.keywords.replace(/-/g, ' '));
        const res = await fetch(`https://modelo-de-negocios-backend-180g.onrender.com/blog/${encodedKeywords}`);
        const note = await res.json();
        quill.setContents(JSON.parse(note.content));
        setTitle(note.title);
        setDescription(note.description);
        setKeywords(note.keywords);
        setCanonicalUrl(note.canonicalUrl);
        setAuthor(note.author);
        setQuestion1(note.question1);
        setAnswer1(note.answer1);
        setQuestion2(note.question2);
        setAnswer2(note.answer2);
        setQuestion3(note.question3);
        setAnswer3(note.answer3);
        setLastUpdated(note.lastUpdated);
        setImageUrl(note.imageUrl);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (params.keywords && quill) {
      fetchData();
    }
  }, [params.keywords, quill]);

  const handleChange = (event, setter) => {
    setter(event.target.value);
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
    const data = {
      title: title,
      description: description,
      keywords: keywords,
      canonicalUrl: canonicalUrl,
      author: author,
      question1: question1,
      answer1: answer1,
      question2: question2,
      answer2: answer2,
      question3: question3,
      answer3: answer3,
      lastUpdated: new Date().toISOString().split('T')[0],
      content: JSON.stringify(quill.getContents()),
      imageUrl: imageUrl
    };
    try {
      await fetch(`https://modelo-de-negocios-backend-180g.onrender.com/edit/${encodeURIComponent(params.keywords.replace(/-/g, ' '))}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      navigate('/administrator');
    } catch (error) {
      console.error('Error updating note:', error);
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 mt-8">
      <h1 className="text-3xl font-bold mb-4">Editar Blog</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-gray-700">
            Título:
          </label>
          <input
            type="text"
            placeholder="Título"
            value={title}
            onChange={(e) => handleChange(e, setTitle)}
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
            onChange={(e) => handleChange(e, setDescription)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="keywords" className="block text-gray-700">
            Palabras clave:
          </label>
          <input
            type="text"
            placeholder="Palabras clave"
            value={keywords}
            onChange={(e) => handleChange(e, setKeywords)}
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
            onChange={(e) => handleChange(e, setCanonicalUrl)}
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
            onChange={(e) => handleChange(e, setAuthor)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="question1" className="block text-gray-700">
            Pregunta 1:
          </label>
          <input
            type="text"
            placeholder="Pregunta 1"
            value={question1}
            onChange={(e) => handleChange(e, setQuestion1)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="answer1" className="block text-gray-700">
            Respuesta 1:
          </label>
          <input
            type="text"
            placeholder="Respuesta 1"
            value={answer1}
            onChange={(e) => handleChange(e, setAnswer1)}
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
            onChange={(e) => handleChange(e, setQuestion2)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="answer2" className="block text-gray-700">
            Respuesta 2:
          </label>
          <input
            type="text"
            placeholder="Respuesta 2"
            value={answer2}
            onChange={(e) => handleChange(e, setAnswer2)}
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
            onChange={(e) => handleChange(e, setQuestion3)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="answer3" className="block text-gray-700">
            Respuesta 3:
          </label>
          <input
            type="text"
            placeholder="Respuesta 3"
            value={answer3}
            onChange={(e) => handleChange(e, setAnswer3)}
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

export default Edit;
