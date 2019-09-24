import React, { Fragment } from 'react';
import 'firebase';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Views/LogIn';
import Register from './Views/Register';
import Main from './Views/Main';

const App = () => (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path ="/notes" component={Main} />
        </Switch>
      </BrowserRouter>
    </Fragment>
    );

export default App;
