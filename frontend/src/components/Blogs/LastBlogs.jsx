import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// AQUI VA RL MODAL
import { FaFacebookF, FaInstagram, FaLink, FaLinkedin, FaLinkedinIn, FaShare } from 'react-icons/fa';
import { FaLinkSlash, FaXTwitter } from 'react-icons/fa6';

const Modal = ({ show, onClose, title, children }) => {
    if (!show) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg w-11/12 md:w-1/3">
                <div className="p-4 border-b">
                    <h2 className="text-xl font-bold">{title}</h2>
                </div>
                <div className="p-4">
                    {children}
                </div>
                <div className="p-4 border-t text-right">
                    <button
                        className="bg-blue-500 text-white py-2 px-4 rounded"
                        onClick={onClose}
                    >
                        Cerrar
                    </button>
                </div>
            </div>
        </div>
    );
};
// AQUI TERMINA

function LastBlogs() {
    const [notes, setNotes] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch("https://modelo-de-negocios-backend-180g.onrender.com/")
            // const response = await fetch("http://localhost:3001/")
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            const json = await response.json();
            setNotes(json);
        } catch (error) {
            console.error('Error fetching BLOGS:', error);
        }

    };

    // Filtra las notas según el término de búsqueda
    const filteredNotes = notes.filter(note =>
        note.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // AQUI EMPIEZA
    const [showModal, setShowModal] = useState(false);
    const [copied, setCopied] = useState(false);
    const [urlModal, setUrlModal] = useState("")
    const handleShowModal = (url) => {
        setUrlModal(url)
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleCopy = (urlCopy) => {
        const url = urlCopy;
        navigator.clipboard.writeText(url).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }).catch(err => {
            console.error('Error al copiar al portapapeles:', err);
        });
    };

    // AQUI TERMINA

    return (
        <section className="py-16">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">Últimos Blogs</h2>

                {/* Campo de búsqueda */}
                <div className="max-w-screen-xl mx-auto px-4 mt-8">
                    <input
                        type="text"
                        placeholder="Buscar blogs..."
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                        className="mb-4 px-4 py-2 border rounded-md"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredNotes.slice(-10).map((note) => (
                        <div key={note._id} className="bg-white rounded-lg shadow-lg">
                            <img src={note.imageUrl} alt="Imagen de blog" className="rounded-t-lg object-cover h-64 w-full" />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">{note.title}</h3>
                                <p className="text-lg mb-2">{note.author}</p>
                                <div className="flex justify-between">
                                    <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                                        <Link to={`/blog/${encodeURIComponent(note.keywords.replace(/\s/g, '-'))}`}>
                                            Ver más
                                        </Link>
                                    </button>
                                    <button
                                        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded flex items-center space-x-2  hover:bg-blue-600 transition-colors duration-300"
                                        onClick={() => handleShowModal(`https://www.maestriaennegociosdigitales.com/blog/${encodeURIComponent(note.keywords.replace(/\s/g, '-'))}`)}
                                    >
                                        <FaShare />
                                        <span>Compartir</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}


                    <Modal show={showModal} onClose={handleCloseModal} title="Compartir">
                        <div className='w-full flex justify-around items-center gap-x-4 p-4'>
                            <div className="w-full flex justify-between items-center">
                                <a
                                    href={`https://www.facebook.com/sharer/sharer.php?u=${urlModal}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="icon w-14 h-14 p-3.5 bg-blue-700 text-white rounded-full flex items-center justify-center"
                                >
                                    <FaFacebookF size={24} />
                                </a>

                            </div>

                            <div className="w-full flex justify-between items-center">
                                <a
                                    href={`https://twitter.com/share?url=${urlModal}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="icon w-14 h-14 p-3.5 bg-black text-white rounded-full flex items-center justify-center"
                                >
                                    <FaXTwitter size={24} />
                                </a>
                            </div>
                            <div className="w-full flex justify-between items-center">
                                <a
                                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${urlModal}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="icon w-14 h-14 p-3.5 bg-blue-900 text-white rounded-full flex items-center justify-center"
                                >
                                    <FaLinkedinIn size={24} />
                                </a>
                            </div>
                            <div className="w-full flex justify-between items-center">
                                <button
                                    className="icon w-14 h-14 p-3.5 bg-purple-800 text-white rounded-full flex items-center justify-center"
                                    onClick={() => handleCopy(urlModal)}
                                >
                                    <FaLink size={24} />
                                </button>
                                {copied && <span style={{ marginLeft: '10px', color: 'green' }}>¡Copiado!</span>}
                            </div>
                        </div>
                    </Modal>
                </div>
            </div>
        </section >
    );
}

export default LastBlogs;
