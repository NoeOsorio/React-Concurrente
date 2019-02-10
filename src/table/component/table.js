import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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






function SimpleTable(props) {
    const { classes } = props;

    //Recibe el objeto de data y crea los encabezados a partir del primer elemento del json
    var headers = props.rows[0]
    //guarda las filas y columnas
    console.log(headers);
    var rows = props.rows

    console.log(rows);
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              {
                
                headers.map(col => (
                  //Por cada columna en headers crea una imagen con su nombre
                    <TableCell align="center">
                      <img src="data:image/jpeg;base64,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"></img>
                      {col}
                    </TableCell>
                    
              ))}
                      
            </TableRow>
            
          </TableHead>
          <TableBody>
            {rows.map(row => (
                                //Por cada fila en rows llena la tabla

              <TableRow key={row.id}>
                <TableCell component="th" scope="row" align="center">
                  {row.id}
                </TableCell>
                <TableCell align="center">{row.name}</TableCell>
              </TableRow>
            ))}
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

// class Table extends React.Component {
//     render(){

//     }
// }