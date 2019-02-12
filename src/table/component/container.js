import React, { Component} from 'react'
import Table from './table'
import Diagrama from './diagrama'
import './container.css'


var data = [
    ["id", "Nombre", "Edad"],
    {"id" : 1, "name": "Paquito"},
    {"id" : 2},
    {"id" : 3},
    {"id" : 4},
    {"id" : 5}
]




class Fila extends Component{

    
    render(){
        
        var title = this.props.title;
        var diagTitle = "Diagrama"

       

        return (
            // <Table className="container" />
            <div className="container">
                <div className="subcontainer">
                        <div className="title">
                            {diagTitle}
                        </div>
                    <div className="table-container">
                        <Diagrama author="Noe" rows={this.props.diagrama}/>
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
// function Clock(props) {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {props.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
  
//   function tick() {
//     ReactDOM.render(
//       <Clock date={new Date()} />,
//       document.getElementById('root')
//     );
//   }
  
//   

export default Fila