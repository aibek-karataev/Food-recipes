import React from 'react';
import { Navbar } from './components/Navbar';
import { Route, Switch } from "react-router-dom";
import { HomePage } from './pages/HomePage';
import { ProductPage } from './pages/ProductPage';
import { Footer } from './components/Footer';
import { RecipePage } from './pages/RecipePage';
import { ErrorPage } from './components/Error/ErrorPage';

const App: React.FC = () => {
  return (
    <div className="px-2">
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/category/:category" component={ProductPage} />
          <Route path="/meal/:id" component={RecipePage} />
          <Route path="*" component={ErrorPage} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
