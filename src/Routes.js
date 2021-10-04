import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./pages/Home";
import Hybrid from "./pages/Hybrid";
import Virtual from "./pages/Virtual";
import Pricing from "./pages/Pricing";
// import Pricing from './pages/Pricing2';
import AboutUs from "./pages/About";
import Feature from "./components/features";
import Contact from "./components/contact";
import Blogsmain from "./components/blogsmain";
import Maincontent from "./components/career/careers";
import SuccessStoryCard from "./components/SuccessStoryCard";
import Signin from "./components/signin/index";

import { Provider } from "react-redux";
import { store } from "./src_super/dashboard/redux/store";
import AuthLayout from "./src_super/dashboard/layouts/Auth/Auth";
import AdminLayout from "./src_super/dashboard/layouts/Admin/Admin";
import RTLLayout from "./src_super/dashboard/layouts/RTL/RTL";

import "../src/src_super/dashboard/assets/css/nucleo-icons.css";
import "react-notification-alert/dist/animate.css";
import "../src/src_super/dashboard/assets/scss/black-dashboard-pro-react.scss?v=1.2.0";
import "../src/src_super/dashboard/assets/demo/demo.css";



const Routes = () => {
  return (
    <Provider store={store}>
      <Router>
        
        <Switch>
          <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
          <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
          <Route path="/rtl" render={(props) => <RTLLayout {...props} />} />
          {/* <Redirect from="/" to="/admin/dashboard" /> */}

          <Route exact path="/" component={Home} />
          <Route exact path="/hybrid-event-platform" component={Hybrid} />
          <Route exact path="/virtual-event-platform" component={Virtual} />
          <Route exact path="/pricing" component={Pricing} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/about-us" component={AboutUs} />
          <Route exact path="/features" component={Feature} />
          <Route exact path="/blogs" component={Blogsmain} />
          <Route exact path="/career" component={Maincontent} />
          <Route exact path="/success-story" component={SuccessStoryCard} />
          <Route exact path="/signin" component={Signin} />
        </Switch>
        
      </Router>
    </Provider>
  );
};

export default Routes;
