import './App.css';
import React,{useState} from 'react';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import Todos from './Components/Todos';

function App() {
  const [alert, setAlert] = useState(null);
const showAlert=(message)=>{
  setAlert({
    msg:message
  })
  setTimeout(()=>{
    setAlert(null)
  },2000)
}
  return (
 <>
 <Navbar/>
 <Alert alert={alert}/>
 <Todos showAlert={showAlert}/>
 </>
  );
}

export default App;
