
import Header from './Component/Header';
import Header2 from './Component/Header2';
import About from './Component/About' 
import About2 from './Component/About2' 
import About3 from './Component/About3' 
import Map from './Component/Map' 
import './App.css';

import { Slide } from 'hero-slider';
import Slider from './Component/Slider';

function App() {
  return (
    <div className="App">
      <Header/>
      <Header2/>
      <Slider/>
      <About/>
      <About2/>
      <About3/>
      <Map/>
      
    </div>
  );
}

export default App;
