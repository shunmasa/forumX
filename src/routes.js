import React from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "./hoc/layout";
// import Auth from "./hoc/auth";

import Home from "./components/Home";
import RegisterLogin from "./components/Register_login";
import Register from "./components/Register_login/register";
import Forum from "./components/Forum"
import Comment from './components/comments/index'
import UserDashboard from './components/User/UserdashBord';
import Message from './components/edit/index';

import Rule from './components/rule/index'
const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/user/dashboard" exact component={UserDashboard}/>
        <Route path="/register" exact component={Register} />
        <Route path="/register_login" exact component={RegisterLogin} />
       
        <Route path="/forum_modal_rule" exact component={Rule} />
        <Route path="/forum" exact component={Forum} />
        <Route path="/forum_comment" exact component={Comment} />
        <Route path="/forum_edit" exact component={Message} />
       <Route path="/" exact component={Home} />
      </Switch>
    </Layout>
  );
};

export default Routes;

//route in the Auth ,public route , private route ...true private
//...flase in between public and private , null...public
//high order component
