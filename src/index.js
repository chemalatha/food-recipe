import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import Routing from './components/Routing';

ReactDOM.render(<Provider store={store}>
    <Routing/>
</Provider>,document.getElementById('root'));