import Header from './Components/Header/Header';
import './App.css';
import Body from './Components/Body/Body';
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <div className="App custom-bg">
     <Header/>
     {/* <Body/> */}
     <Outlet/>
    </div>
  );
}

export default App;
