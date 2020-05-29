import React, { Component } from 'react'
import Board from './Board';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

export default class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            xIsNext: true,
            stepNumber: 0,
            history: [
                { squares: Array(9).fill(null) }
            ]
        }
    }
    jumpTo(step){
        this.setState({
            stepNumber: step,
            xIsNext: (step%2)===0
        })
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        const winner = calculateWinner(squares);
        if (winner || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat({
                squares: squares
            }),
            xIsNext: !this.state.xIsNext,
            stepNumber: history.length
        });

    }

    render() {
          
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);
        const moves = history.map((step, move) => {
            const desc = move ? 'Go to step ' + move : 'Start the Game';
          
            return (
                <Box p={0.5} key={move} >
                    <Button variant="contained"  style={{ backgroundColor: '#ce93d8' }}   onClick={() => { this.jumpTo(move) }}>
                        {desc}
                    </Button>
                </Box>
            )
        });
        let status;
        if (winner) {
            status = 'Winner is ' + winner;
        } else {
            status = 'Next Player is ' + (this.state.xIsNext ? 'X' : 'O');
        }


        return (
             <Box
          
            p={2}
            mt= {5}
            position="absolute"
            top={50}
            left="25%"
            display={{ xs: 'block', md: 'none', lg: 'flex' }}
            flex-direction= "row"
            zIndex="tooltip"
            
            
          >             
             <Box>
                    <Board onClick={(i) => this.handleClick(i)}
                        squares={current.squares} />
                </Box>
                <Box  p={5}  >
        
                    <Box p={1} style={{ backgroundColor: '#f8bbd0',boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'}} >{status}</Box>
                    <Box  p={1}  >{moves}</Box>
                </Box>

            </Box>
        )
    }
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
            return squares[a];
        }
    }

    return null;
}