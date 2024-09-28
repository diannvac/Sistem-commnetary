import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useQuill } from 'react-quilljs';
import { useParams } from 'react-router-dom';
import 'quill/dist/quill.snow.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Comments from '../components/Comments';
import FAQ from '../components/FAQ';
import ReactGA from 'react-ga4';

function View() {
  const params = useParams();
  const { quill, quillRef } = useQuill({
    readOnly: true,
    modules: { toolbar: false }
  });
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [keywords, setKeywords] = useState('');
  const [lastUpdated, setLastUpdated] = useState('');
  const [canonicalUrl, setCanonicalUrl] = useState('');
  const [author, setAuthor] = useState('');
  const [question1, setQuestion1] = useState('');
  const [answer1, setAnswer1] = useState('');
  const [question2, setQuestion2] = useState('');
  const [answer2, setAnswer2] = useState('');
  const [question3, setQuestion3] = useState('');
  const [answer3, setAnswer3] = useState('');
  const [altText, setAltText] = useState('');
  const [imageUrl, setImageUrl] = useState('');


  const titleParam = encodeURIComponent(params.keywords.replace(/-/g, ' '));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const encodedTitle = encodeURIComponent(params.keywords.replace(/-/g, ' '));
        const response = await fetch(`https://modelo-de-negocios-backend-180g.onrender.com/blog/${encodedTitle}`);
        // const response = await fetch(`http://localhost:3001/blog/${encodedTitle}`);
        const data = await response.json();
        setTitle(data.title);
        setDescription(data.description);
        setContent(data.content);
        setKeywords(data.keywords);
        setLastUpdated(data.lastUpdated);
        setCanonicalUrl(data.canonicalUrl);
        setAuthor(data.author);
        setQuestion1(data.question1);
        setAnswer1(data.answer1);
        setQuestion2(data.question2);
        setAnswer2(data.answer2);
        setQuestion3(data.question3);
        setAnswer3(data.answer3);
        setAltText(data.altText);
        setImageUrl(data.imageUrl);

        if (quill) {
          quill.setContents(JSON.parse(data.content));
          setAltTextForImages();
        }

        // Envía evento de pageview personalizado en cada renderizado
        ReactGA.send({
          hitType: 'pageview',
          page: window.location.pathname,
          title: data.title
        });

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (params.keywords) {
      fetchData();
    }
  }, [params.keywords, quill]);

  const setAltTextForImages = () => {
    const editor = quillRef.current;
    if (editor) {
      const images = editor.querySelectorAll('img');
      images.forEach((image) => {
        // Establecer aquí el texto alternativo deseado para cada imagen
        image.alt = altText || 'Imagen de blog';
      });
    }
  };

  // Generar datos estructurados JSON-LD para la entrada del blog
  useEffect(() => {
    if (question1 || question2 || question3) {
      const blogStructuredData = {
        "@context": "http://schema.org",
        "@type": "BlogPosting",
        "headline": title,
        "description": description,
        "keywords": keywords,
        "url": canonicalUrl,
        "datePublished": lastUpdated,
        "author": {
          "@type": "Person",
          "name": author
        },
        // Incluir FAQ dentro de la estructura del blog si existen preguntas
        "mainEntityOfPage": {
          "@type": "FAQPage",
          "mainEntity": [
            ...(question1 ? [{
              "@type": "Question",
              "name": question1,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": answer1
              }
            }] : []),
            ...(question2 ? [{
              "@type": "Question",
              "name": question2,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": answer2
              }
            }] : []),
            ...(question3 ? [{
              "@type": "Question",
              "name": question3,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": answer3
              }
            }] : [])
          ]
        }
      };

      const scriptBlog = document.createElement('script');
      scriptBlog.type = 'application/ld+json';
      scriptBlog.textContent = JSON.stringify(blogStructuredData);
      document.head.appendChild(scriptBlog);

      return () => {
        document.head.removeChild(scriptBlog);
      };
    }
  }, [title, description, keywords, canonicalUrl, lastUpdated, author, question1, question2, question3, answer1, answer2, answer3]);

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="lastUpdated" content={lastUpdated} />
        <meta name="author" content={author} />
        <meta httpEquiv="Content-Language" content="es" />
        <link rel="canonical" href={`https://www.maestriaennegociosdigitales.com/blog/${keywords}`} />
      </Helmet>

      <Header />

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-semibold mb-6">{title}</h1>
            <p className="text-gray-600 mb-6">Autor: {author}</p>
            <p className="text-gray-600 mb-6">Fecha de Publicación: {lastUpdated}</p>
            <div className="mb-6">
              <img src={imageUrl} alt="Imagen del Artículo" className="w-full h-auto rounded-lg" />
            </div>
            <div className="prose">
              <article className='editor' ref={quillRef}></article>
            </div>
          </div>
        </div>
      </section>

      {(question1 || question2 || question3) && (
        <FAQ 
          question1={question1} answer1={answer1} 
          question2={question2} answer2={answer2} 
          question3={question3} answer3={answer3}
        />
      )}
      <Comments title={titleParam} />
      <Footer />
    </>
  );
}

export default View;
