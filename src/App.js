import React from 'react';
import { BrowserRouter, Route,Router, Switch } from 'react-router-dom';
import Home from './components/screens/Home';
import About from './components/screens/About';
import Services from './components/screens/Services';
import Contact from './components/screens/Contact';
import ComingSoon from './components/screens/ComingSoon';
import NotFound from './components/screens/NotFound';
import PrivacyPolicy from './components/parts/PrivacyPolicy';
import TermsofService from './components/parts/TermsofService';
import Media from './components/screens/Media';
import MissionVision from './components/screens/MissionVision';

function App() {
  return(
    <BrowserRouter>
    <Switch>
      <Route exact path = "/">
        < Home />
      </Route>
      <Route path ="/about">
        <About />
      </Route>
      <Route path ="/services">
        < Services />
      </Route>
      <Route path ="/contact-us">
        < Contact />
      </Route>
      <Route path ="/coming-soon">
        < ComingSoon />
      </Route>
      <Route path ="/privacy-policy">
        < PrivacyPolicy />
      </Route>
      <Route path ="/terms-of-service">
        < TermsofService />
      </Route>
      <Route path ="/mission-vision">
        <MissionVision />
      </Route> 
      <Route path = "/media">
        <Media />
      </Route>
      <Route path ="*">
        < NotFound />
      </Route>
    </Switch>
    </BrowserRouter>
  ); 
}

export default App;
