import Drawer from './components/Drawer/Drawer'
import React,{useState} from 'react'
import About from './components/About/About';
import Form from './components/Form/Form';
import Herobody from "./components/herobody/Herobody";
import Multislider from './components/multislider/Multislider';

import Slider from "./components/slider/Slider";
import Regions from './components/Regions/Regions';
import Textstrip from "./components/textstrip/Textstrip";
import Services from './components/Services/Services';

const images = [
  "assets/img/SARMAD ALI KHOKAR.JPG",
  "assets/img/abdul maliik.jpg",
  "assets/img/ABDUL WAHEED.JPG",
  "assets/img/ADVOCATE. ARSHID KHAN (HIGH COURT).jpg",
  "assets/img/ALI LOHDI.JPG",
  "assets/img/dr.husnain.jpg",
 
  "assets/img/ENGR. ATIQ.JPG",
  "assets/img/hafeez afridi.jpg",
  "assets/img/IMTIAZ.JPG",
  "assets/img/SAJID ALI shah.jpg",
  "assets/img/SHER BAHADUR.JPG",
  "assets/img/sohail khanzadah.JPG",
  "assets/img/syed jaffar.JPG",
  "assets/img/Z R SHAHID.JPG",

]
function App() {
  const [renders,setRenders]=useState(0);
  return (
    <div>
      <div className="margin">
      <Drawer />
      </div>
      <div className="margin">
      <Slider />
      </div>
      <div className="margin">
      <Herobody />
      </div>
      <div className="margin">
      <Textstrip />
      </div>
  <div className="margin">
     
      <About />
      </div>
      <div className="margin">
      <Services /> 
      </div>
      <div className="margin">
      <Multislider images={images} renders={renders} setRenders={setRenders} />
      </div>
     <div className="margin">
      <Form />
      </div>
    </div>
  );
}

export default App;
