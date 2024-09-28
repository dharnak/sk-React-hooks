import { Routes, Route } from 'react-router-dom';
import './css/App.css';
import Header from './components/Header';
import SampleUseState from './components/useState/SampleUseState';
import SampleUseRef from './components/SampleUseRef';
import SampleUseEffect from './components/SampleUseEffect';
import SampleUseContext from './components/SampleUseContext';
import ParentComponent from './components/Cleanup Example/ParentComponent';
import RealTimeUseEffect from './components/RealTimeUseEffect';
import StateObject from './components/useState/StateObject';
import StateArray from './components/useState/StateArray';

function App() {
  return (
    <div className='container-fluid'>
      <Header/>
      <Routes>
        <Route path='/' element={<SampleUseState/>} />
        <Route path='/usestate-object' element={<StateObject/>} />
        <Route path='/usestate-array' element={<StateArray/>} />

        <Route path='/useref' element={<SampleUseRef/>} />
        <Route path='/useeffect' element={<SampleUseEffect/>} />
        <Route path='/usecontext' element={<SampleUseContext/>} />
        <Route path='/cleanup' element={<ParentComponent/>} />
        <Route path='/fetchfact' element={<RealTimeUseEffect/>} />
      </Routes>
    </div>
  );
}

export default App;
