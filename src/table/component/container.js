import React, { Component} from 'react'
import Table from './table'
import Diagrama from './diagrama'
import './container.css'

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
                        <Diagrama author="Noe" rows={this.props.data}/>
                    </div>
                
                </div>
                <div className="subcontainer">
                        <div className="title">
                            {title}
                        </div>
                    <div className="table-container">
                        <Table author="Noe" rows={this.props.data}/>
                    </div>
                
                </div>
                
                
                
            </div>
            
        );
    }
}

export default Fila