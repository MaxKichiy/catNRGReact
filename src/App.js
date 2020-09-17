import React from 'react';
import Footer from './pages/components/Footer';
import Header from './pages/components/Header';
import Main from './pages/Main';
import Form from './pages/Form';
import Catalog from './pages/Catalog';
function App() {
  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <Main />
        <Form />
        <Catalog />
      </div>
      <Footer />
    </div>
  );
}

export default App;
