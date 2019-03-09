import React, { Component } from 'react'
import Table from './table'
import Diagrama from './diagrama'
import Run from './runButton'
import './container.css'

import data from '../../data/send'

var serverURL = "http://172.31.8.193"
var urlGet =  serverURL +":8080/data";
var urlPost = serverURL +":8080/selection";

// var urlGet =  "http://localhost:8080/data";
// var urlPost = "http://localhost:8080/selection";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      obj: [],
      didLoad: false,
      headers: [],
      estados: [],
      sender: data.getSender(),
    };
    this.handleRunClick = this.handleRunClick.bind(this);
  }

  componentDidMount() {


    console.log("Component did mount!");
      fetch(urlGet)
        .then(response => response.json())
        .then(threads => {
          console.log(threads);
          this.setState({ obj: /*data.storeRes(*/threads/*)*/, didLoad: true, headers: data.getHeaders(), estados: data.getEstados()})
        });
        console.log(this.state.estados);
        console.log(this.state.headers);
  }

handleRunClick(clicked) {
    // fetch('http://localhost:8080/selection', {
      fetch(urlPost, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(data.getSender())
    });
  window.setTimeout(this.refresh(), 2000);
}

refresh() {
  fetch(urlGet)
    .then(response => response.json())
    .then(threads => {
      this.setState({ obj: /*data.storeRes(*/threads/*)*/, headers: data.getHeaders(), estados :data.getEstados()})
    });
    console.log(this.state.obj);
    console.log(this.state.estados);
    console.log(this.state.headers);
}

doubleRefresh(){
  this.refresh();
  this.refresh();
}

  render() {
    var title = this.props.title;
    var diagTitle = "Diagrama"

    return (
      <div className="container">
        <div>
          <Run id="float" onRunClick={this.handleRunClick}/>
        </div>
        {
          (this.state.didLoad) ? (

            <div className="subcontainer">
              <div className="title">
                {diagTitle}
              </div>
              <div className="tab-container">
                <div className="tab-sub">
                  {this.state.headers.map(header => (

                    <div>{header}</div>
                  ))}
                </div>
                <div className="table-container">
                  <Diagrama author="Noe" rows={this.state.obj} />
                </div>
              </div>
            </div>) : (
              <h1>Elige un problema y algoritmo del menú.</h1>
            )
        }
        {
          (this.state.didLoad) ? (
            <div className="subcontainer">
              <div className="title">
                {title}
              </div>
              <div className="table-container">
                <Table author="Noe" rows={this.state.obj} headers={this.state.headers} stateNames={this.state.estados}/>
              </div>
            </div>
          ) : (
              null
            )
        }
      </div>

    );
  }
}

export default Container
