import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Index from '../components/Index';
import Footer from '../components/Footer';

function Courses() {
  return (
    <div>
   

      <Header></Header>

      {/* Banner */}
      <Banner></Banner>

      {/* Contenido principal */}
      <Index></Index>

      
     
      <Footer></Footer>
    </div>
  );
}

export default Courses;
