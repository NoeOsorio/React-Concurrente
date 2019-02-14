import React, { Component} from 'react'
import Table from './table'
import Diagrama from './diagrama'
import Run from './runButton'
import './container.css'

class Container extends Component {
    constructor(props) {
      super(props);
      this.state = {
        obj: [],
        didLoad : false,
      };
    }

    componentDidMount() {
      console.log("Component did mount!");
        fetch('http://localhost:8080/data')
        .then(response => { return response.json(); })
        .then(threads => this.setState({obj: threads, didLoad: true}));
    }

    render() {
        var title = this.props.title;
        var diagTitle = "Diagrama"

        return (

            // <Table className="container" />
            <div className="container">
                <div>
                    <Run id="float"/>
                </div>
                {
                  (this.state.didLoad) ? (

                    <div className="subcontainer">
                            <div className="title">
                                {diagTitle}
                            </div>
                            <div className="tab-container">
                                <div className="tab-sub">
                                    <div>Filosofo 1</div>
                                    <div>Filosofo 1</div>
                                    <div>Filosofo 1</div>
                                    <div>Filosofo 1</div>
                                    <div>Filosofo 1</div>
                                </div>
                                <div className="table-container">

                                    <Diagrama author="Noe" rows={this.state.obj}/>
                                </div>
                            </div>
                    </div>):(
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
                                <Table author="Noe" rows={this.state.obj}/>
                            </div>
                        </div>
                      ):(
                        null
                      )
                    }
            </div>

        );
    }
}

export default Container
