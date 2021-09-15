

import React from 'react';
import CreateIcon from '@material-ui/icons/Create';
import PrintIcon from '@material-ui/icons/Print';
import GavelIcon from '@material-ui/icons/Gavel';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import './style.css'
const useStyles = makeStyles((theme) => ({
  root: {
    width: '95%',
    margin:'auto',
    backgroundColor: '#171717',
    padding:20,
    color:'white'
  },
  item: {
      backgroundColor:'#e2e3d3',
      marginBottom:15,
      width:'100%',
      borderRadius:'21px'
  },

  blackcolor:{
      color:'black'
  }
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

function golden(e) {
  e.target.backgroundColor='gold'
}

export default function SimpleList() {
  const classes = useStyles();

  return (
    <div id="services" className={`${classes.root} container`}>
      <h3>Services:</h3>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem className={`${classes.item} litem`} button>
          <ListItemIcon>
            <AttachMoneyIcon />
          </ListItemIcon>
          <ListItemText className={classes.blackcolor}  >Project Marketing</ListItemText>
        </ListItem>
        <Divider />
        <ListItem button className={`${classes.item} litem`}>
          <ListItemIcon>
            <PrintIcon />
          </ListItemIcon>
          <ListItemText className={classes.blackcolor}  >Law Paper Work</ListItemText>
        </ListItem>
        <Divider />
        <ListItem button className={`${classes.item} litem`}>
          <ListItemIcon>
            <CreateIcon />
          </ListItemIcon>
          <ListItemText className={classes.blackcolor}  >Planning/Designing</ListItemText>
          
        </ListItem>
        <Divider />
        <ListItem button className={`${classes.item} litem`}>
          <ListItemIcon>
            <GavelIcon />
          </ListItemIcon>
          <ListItemText className={classes.blackcolor}  >Development Work</ListItemText>
        </ListItem>
        <Divider />
      </List>
    
   
    </div>
  );
}
