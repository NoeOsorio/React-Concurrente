import React, { Component} from 'react'



import Table from './table'
import Diagrama from './diagrama'
import Run from './runButton'
import './container.css'

var data = [
    ["id", "Nombre", "Edad"],
    {"id" : 1, "name": "Paquito"},
    {"id" : 2},
    {"id" : 3},
    {"id" : 4},
    {"id" : 5}
]

class Container extends Component{


    render(){
        var title = this.props.title;
        var diagTitle = "Diagrama"

        return (
            
            // <Table className="container" />
            <div className="container">
                <div>
                    <Run id="float"/>
                </div>
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
                                
                                <Diagrama author="Noe" rows={this.props.diagrama}/>
                            </div>
                        </div>
                    

                </div>
                <div className="subcontainer">
                        <div className="title">
                            {title}
                        </div>
                    <div className="table-container">
                        <Table author="Noe" rows={this.props.diagrama}/>
                    </div>
                </div>
                
            </div>

        );
    }
}

export default Container
