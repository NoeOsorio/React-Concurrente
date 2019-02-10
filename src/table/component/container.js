import React, { Component} from 'react'
import Table from './table'
import './container.css'

class Fila extends Component{

    
    render(){
        let id = 0;
        function createData(name, calories, fat, carbs, protein) {
        id += 1;
        return { id, name, calories, fat, carbs, protein };
        }
        var rows = [
            createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
            createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
            createData('Eclair', 262, 16.0, 24, 6.0),
            createData('Cupcake', 305, 3.7, 67, 4.3),
            createData('Gingerbread', 356, 16.0, 49, 3.9),
        ];
        return (
            // <Table className="container" />
            <div className="container">

                <div className="card">
                    <Table author="Noe" rows={this.props.data}/>
                </div>
            </div>
        );
    }
}

export default Fila