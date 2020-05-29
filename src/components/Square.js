import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(0.5),
      padding: '12px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
     
    },
    
  },
  root1: {
    '& > *': {
      margin: theme.spacing(1),
      padding: '4px',
      fontSize: 32,
      width:30,
      height:30,
      
     
    },
  }
      
}));


export default function Square(props) {
  const classes = useStyles();
    return (
      
      <Box  p={0.5}  className={classes.root}>
        <Button  variant="contained"  style={{ backgroundColor: '#e91e63' }}  className={classes.root1}  onClick={props.onClick}>
            {props.value}
        </Button>
        
        </Box>
        
    )
}