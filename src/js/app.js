import 'material-design-lite';
import 'material-design-lite/dist/material.light_green-amber.min.css';

import '../css/app.scss';

// Global
import './layout';

// Load Page Specific Module
let current_page = document.querySelector('[data-page]').getAttribute('data-page');
import * as pages from './pages';
