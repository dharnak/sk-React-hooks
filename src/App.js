import { Routes, Route } from 'react-router-dom';
import './css/App.css';
import Header from './components/Header';
import SampleUseState from './components/SampleUseState';
import SampleUseRef from './components/SampleUseRef';
import SampleUseEffect from './components/SampleUseEffect';
import SampleUseContext from './components/SampleUseContext';
import ParentComponent from './components/Cleanup Example/ParentComponent';
import RealTimeUseEffect from './components/RealTimeUseEffect';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<SampleUseState/>} />
        <Route path='/useref' element={<SampleUseRef/>} />
        <Route path='/useeffect' element={<SampleUseEffect/>} />
        <Route path='/usecontext' element={<SampleUseContext/>} />
        <Route path='/cleanup' element={<ParentComponent/>} />
        <Route path='/fetchfact' element={<RealTimeUseEffect/>} />
      </Routes>
    </>
  );
}

export default App;
