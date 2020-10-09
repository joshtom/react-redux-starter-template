import React from "react";
import "./styles/app.scss";


// Redux
import { connect } from 'react-redux'
import { stopLoading } from './redux/actions/testAction'

function App({ loading, stopLoading }) {

  setTimeout(stopLoading, 1000)

  return (
    <div>
	{
	  loading
	    ? <h1>Loading...</h1>
	    : <h1>Redux Success</h1>
	}
    </div>
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
