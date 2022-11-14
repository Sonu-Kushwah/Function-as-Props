import logo from './logo.svg';
import './App.css';
import User from './component/User';

function App() {
  const getData=()=>{
    alert("Hello World");
  }
  return (
    <>
     <User data={getData}/>
    </>
  );
}

export default App;
