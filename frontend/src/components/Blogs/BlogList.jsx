import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch('https://modelo-de-negocios-backend-180g.onrender.com')
    // fetch("http://localhost:3001/")
      .then(response => {
        console.log("Response Blogs", response)
        console.log("Response JSON", response.json())
      })
      .then(data => setBlogs(data))
      .catch(error => {
        console.log("Error Blogs: ", error)
      });
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("¿Estás seguro de eliminar este blog?");
    if (!confirmDelete) {
      return;
    }

    try {
      await fetch(`https://modelo-de-negocios-backend-180g.onrender.com/blog/${id}`, {
        method: 'DELETE'
      });
      setBlogs(prevBlogs => prevBlogs.filter(blog => blog._id !== id));
    } catch (error) {
      console.log(error.message);
    }
  };

  // Filtra los blogs según el término de búsqueda
  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <section>
        <div className="max-w-screen-xl mx-auto px-4 mt-8">
          <h1 className="text-3xl font-bold mb-4">Lista de Blogs</h1>

          {/* Campo de búsqueda */}
          <input
            type="text"
            placeholder="Buscar blogs..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="mb-4 px-4 py-2 border rounded-md"
          />

          <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse">
              <thead className='bg-gray-300'>
                <tr>
                  <th className="px-4 py-2">Título</th>
                  <th className="px-4 py-2">Descripción</th>
                  <th className="px-1 py-2">Eliminar</th>
                  <th className="px-1 py-2">Editar</th>
                </tr>
              </thead>
              <tbody>
                {filteredBlogs.slice(-10).map(blog => (
                  <tr key={blog._id} className="border-t">
                    <td className="px-4 py-2">{blog.title}</td>
                    <td className="px-4 py-2">{blog.description}</td>
                    <td className="px-4 py-2">
                      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => handleDelete(blog._id)}>
                        Eliminar
                      </button>
                    </td>
                    <td className="px-4 py-2">
                      <Link to={`/edit/${encodeURIComponent(blog.keywords.replace(/\s/g, '-'))}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2">
                        Editar
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogList;
