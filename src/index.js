// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './containers/App';
//
// ReactDOM.render(<App />, document.getElementById('root'));

import React, { Component } from 'react'
import { render } from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import createLogger from 'redux-logger'
//import { createStore, renderDevTools } from './utils/devTools';
import { Provider } from 'react-redux'
import Root from './containers/Root';
import reducer from './reducers/reducers'

const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(thunk, promise, logger)(createStore);
const store = createStoreWithMiddleware(reducer);

//let store = createStore(reducer)

let rootElement = document.getElementById('root')
render(
    <Provider store={store}>
        <Root />
    </Provider>,
    rootElement
)
/*
export default class index extends Component {
  render() {
    console.log('rendering')
    return (
      <div>
        <h1>hello world</h1>
      </div>
    );
  }
}
*/

/*
let rootElement = document.getElementById('root')
render(
    <h1>hello world</h1>,
    rootElement
)
*/
