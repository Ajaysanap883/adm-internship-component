import './App.css';
import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home';
import Contact from './components/contact';
import PhotoGallery from "./components/photogallery/PhotoGallery";
import Internship from './components/internship'
import './styles/ContactForm.css';
import './styles/colors.css';

function App() {
  return (
    <>
    <Header />  
    <Home/>
    <PhotoGallery />
    <Internship/>
    <Contact />
    <Footer/>
    </>
      
      )
}
export default App;

