import React from 'react'
import { store } from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Homepage } from "./components/Homepage";
import { Login } from "./components/Login";
import { MemberProfile } from "./components/MemberProfile";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Companies } from "./components/Companies";
import { Signup } from "./components/Signup";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import 'ant-design-pro/dist/ant-design-pro.css';


const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/profile" component={MemberProfile} />
            <Route path="/companies" component={Companies} />
          </Switch>
          <Footer />
        </Router>
      </Provider>
    </div>
  )
}

export default App;
