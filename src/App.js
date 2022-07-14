import React, { Component } from 'react'
import Box from '@mui/material/Box';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const cheickList = [
  { id:'Nom :'   , lastName: 'Gertrude'  , firstName: 'Joel',age: 9 },
  { id:'Nom :  ' , lastName: 'Patricia'  , firstName: 'Coulby',age: 25  },
  { id:'Nom :  ' , lastName: 'Melissa'  , firstName: 'Kouame',age: 18   },
  { id:'Nom : '  , lastName: 'Cécile'  , firstName: 'Tiemele', age: 29 },
  { id:'Nom : '  , lastName: 'Francis'  , firstName: 'Rossini', age: 10 },
  { id:'Nom :  ', lastName: 'Roxie'  , firstName: 'Harvey', age: 11 },
];

export  class App extends Component {
  render() {
    return (

      <div >
        
      <Stack direction ="row" spacing={3}  justifyContent="space-evenly" paddingTop={10}>
         
      
      
      <Stack border={1} >

      <Button variant="contained" disableElevation >
     Liste des noms
    </Button>
      {cheickList.map((item)=>(
      <div>
      <p>{item.id}  {item.lastName}  {item.firstName} </p>
      
      
      </div>

    

      )  
      )
      }
  </Stack>

      <Box
      sx={{
        width: 500,
        height: 300,
      }}
    >
    
    
      <TextField fullWidth label="Veuillez entrer un nom svp" id="fullWidth" style={{marginTop:15}} />
      <Stack direction="row" spacing={2}>
      <Button variant ="contained" color="primary" style={{marginTop:10}}>Ajouter</Button>
      <Button variant="contained" color="success" style={{marginTop:10}}>Supprimer </Button>

      </Stack>
    </Box>

    </Stack> 
    
      </div>  
    )
  }
}
export default App;
