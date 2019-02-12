import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Table from './table/component/table'
import Container from './table/component/container'
//Cree un json hardcodeado para hacer pruebas, pero sirve para ver el funcionamiento de los componentes
import Data from './data/procesos.json'
import diagrama from './data/diagrama.json';
// import Scroll from './table/component/scroll'
import * as serviceWorker from './serviceWorker';
import MiniDrawer from './table/component/MiniDrawer.js'
//Esta funcion sirve para actualizar cada x segundos
// setInterval(()=>{
//     Data.push({"id" : Date.now()})
//     console.log(Data)
//     ReactDOM.render(<Container data={Data} title="Hilos" />, document.getElementById('table'));

// }, 1000);

    ReactDOM.render(<Container data={Data} title="Hilos" diagrama={diagrama}/>, document.getElementById('table'));
    ReactDOM.render(<MiniDrawer/>, document.getElementById('root'));
// ReactDOM.render(<Scroll />, document.getElementById('table'));
// ReactDOM.render(<App />, document.getElementById('root'));
//Se le va a pasar el objeto json "Data"


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
