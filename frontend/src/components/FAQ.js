import React, { useState, useEffect } from 'react';

const FAQ = ({ question1, answer1, question2, answer2, question3, answer3 }) => {

  const faqData = [
    { question: question1, answer: answer1 },
    { question: question2, answer: answer2 },
    { question: question3, answer: answer3 }
  ];

  // Generar datos estructurados JSON-LD para las preguntas frecuentes
  useEffect(() => {
    const faqStructuredData = {
      "@context": "http://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqData.map(({ question, answer }) => ({
        "@type": "Question",
        "name": question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": answer
        }
      }))
    };

    // Agregar datos estructurados JSON-LD al head del documento
    const scriptFAQ = document.createElement('script');
    scriptFAQ.type = 'application/ld+json';
    scriptFAQ.textContent = JSON.stringify(faqStructuredData);
    document.head.appendChild(scriptFAQ);

    return () => {
      document.head.removeChild(scriptFAQ);
    };
  }, [faqData]);

  // Estado para manejar el acordeón
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-8">Preguntas Frecuentes</h2>
        <dl className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqData.map((item, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6">
              <h3 
                className="text-xl font-semibold mb-4 cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                {item.question}
                &#11167; </h3>
              {activeIndex === index && (
                <p className="text-gray-700">{item.answer}</p>
              )}
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default FAQ;
