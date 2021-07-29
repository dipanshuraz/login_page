import { useState } from "react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";

import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";

function App() {
  const history = useHistory();
  const [loggedIn, setLoggedIn] = useState(false);

  const authSuccess = () => {
    setLoggedIn(true);
    history.replace("/");
  };

  const handleLogout = () => {
    setLoggedIn(false);
    history.replace("/");
  };

  return (
    <div>
      <Switch>
        <Route
          exact
          path='/'
          render={() =>
            loggedIn ? <Redirect to='/home' /> : <Redirect to='/login' />
          }
        />
        <Route path='/signup'>
          <Signup />
        </Route>
        <Route path='/login'>
          <Login authSuccess={authSuccess} />
        </Route>
        <Route path='/home'>
          <Home handleLogout={handleLogout} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
