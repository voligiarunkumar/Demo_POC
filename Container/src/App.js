import React, { Suspense, useState, useEffect } from "react";
import "./App.scss";
import { Switch, Route, useHistory, useLocation } from "react-router-dom";
const HomePage = React.lazy(() => import("HomePage/HomePage"));
import SelectRoute from "./Components/SelectRoute";
const SideNavBar = React.lazy(() => import("navbar/SideNavBar"));

const App = () => {
  const [route, setRoute] = useState("null");
  const history = useHistory();
  const location = useLocation();

  const navigationClicked = (url) => {
    if (url == "/") {
      history.push("/");
      localStorage.setItem("url", url);
      setRoute(url);
    } else {
      setRoute(url);
      localStorage.setItem("url", url);
      history.push("/Vtrac");
    }
  };
  useEffect(() => {
    if (route == "null") {
      const url = localStorage.getItem("url");
      setRoute(url);
    }
  }, []);
  return (
    <>
      <Suspense fallback={null}>
        <SideNavBar navigationClicked={navigationClicked} />
      </Suspense>
      <Switch>
        <Route path="/" strict exact>
          <Suspense fallback={null}>
            <HomePage />
          </Suspense>
        </Route>
      
          <SelectRoute url={route} />
        
      </Switch>
    </>
  );
};

export default App;
