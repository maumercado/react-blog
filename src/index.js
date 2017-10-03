import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Thunk from 'redux-thunk'

import './index.css';
import reducers from './reducers';
import PostsIndex from './components/posts_index';


import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(Thunk)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <Route path="/" component={PostsIndex} />
            </div>

        </BrowserRouter>
    </Provider>, document.getElementById('root'));

registerServiceWorker();
