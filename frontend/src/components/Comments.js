import React, { useEffect, useState } from 'react';
import { collection, addDoc, getDocs, query, where, deleteDoc, doc, getDoc } from "firebase/firestore";
import { db } from '../api/firebase.config';
import TimeComponent from './TimeComments.js';
import { FaRegLaugh, FaTrash } from "react-icons/fa";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import HeartComponent from './Reaccion.js';
import { FaRegTrashCan } from "react-icons/fa6";


function Comment(props) {
  const [listaComentarios, setListaComentarios] = useState([]);
  const [count, setCount] = useState(0);
  const [comment, setComment] = useState("");
  const [user, setUser] = useState({});
  const [showEmoji, setShowEmoji] = useState(false);

  useEffect(() => {
    const userData = JSON.parse(sessionStorage.getItem("user"));
    if (userData) {
      setUser(userData);
    }

    console.log("TITLE CARGADO DEL PAPÁ", props.title)
  }, []);

  useEffect(() => {
    Lista();
  }, [count]);

  const send = async (e) => {
    if (!user.email) {
      localStorage.setItem('redirectUrl', window.location.href);
      alert("Debes iniciar sesión para publicar un comentario.");
      window.location = '/loginUser';
      return;
    }

    let json = {
      comment: comment,
      name: user.displayName,
      photoURL: user.photoURL,
      email: user.email,
      date: new Date(),
      path: props.title,
      likeReaction: 0
    };

    console.log("j", json)

    try {
      const docRef = await addDoc(collection(db, "Comentarios"), json);
      setCount(count + 1);
      limpiarForm();
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const Lista = async () => {
    setListaComentarios([]);
    // const data = await getDocs(collection(db, "Comentarios"));
    const q = query(
      collection(db, "Comentarios"),
      where("path", "==", props.title)
    )
    const data = await getDocs(q);
    // console.log(data)
    const newData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    console.log(newData)
    setListaComentarios(newData);
  };

  const limpiarForm = () => {
    setComment("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    send();
  };

  const addEmoji = (e) => {
    const sym = e.unified.split("_");
    const codeArray = [];
    sym.forEach((el) => codeArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codeArray);
    setComment(comment + emoji);
  };

  const eliminarComentario = async (id) => {
    // console.log(id);
    try {
      const docRef = doc(db, "Comentarios", id);
      await deleteDoc(docRef);
      console.log("Documento eliminado correctamente");
    } catch (error) {
      console.error("Error al eliminar el documento: ", error);
    }
  };

  const [showModal, setShowModal] = React.useState(false);


  return (
    <div className="max-w-xl mx-auto mt-10">
      <form onSubmit={handleSubmit} id="Coment">
        <div className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow">
          {user.photoURL && (
            <img
              src={user.photoURL}
              width={40}
              alt="User Avatar"
              className="w-10 h-10 rounded-full"
            />
          )}
          <div className="flex-1">
            <textarea
              placeholder="Escribe un comentario..."
              className="w-full border-2 border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500 transition-colors duration-300"
              rows="3"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
            <div className="flex items-center justify-between mt-2">
              <div className="ml-3.5 relative flex items-center space-x-2">
                <span
                  className="cursor-pointer text-2xl"
                  onClick={() => setShowEmoji(!showEmoji)}
                >
                  <FaRegLaugh color="gray" />
                </span>
                {showEmoji && (
                  <div className="absolute top-full mt-2 right-0 z-10">
                    <Picker
                      data={data}
                      emojiSize={20}
                      emojiButtonSize={28}
                      onEmojiSelect={addEmoji}
                      maxFrequentRows={0}
                      locale='es'
                      previewPosition='none'
                    />
                  </div>
                )}
              </div>
              <button
                type="submit"
                className="text-sm bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
              >
                Publicar
              </button>
            </div>
          </div>
        </div>
      </form>

      {listaComentarios.map((item, key) => (
        <div className="max-w-xl mx-auto mt-5 flex items-center" key={key}>
          <div className="flex-grow flex items-start space-x-4 bg-white p-4 rounded-lg shadow relative">
            <img
              src={item.photoURL}
              width={40}
              alt="User Avatar"
              className="w-10 h-10 rounded-full"
            />
            <div className="flex-1">
              <div className="flex items-center">
                <p className="text-base font-semibold leading-6 text-gray-900">{item.name}</p>
                <p className="ml-3.5 mt-1 text-xs leading-6 text-gray-500">
                  <TimeComponent date={item.date} />
                </p>
              </div>
              <p className="mt-2 text-sm text-gray-700">
                {item.comment}
              </p>
            </div>
            <div className="flex items-center">
              <HeartComponent likeReaction={item.likeReaction} idCollection={item.id} />
            </div>
          </div>
          {item.email === user.email && (
            <button
              onClick={() => setShowModal(item.id)}  // Pasar el id del comentario
              className="ml-4 p-2 cursor-pointer hover:text-red-500"
            >
              <FaRegTrashCan />
            </button>
          )}

          {showModal === item.id && (  // Verificar que el modal se muestra solo para el comentario actual
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-sm">
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                      <h3 className="text-3xl font-semibold">
                        ¿Borrar comentario?
                      </h3>
                    </div>
                    <div className="relative p-6 flex-auto">
                      <p className="my-4 text-blueGray-500 text-sm leading-relaxed">
                        Al eliminar el comentario dejará de ser visible para todos los usuarios.
                      </p>
                    </div>
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                      <button
                        className="text-black background-transparent font-bold px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Cancelar
                      </button>
                      <button
                        className=" bg-red-600 text-white hover:bg-red-700 transition-colors duration-300 font-bold text-sm px-6 py-3 rounded shadow"
                        type="button"
                        onClick={async () => {
                          await eliminarComentario(item.id);
                          setShowModal(false);
                          setCount(count - 1);
                        }}
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          )}
        </div>
      ))}



    </div>
  );
}

export default Comment;


