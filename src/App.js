import React , {useEffect} from "react";
import {Helmet} from "react-helmet";
import { Switch, Route } from "react-router-dom";
import Aos from 'aos'

import Home from './pages/Home'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import Faq from './pages/Faq'
import Pricing from './pages/Pricing'
import Services from './pages/Services'

import HomeDemo1 from './template/HomeDemo1'
import HomeDemo2 from './template/HomeDemo2'
import HomeDemo3 from './template/HomeDemo3'
import HomeDemo4 from './template/HomeDemo4'

import 'aos/dist/aos.css';
// import './assets/css/General.css';
import './assets/css/style.css';
import './assets/css/bootstrap.min.css';
import './assets/css/responsive.css';

import 'bootstrap/dist/js/bootstrap.bundle.min';
import ICTServices from "./pages/ICTServices";
import CopperServices from "./pages/CopperServices";
import FiberServices from "./pages/FiberServices";
import SignUp from "./pages/SignUp";


const App = () => {

  useEffect(() => {

    Aos.init({
      duration: 1000
      })
  },[])

  useEffect(() => {
    document.body.classList.add('light-version')
  },[])

  return (
    
    	<div className="App">
        <Helmet>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <title>
            NFT Marketplace
          </title>
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha256-eZrrJcwDc/3uDhsdt61sL2oOBY362qM3lon1gyExkL0=" crossorigin="anonymous" />
        </Helmet>
  			<Switch>
          <Route path="/" exact component={HomeDemo3} />
          <Route path="/about-us" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/itservice" component={ICTServices} />
          <Route path="/Copper" component={CopperServices} />
          <Route path="/fiber" component={FiberServices} />
          <Route path="/faq" component={Faq} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/contact-us" component={Contact} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
  				{/* <Route path="/index-demo-1" component={HomeDemo1} /> */}
          {/* <Route path="/index-demo-2" component={HomeDemo2} /> */}
          {/* <Route path="/index-demo-3" component={HomeDemo3} /> */}
  				{/* <Route path="/index-demo-4" component={HomeDemo4} /> */}
  			</Switch>
	    </div>    
  );
}

export default App;