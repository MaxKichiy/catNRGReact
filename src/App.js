import React from 'react';
import Footer from './pages/components/Footer';
import Header from './pages/components/Header';
import Main from './pages/Main';
import FormPage from './pages/Form';
import Catalog from './pages/Catalog';
import { Route, Switch } from 'react-router';
function App() {
  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <Switch>
          <Route path='/form' component={FormPage} />
          <Route path='/catalog' component={Catalog} />
          <Route path='/' component={Main} />
          <Catalog />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
