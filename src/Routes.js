import React from "react";
import { Route } from "react-router-dom";
import { WelcomeScreen } from "./components/welcomeScreen/WelcomeScreen";
import { App } from "./components/app/App";
import { BluePill } from "./components/bluePill/BluePill";

{
  /* Recomended change naming of routes to /game atd .... this routes can see customers in browser so should be semantically telling*/
}

export const Routes = () => {
  return (
    <>
      <Route path="/" exact component={WelcomeScreen} />
      <Route path="/app" exact component={App} />
      <Route path="/bluePill" exact component={BluePill} />
    </>
  );
};
