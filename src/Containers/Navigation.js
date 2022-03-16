import React from "react";
import { useSelector } from "react-redux";

import Homepage from "Views/Homepage";
import Login from "Views/Login";

import Register from "Views/Register";
import Interface from "./Interface";

const Navigation = (props) => {

  const view = useSelector((state) => (state.navigation.view));
  const isLogin = useSelector((state) => (state.user.isLogin));

  const getView = (view, isLogin) => {
    switch (true) {
      case view === "homepage" :
        return <Homepage />;
      case view === "login" :
        return <Login />;
      case view === "register" :
        return <Register />;
      case isLogin :
        return <Interface />;
      default:
        return <Homepage />
    }
  }

  return getView(view, isLogin);
};

export default Navigation;