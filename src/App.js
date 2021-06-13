import React from 'react';

// global style
import GlobalStyle from './components/GlobalStyle';
// pages
import AboutUs from './pages/AboutUs';
import OurWork from './pages/OurWork';
import ContactUs from './pages/ContactUs';
import Nav from './components/Nav';
import MovieDetail from './pages/movieDetail';
// router
import { Switch, Route, useLocation } from 'react-router-dom';
// animation
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  //console.log(location);
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        {/* framer motion needs location and key prop on <Switch> in order to use exit and enter animations. https://www.framer.com/api/motion/animate-presence/*/}
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact component={AboutUs} />
          <Route path="/work" exact component={OurWork} />
          <Route path="/work/:id" component={MovieDetail} />
          <Route path="/contact" component={ContactUs} />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
