import React, { Component } from 'react';
import Square from './Square';
import Box from '@material-ui/core/Box';
import { shadows } from '@material-ui/system';
import Grid from '@material-ui/core/Grid';


  
export default class Board extends Component {
  
    renderSquare(i){
        return <Square value={this.props.squares[i]}
        onClick={()=>this.props.onClick(i)}
        />
    }
    render() {
        return (
                 
       <Box p={0.5} mt={4}
        style={{ backgroundColor: '#f8bbd0',boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)' }} >
            
            <Box  display="flex" justifyContent="center">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                              
            </Box>
              <Box display="flex"  justifyContent="center">
              {this.renderSquare(3)}
              {this.renderSquare(4)}
              {this.renderSquare(5)}                               
      </Box> 
       <Box display="flex" justifyContent="center">
              {this.renderSquare(6)}
              {this.renderSquare(7)}
              {this.renderSquare(8)}
</Box>
</Box>
      
        )
    }
}