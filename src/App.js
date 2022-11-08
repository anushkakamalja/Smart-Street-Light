import './App.css';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useEffect,useState}  from 'react';

function App() {
  const [dat,setDat]=useState(0);
  const [co,useCo]=useState(0);
  const [smoke,useSmoke]=useState(0);
     

  
  // useEffect(()=>
  //   {
  //     useCo(200);
  //     if ((co>=65) || (smoke>=45) || (lpg>=550))
  //     {
  //       noti();
  //     }
  //   },[]);
  return (

    <div className="App">
      <div className="container">
        <Typography className="title" variant="h1">GAS KIOSK </Typography>
        <iframe width="450" height="260" style={{border: "1px solid #cccccc"}} src="https://thingspeak.com/channels/1884399/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15"></iframe>
      </div>
    </div>
  );
}


export default App;

