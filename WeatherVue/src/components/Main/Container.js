import React from 'react';
import Footer from '../Footer/Footer';
import Wrapper from '../Main/Wrapper.js';
import { useMainContext } from '../../context/MainContext';
import "./Wrapper.css"

function Container() {
  const { isDark } = useMainContext();
  return (
    <div className={isDark}>


      <main className="main">
      <div className="navbarr">
        <h1>WeatherVue</h1>
      </div>
        <Wrapper />
        <Footer />
      </main>
    </div>
  );
}

export default Container;
