import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import Run from '../../table/component/runButton'

import Container from '../../table/component/container'

//Iconos
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import CodeIcon from '@material-ui/icons/Code';
import Feedback from '@material-ui/icons/Feedback';
import Help from '@material-ui/icons/Help';
import Stars from '@material-ui/icons/Stars';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

//Data
import send from '../../data/send'

//Styles

import './Menu.css';


const drawerWidth = 240;


const icons = {
  menu: <MenuIcon />,
  left: <ChevronLeftIcon />,
  right: <ChevronRightIcon />,
  inbox: <InboxIcon />,
  mail: <MailIcon />,
  code: <CodeIcon />,
  problem: <Feedback />,
  help: <Help />,
  stars: <Stars />
}


const problemas = [
                    { "titulo": "Productor - Consumidor", "value": "PRODUCER_CONSUMER" },
                    { "titulo": "Filosofos", "value": "PHILOSOPHERS_DINNER" },
                    { "titulo": "Lectores -Escritores", "value": "READERS_WRITERS" },
                    { "titulo": "Barbero Dormilon", "value": "SLEEPING_BARBER" },
                    { "titulo": "Fumadores", "value": "SMOKERS"}
                  ];
                  
const algoritmos = [
                    { "titulo": "Mutex", "value": "MUTEX" },
                    {"titulo": "Semaforos", "value": "SEMAPHORE"},
                    {"titulo": "Variables de Condicion", "value": "MUTEXCONVAR"}
                  ];

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,

    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {

    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing.unit * 7 + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9 + 1,
    },
  },
  toolbar: {

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    whiteSpace: "pre-Line"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
    whiteSpace: "pre-Line"
  },

});

class MiniDrawer extends React.Component {
  state = {
    open: false,
    listOpen: false,
    algOpen: false,
    //problema
    problema: "Problema 1",
    alg: "Algoritmo 1"

  };

  componentWillUnmount() {
    clearTimeout(this.timer);
  }



  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false, listOpen: false, algOpen: false });
  };

  handleList = () => {
    this.setState({ listOpen: !this.state.listOpen });
  };

  handleAlg = () => {
    this.setState({ algOpen: !this.state.algOpen });
  };

  handleStoreProblem = (value, e) => {
    e.preventDefault();
    this.setState({ problema: value });
    // console.log(value)
    send.storeProblem(value);
    // console.log(send)
  }
  handleStoreAlg = (value, e) => {
    e.preventDefault();
    this.setState({ problema: value });
    send.storeAlg(value);
  }

  render() {
    const { classes, theme } = this.props;


    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: this.state.open,
          })}
        >
          <Toolbar disableGutters={!this.state.open} id="toolbar">
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, {
                [classes.hide]: this.state.open,
              })}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap id="Title">
              Concurrente
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          className={classNames(classes.drawer, {
            [classes.drawerOpen]: this.state.open,
            [classes.drawerClose]: !this.state.open,
          })}
          classes={{
            paper: classNames({
              [classes.drawerOpen]: this.state.open,
              [classes.drawerClose]: !this.state.open,
            }),
          }}
          open={this.state.open}

        >
          <div className={classes.toolbar} id="lateral">
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'rtl' ? icons.right : icons.left}
            </IconButton>
          </div>
          <Divider />
          <List >
            <ListItem button key={"Archivo"} >
              <ListItemIcon>{icons.inbox}</ListItemIcon>
              <ListItemText primary={"Archivo"} />
            </ListItem>
            <ListItem button key={"Ayuda"} >
              <ListItemIcon>{icons.help}</ListItemIcon>
              <ListItemText primary={"Ayuda"} />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button key={"Problemas"} onClick={this.handleList}>
              <ListItemIcon>{icons.problem}</ListItemIcon>
              <ListItemText primary={"Problemas"} />
              {this.state.listOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            {/* Sublista de problemas */}
            <Collapse in={this.state.listOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {problemas.map(value => (
                  <ListItem button className={classes.nested} key={value.value} onClick={(e) => this.handleStoreProblem(value.value, e)}>
                    <ListItemIcon> {icons.stars} </ListItemIcon>
                    <ListItemText inset primary={value.titulo} />
                  </ListItem>
                ))}

              </List>
            </Collapse>
            <ListItem button key={"Algoritmos"} onClick={this.handleAlg}>
              <ListItemIcon>{icons.code}</ListItemIcon>
              <ListItemText primary={"Algoritmos"} />
              {this.state.algOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            {/* Sublista de problemas */}
            <Collapse in={this.state.algOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {algoritmos.map(value => (
                  <ListItem button className={classes.nested} key={value.value} onClick={(e) => this.handleStoreAlg(value.value, e)}>
                    <ListItemIcon> {icons.code} </ListItemIcon>
                    <ListItemText inset primary={value.titulo} />
                  </ListItem>
                ))}

              </List>
            </Collapse>

          </List>

        </Drawer>


      </div>
    );
  }
}

MiniDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MiniDrawer);
