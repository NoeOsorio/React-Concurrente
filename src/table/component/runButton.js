import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import green from "@material-ui/core/colors/green";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";

import CheckIcon from "@material-ui/icons/Check";
import SaveIcon from "@material-ui/icons/PlayArrow";

//Data
import data from '../../data/send'

const styles = theme => ({
  root: {
    display: "flex",
    alignItems: "center",
    position: "fixed",
    bottom: 0,
    right: 0,
  },
  wrapper: {
    margin: theme.spacing.unit,
    position: "relative"
  },
  buttonSuccess: {
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700]
    }
  },
  fabProgress: {
    color: green[500],
    position: "absolute",
    top: -6,
    left: -6,
    zIndex: 1
  },
  buttonProgress: {
    color: green[500],
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12
  }
});


class RunButton extends React.Component {
  state = {
    loading: false,
    success: false,
    obj: [],
    headers: []
  };

  componentWillUnmount() {
    clearTimeout(this.timer);
  }


  handleButtonClick = () => {
    fetch('http://localhost:8080/selection', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      
      body: JSON.stringify(data.getSender())
    }).then(() => {
      console.log(data.getSender())
      fetch('http://localhost:8080/data')
        .then(response => {
          return response.json();
        })
        .then(threads => {
          this.setState({ obj: data.storeRes(threads),  headers: data.getHeaders() })

        });
    })
    // if (!this.state.loading) {
    //   this.setState(
    //     {
    //       success: false,
    //       loading: true
    //     },
    //     () => {
    //       fetch('http://localhost:8080/selection', {
    //         headers: {
    //           'Accept': 'application/json',
    //           'Content-Type': 'application/json'
    //         },
    //         method: "POST",
    //         body: JSON.stringify(send.getSender())
    //       })
    //         .then(() => {
    //           console.log("Se bizo la seleccion ")
    //           fetch('http://localhost:8080/data')
    //             .then(response => {
    //               return response.json();
    //             })
    //             .then(threads => {
    //               console.log("Se bizo la get de la data ")
    //               console.log(threads)
    //               return send.storeRes(threads)
    //             })

    //           this.setState({
    //             loading: false,
    //             success: true
    //           });

    //         })
    //         .catch(err => {
    //           this.setState({
    //             loading: false,
    //             success: false
    //           });
    //           return console.log(err)
    //         })
    //         .then(threads => this.setState({ obj: threads, didLoad: true }));

    //     }
    //   );
    // }
  };

  render() {
    const { loading, success } = this.state;
    const { classes } = this.props;
    const buttonClassname = classNames({
      [classes.buttonSuccess]: success
    });

    var title = "Run"
    return (
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <Fab
            color="primary"
            className={buttonClassname}
            onClick={this.handleButtonClick}
          >
            {success ? <CheckIcon /> : <SaveIcon />}
          </Fab>
          {loading && (
            <CircularProgress size={68} className={classes.fabProgress} />
          )}
        </div>
        <div className={classes.wrapper}>
          <Button
            variant="contained"
            color="primary"
            className={buttonClassname}
            disabled={loading}
            onClick={this.handleButtonClick}
          >
            {title}
          </Button>
          {loading && (
            <CircularProgress size={24} className={classes.buttonProgress} />
          )}
        </div>
      </div>
    );
  }
}

RunButton.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RunButton);
