import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import App from './containers/App'
import './styles/app.css'
import configureStore from './store/configureStore'

const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store)

render(
    <Provider store={store}>

        <Router history={history}>
            <Route path="/" component={App}/>
        </Router>
    </Provider>,
    document.getElementById('root')
)