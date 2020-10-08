# react-redux-starter-template

[React Redux](https://github.com/reduxjs/react-redux) is the official [React](https://reactjs.org/) binding for [Redux](https://redux.js.org/). It lets your React components read data from a Redux store, and dispatch actions to the store to update data.

<img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/105873699/original/340334d7f3148f0b01bae5747e387a582fe46145/develop-your-web-app-using-react-and-redux.jpg">

# Installation

React Redux 7.1 requires React 16.8.3 or later. To use React Redux with your React app:
```
npm install react-redux
```
or 
```
yarn add react-redux
```
You'll also need to [install Redux](https://redux.js.org/introduction/installation) and [set up a Redux store](https://redux.js.org/recipes/configuring-your-store/) in your app.
With this you should be good to go. 

For any error you should visit [# Redux Channel](https://discord.gg/0ZcbPKXt5bZ6au5t). You can also ask questions on Stack Overflow using the #redux tag.

# Getting Started 

After installations you would need to know about Provider and Connect API references.

## Provider

React Redux provides ```<Provider />```, which makes the Redux store available to the rest of your app:
```
import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import store from './store'

import App from './App'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
```
## connect

React Redux provides a ```connect``` function for you to connect your component to the store.

Normally, you’ll call ```connect``` in this way:
```
import { connect } from 'react-redux'
import { increment, decrement, reset } from './actionCreators'

// const Counter = ...

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = { increment, decrement, reset }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
```
# Basic Tutorial

You can see how to use React Redux in practice by following a step-by-step example where you can create a todo list app [here](https://react-redux.js.org/introduction/basic-tutorial)
