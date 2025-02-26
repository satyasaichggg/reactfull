import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
function App() {
  let [modelstatus,setmodelstatus]=useState(true);

  return (
    <div className="App">
        <button onClick={()=>setmodelstatus(!modelstatus)}>login</button>
         <div className={`modelOverlay ${modelstatus ? 'modelshow':''}`}>
          <div className={`modeldiv ${modelstatus ? 'modeldivshow':''}`}> enquiry no

          </div>
         </div>
    </div>
  );
}

export default App;
