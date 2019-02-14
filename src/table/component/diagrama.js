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
    var id;
    let cellArray = []
      for(let i = 0; i < rows.length; i++) {
       id = "";
        console.log(rows[i].state);
        switch (rows[i].state) {
          case "0":
              id= "STATE_1"
            break;
          case "1":
            id= "STATE_2"
          break;

          default:
            id="STATE_4"
            break;
        }
           cellArray.push(
           <TableCell align="center"  id="cell">
            <div className="row-container" id={id}>
              {
                (i == 0) ? (
                  rows[i].state
                ):(
                  null
                )
              }

            </div>
           </TableCell>)
      }
      return cellArray;
  }

function SimpleTable(props) {
    const { classes } = props;

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
                <TableRow>
                  {drawCells(cell)}
                </TableRow>
              ))
            }
        </TableBody>
        </Table>
      </Paper>
    );
  }

  SimpleTable.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  export default withStyles(styles)(SimpleTable);
