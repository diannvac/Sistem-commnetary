import React, { useState, useEffect } from 'react';
import Heart from 'react-heart';
import { doc, updateDoc } from "firebase/firestore";
import { db } from '../api/firebase.config';
import { getAuth, onAuthStateChanged } from "firebase/auth";

const HeartComponent = (props) => {
  const [active, setActive] = useState(false);
  const [likeCount, setLikeCount] = useState(props.likeReaction);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });

    return () => unsubscribe();
  }, [auth]);

  const updateLikeReaction = () => {
    if (!isAuthenticated) {
      return;
    }

    const newActive = !active;
    const newLikeCount = newActive ? likeCount + 1 : likeCount - 1;

    setActive(newActive);
    setLikeCount(newLikeCount);

    try {
      const updateFire = doc(db, "Comentarios", props.idCollection);
      updateDoc(updateFire, {
        likeReaction: newLikeCount
      }).catch(error => {
        console.log(error.message);
      });
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  }

  return (
    <div className="inline-flex items-center">
      <Heart 
        className="w-4 h-4 text-red-600" 
        isActive={active} 
        onClick={updateLikeReaction} 
      />
      <span className="ml-2">{ likeCount } Me gustas</span>
    </div>
  );
}

export default HeartComponent;
