require('file-loader?name=[name].[ext]!./index.html')
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './redux/configure-store';
import { Route, BrowserRouter } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import template from './pages/template.jsx';


ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter basename={"agency"}>
            <Route path="/" component={template} />
        </BrowserRouter>
    </Provider>
), document.getElementById('app'));


/** Old Sample Code */


// import React from 'react';
// import ReactDOM from 'react-dom';
// import {App } from './App';

// import './App.scss';

// const appElement = document.getElementById('app');

// ReactDOM.render(<App />, appElement);