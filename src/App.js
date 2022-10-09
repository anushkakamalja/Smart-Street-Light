import './App.css';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function App() {
  function noti()
  {
    if (Notification.permission !== 'granted'){
      Notification.requestPermission();
      alert('Allow Notification Please');
     }else {
      var notification = new Notification("Gas level  Notification", {
       body: "Gas level",
      });
      notification.onclick = function() {
       window.open('chat.php');
      };
     }
     
  }
  let lpg=0.0;
  let co=0.0;
  let smoke=0.0;
  return (

    <div className="App">
      <div className="container">
        <Typography variant="h1">GAS KIOSK </Typography>
        <Typography variant="h4">LPG Gas level: {lpg}</Typography>
        <Typography variant="h4">CO Gas level: {co}</Typography>
        <Typography variant="h4">Smoke Level: {smoke}</Typography>
      </div>
      <Button className="bttn" variant="contained" onClick={noti}>CLICK</Button>
    </div>
  );
}



export default App;
