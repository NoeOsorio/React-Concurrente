import React, { Component } from 'react'
import Table from './table'
import Diagrama from './diagrama'
import Run from './runButton'
import './container.css'

import data from '../../data/send'

// var urlGet =  "http://172.31.65.35:8080/data";
// var urlPost = "http://172.31.65.35:8080/selection";

var urlGet =  "http://localhost:8080/data";
var urlPost = "http://localhost:8080/selection";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      obj: [],
      didLoad: false,
      headers: []
    };
  }

  componentDidMount() {


    console.log("Component did mount!");

    fetch(urlPost, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(data.getSender())
    }).then(() => {

      fetch(urlGet)
        .then(response => {
          return response.json();
        })
        .then(threads => {
          this.setState({ obj: data.storeRes(threads), didLoad: true, headers: data.getHeaders() })

        });
    })



  }



  render() {
    var title = this.props.title;
    var diagTitle = "Diagrama"

    // setInterval(() => {
    //   this.setState({ obj: data.getResponse(), headers: data.getHeaders() })

    // }, 100000);

    return (

      // <Table className="container" />
      <div className="container">
        <div>
          <Run id="float" />
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
                <Table author="Noe" rows={this.state.obj} headers={this.state.headers} />
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
