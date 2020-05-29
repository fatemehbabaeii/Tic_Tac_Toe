import React from 'react';
import Game from './components/Game';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';


function App() {
  return (
<Container maxWidth="lg"  style={{ backgroundColor: '#fff59d', height: '100vh' }}>

<div className="container shadow-lg p-3 my-3 bg-success border text-center"><h3>Tic Tac Toe</h3>
</div>
<Game />

</Container>
 );
}
export default App;
