import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

import './css/style.css';

import App from './components/App'
import StorePicker from './components/StorePicker'



render(<App/>, document.querySelector('#main'))
