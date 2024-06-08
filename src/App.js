import './App.scss';
import {Route,Routes} from 'react-router-dom';
import Home from './Container/Home';
import About from './Container/About';
import Contact from './Container/Contact';
import Portfolio from './Container/Portfolio';
import Resume from './Container/Resume';
import Skills from './Container/Skills';
import Navbar from './Component/Navbar';
function App() {
  return (
    <div className="App">
      {/* navbar */}
      <Navbar/>

      {/* main page content */}
      
      <div className="App_main-page-content">
      <Routes>
        <Route index path='/'element={<Home/>} />
        <Route index path='/about'element={<About/>} />
        <Route index path='/contact'element={<Contact/>} />
        <Route index path='/portfolio'element={<Portfolio/>} />
        <Route index path='/resume'element={<Resume/>} />
        <Route index path='/skills'element={<Skills/>} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
