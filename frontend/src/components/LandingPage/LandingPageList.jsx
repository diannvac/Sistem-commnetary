import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function LandingPageList() {
  const [landing, setLanding] = useState([]);

  useEffect(() => {
    fetch('https://modelo-de-negocios-backend-180g.onrender.com/landing-page')
      .then(response => response.json())
      .then(data => setLanding(data))
      .catch(error => console.log(error));
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("¿Estás seguro de eliminar este landing?");
    if (!confirmDelete) {
      return; // Cancelar la operación si el usuario no confirma
    }

    try {
      await fetch(`https://modelo-de-negocios-backend-180g.onrender.com/landingView/${id}`, {
        method: 'DELETE'
      });
      setLanding(prevLanding => prevLanding.filter(landingItem => landingItem._id !== id));
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <section>
      <div className="max-w-screen-xl mx-auto px-4 mt-8">
        <h1 className="text-3xl font-bold mb-4">Lista de landings</h1>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse">
            <thead className="bg-gray-300">
              <tr>
                <th className="px-4 py-2">Título</th>
                <th className="px-4 py-2">Descripción</th>
                <th className="px-1 py-2">Eliminar</th>
                <th className="px-1 py-2">Editar</th>
                <th className="px-1 py-2">Ver</th>
              </tr>
            </thead>
            <tbody>
              {landing.map(landingItem => (
                <tr key={landingItem._id} className="border-t">
                  <td className="px-4 py-2">{landingItem.title}</td>
                  <td className="px-4 py-2">{landingItem.description}</td>
                  <td className="px-4 py-2">
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      onClick={() => handleDelete(landingItem._id)}
                    >
                      Eliminar
                    </button>
                  </td>
                  <td className="px-4 py-2">
                    <Link
                      to={`/LandingEdit/${landingItem._id}`}  // Enlace para editar usando landingItem._id
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2"
                    >
                      Editar
                    </Link>
                  </td>
                  <td className="px-4 py-2">
                    <Link
                      to={`/landingView/${landingItem.keywords.replace(/\s/g, '-')}`}  // Enlace para ver usando keywords
                      className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2"
                    >
                      Ver
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default LandingPageList;
