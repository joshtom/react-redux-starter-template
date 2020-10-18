import React from "react";
import "./styles/app.scss";

// Redux
import { connect } from "react-redux";
import { stopLoading } from "./redux/actions/testAction";
//Router
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
// Pages
import {NotFound, CounterPage} from "./pages";
import { Counter } from './components/Counter/index';



function App({ loading, stopLoading }) {
  setTimeout(stopLoading, 1000);

  return (
    <BrowserRouter>
      <div>
        <div className="header">
        <Link to="/testroute"> Test route </Link>
        <Link to="/counter-class"> Counter Class component </Link>
        <Link to="/counter-function"> Counter Function component </Link>
        </div>
        <div className="main">
        <Switch>
          <Route exact path="/">
            <h1>React redux starter template.</h1>
            <p> Start by editing App.js </p>
          </Route>
          <Route exact path="/testroute">
            {loading ? <h1>Loading...</h1> : <h1>Redux Success</h1>}
            <h1>you are at /testRoute</h1>
          </Route>
          <Route exact path="/counter-class" component={CounterPage} />
          <Route exact path="/counter-function" component={Counter} />
          <Route exact component={NotFound} />
        </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = ({ loading }) => {
  return {
    loading: loading.loading,
  };
};

const mapDispatchToProps = {
  stopLoading,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
