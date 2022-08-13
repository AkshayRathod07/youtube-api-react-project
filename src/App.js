import React, { useEffect, useState } from "react";

import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import HomeScreen from "./Components/screens/Homescreen/HomeScreen";
import "./_app.scss";
import { Container } from "react-bootstrap";
import LoginScreen from "./Components/screens/loginscreens/LoginScreen";

import {
  Redirect,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";

import { useSelector } from "react-redux";
import WatchScreen from "./Components/screens/WatchScreen/WatchScreen";

const Layout = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);

  const handleToggleSidebar = () => setSidebar((value) => !value);
  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app__container">
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />

        <Container fluid className="app__main">
          {children}
        </Container>
      </div>
    </>
  );
};

const App = () => {

  const {accessToken,loading} = useSelector(state => state.auth)
  const history = useHistory();
  useEffect(() =>{
    
    if(!loading && !accessToken){
        history.push('/auth')
    }


  },[accessToken,loading,history])

  return (
  
      <Switch>
        <Route path="/" exact>
          <Layout>
            <HomeScreen />
          </Layout>
        </Route>
        <Route path="/auth">
          <LoginScreen />
        </Route>

        <Route path="/search">
          <Layout>
            <h1>Search anything</h1>
          </Layout>
        </Route>

        <Route path="/watch/:id">
          <Layout>
          <WatchScreen/>
          </Layout>
        </Route>

        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    
  );
};

export default App;
