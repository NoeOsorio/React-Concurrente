import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './table.css';

const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
      
    },
    table: {
      minWidth: 700,
    },
  });


  function drawCells(rows) {
    var img;
    let cellArray = []
      for(let i = 0; i < rows.length; i++) {
        var id = "";
        switch (rows[i]) {
          case "IS_HUNGRY":
              id= "STATE_1"
            break;
          case "EATING":
            id= "STATE_2"
          break;  
        
          default:
            id="STATE_4"
            break;
        }
        if(rows[i] === "IS_HUNGRY"){
          img = "./img/Espera.png"
        }
        else if(rows[i] === "EATING"){
          img = "./img/Pensando.png"
        }
           cellArray.push(
           <TableCell align="center"  id="cell">
            <div className="row-container" id={id}>
              {/* <div className="image-container"> */}
          
              {/* <img src={img}></img> */}
              {rows[i]}
              {/* </div> */}
             
            </div>
           </TableCell>)
      }
      return cellArray;
  }




function SimpleTable(props) {
    const { classes } = props;
   
    
    //Se llama en return()
    
    // <TableBody>
    //   {
    //     rows.map(cell => (
    //        <TableRow>
    //          {drawCells(cell)}
    //        </TableRow>
    //      ))
    //    }
    // </TableBody>

    //Recibe el objeto de data y crea los encabezados a partir del primer elemento del json
    // var headers = props.rows[0]
    //guarda las filas y columnas
    // console.log(headers);
    var rows = props.rows
    var title = "Hilos"

    console.log(rows);
    return (
      <Paper className={classes.root} id="Table">
        
        <Table className={classes.table} >
          
          
            <TableBody id="row">
            {
              rows.map(cell => (
                <TableRow >
                  {drawCells(cell)}
                </TableRow>
              ))
            }
        </TableBody>
        </Table>
      </Paper>
    );
  }



//   function SimpleTable(props) {
//     const { classes } = props;
  
//     return (
//       <Paper className={classes.root}>
//         <Table className={classes.table}>
//           <TableHead>
//             <TableRow>
//               <TableCell>Dessert (100g serving)</TableCell>
//               <TableCell align="right">Calories</TableCell>
//               <TableCell align="right">Fat (g)</TableCell>
//               <TableCell align="right">Carbs (g)</TableCell>
//               <TableCell align="right">Protein (g)</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rows.map(row => (
//               <TableRow key={row.id}>
//                 <TableCell component="th" scope="row">
//                   {row.name}
//                 </TableCell>
//                 <TableCell align="right">{row.calories}</TableCell>
//                 <TableCell align="right">{row.fat}</TableCell>
//                 <TableCell align="right">{row.carbs}</TableCell>
//                 <TableCell align="right">{row.protein}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </Paper>
//     );
//   }
  
  SimpleTable.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(SimpleTable);

