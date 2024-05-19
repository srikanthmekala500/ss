 
import './App.css';
import Bet_dilution from './components/Bet_dilution';
import Bet from './components/Bet';
import { Route, Routes } from 'react-router-dom';
import ShowDilution from './components/ShowDilution';

function App() {
  return (
    <div className="App">
   <Routes>

<Route path='/bet' element={<Bet/>}/> 
<Route path='/dilution' element={<Bet_dilution/>}/> 
<Route path='/ShowDilution/:id' element={<ShowDilution/>}/> 
     
 <Route/>
 </Routes>
    </div>
  );
}

export default App;
