import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Table from './table/component/table'
import Container from './table/component/container'
//Cree un json hardcodeado para hacer pruebas, pero sirve para ver el funcionamiento de los componentes
import Data from './data/procesos.json'
// import Scroll from './table/component/scroll'

import * as serviceWorker from './serviceWorker';



// ReactDOM.render(<Scroll />, document.getElementById('table'));
// ReactDOM.render(<App />, document.getElementById('root'));
//Se le va a pasar el objeto json "Data"
ReactDOM.render(<Container data={Data} title="Hilos" />, document.getElementById('table'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
