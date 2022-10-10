import './App.css';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useEffect,useState}  from 'react';

function App() {
  const [lpg,useLpg]=useState(0);
  const [co,useCo]=useState(0);
  const [smoke,useSmoke]=useState(0);
  function noti()
  {
    if (Notification.permission !== 'granted'){
      Notification.requestPermission();
      alert('Allow Notification Please');
     }else {
      var notification = new Notification("Gas level  Notification", {
       body: "Gas level leak at hazardous levels,Open windows and exit the premises immediately",
      });
      notification.onclick = function() {
       window.open('chat.php');
      };
     }
     
  }
  useEffect(()=>
    {
      if ((co>=65) || (smoke>=45) || (lpg>=550))
      {
        noti();
      }
    },[]);
  return (

    <div className="App">
      <div className="container">
        <Typography variant="h1">GAS KIOSK </Typography>
        <Typography variant="h4">LPG Gas level: {lpg}</Typography>
        <Typography variant="h4">CO Gas level: {co}</Typography>
        <Typography variant="h4">Smoke Level: {smoke}</Typography>
      </div>
    </div>
  );
}



export default App;
