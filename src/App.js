import React from "react";
import "./styles/app.scss";


// Redux
import { connect } from 'react-redux'
import { stopLoading } from './redux/actions/testAction'
//Router
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App({ loading, stopLoading }) {

  setTimeout(stopLoading, 1000)

  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/">
            <h1>you are at /</h1>
          </Route>
          <Route exact path="/testroute">
            <h1>you are at /testRoute</h1>
          </Route>
        </Switch>
        {
          loading
            ? <h1>Loading...</h1>
            : <h1>Redux Success</h1>
        }

      </div>
    </BrowserRouter>

  )
}

const mapStateToProps = ({ loading }) => {
  return {
    loading: loading.loading
  }
}

const mapDispatchToProps = {
  stopLoading,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
