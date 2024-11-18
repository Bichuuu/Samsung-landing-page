import React from 'react';
import './App.css';
import Header from './Components/Header';
import Landingpage from './Components/Landingpage';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from './Components/Footer';



function App() {
  return (
    <div>
     
      <Header/>
      <Landingpage />
      <Footer />
      {/* Other sections will go here */}
    </div>
  );
}

export default App;
