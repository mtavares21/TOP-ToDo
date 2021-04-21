/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
import './todo.css';
import Logo from './images/logo.png';
import './dom.js';
import './factory';
import {newSection, editTask} from './controller';
import {setSections, setTasks} from './populate';

const logo = document.getElementById('logo');
logo.src = Logo;

setSections();
setTasks();
newSection();
editTask();
