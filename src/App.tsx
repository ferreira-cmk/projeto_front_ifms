import { Routes, Route } from 'react-router-dom'
import Home from './pages/home';
import About from './pages/about';
import Header from './components/Header';
//import People from './components/People';
//import ContainerPretoEspacial from './components/Content';
import './App.css'
import Person from './pages/person';

const App = () => {
  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/pessoas" element={<Person/>} />
      </Routes>
    </>
  );
};

export default App;