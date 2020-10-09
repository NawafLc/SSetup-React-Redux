import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import Home from './pages/Home';
import TestPage from './pages/TestPage';

const Styled = styled.div``;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Styled>
          <Switch>
            <Route exact path='/'>
              <div>
                <Home />
              </div>
            </Route>
            <Route path='/Test' component={TestPage} />
          </Switch>
        </Styled>
      </BrowserRouter>
    );
  }
}

export default App;
