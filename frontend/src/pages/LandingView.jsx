import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import ReactGA from 'react-ga4';

function LandingView() {
  const params = useParams();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [htmlContent, setHtmlContent] = useState('');
  const [cssContent, setCssContent] = useState('');
  const [keywords, setKeywords] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const encodedTitle = encodeURIComponent(params.keywords.replace(/-/g, ' '));
        const response = await fetch(`https://modelo-de-negocios-backend-180g.onrender.com/landingView/${encodedTitle}`);
        const data = await response.json();

        console.log('Fetched Data:', data);

        setTitle(data.title);
        setDescription(data.description);
        setKeywords(data.keywords);
        setHtmlContent(decodeHtml(data.html));
        setCssContent(decodeCss(data.css));

        ReactGA.send({
          hitType: 'pageview',
          page: window.location.pathname,
          title: data.title,
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (params.keywords) {
      fetchData();
    }
  }, [params.keywords]);

  useEffect(() => {
    const blogStructuredData = {
      "@context": "http://schema.org",
      "@type": "BlogPosting",
      "headline": title,
      "description": description,
      "keywords": keywords,
    };

    const scriptBlog = document.createElement('script');
    scriptBlog.type = 'application/ld+json';
    scriptBlog.textContent = JSON.stringify(blogStructuredData);
    document.head.appendChild(scriptBlog);

    return () => {
      document.head.removeChild(scriptBlog);
    };
  }, [title, description, keywords]);

  const decodeHtml = (html) => {
    const txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  };

  const decodeCss = (css) => {
    return css.replace(/\\(["'\\])/g, '$1');
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta httpEquiv="Content-Language" content="es" />
        <style>{cssContent}</style>
      </Helmet>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </>
  );
}

export default LandingView;
