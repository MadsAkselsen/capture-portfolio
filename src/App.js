import React from 'react';

// global style
import GlobalStyle from './components/GlobalStyle';
// pages
import AboutUs from './pages/AboutUs';
import OurWork from './pages/OurWork';
import ContactUs from './pages/ContactUs';
import Nav from './components/Nav';
// router
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact component={AboutUs} />
        <Route path="/work" component={OurWork} />
        <Route path="/contact" component={ContactUs} />
      </Switch>
    </div>
  );
}

export default App;
