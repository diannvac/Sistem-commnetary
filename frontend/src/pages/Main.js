import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ReactGA from "react-ga4";
import Header from '../components/Header';
import Footer from '../components/Footer';
import LastBlogs from '../components/Blogs/LastBlogs';

ReactGA.initialize("G-EM3GJWHP6C");

ReactGA.send({ 
    hitType: "pageview", 
    page: window.location.pathname,
    
 });

function Main() {
 
  return (
    <>
      <Header></Header>

      <LastBlogs/>

      <Footer></Footer>
    </>
  );
}

export default Main;
