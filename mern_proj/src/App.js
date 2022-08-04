
import './App.css';
import { About } from './components/About';
import  {Contact}  from './components/Contact';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Services } from './components/Services';
import {Route,Routes } from 'react-router-dom'
import { Login } from './components/Login';
import { Register } from './components/Register';
import { Dashboard } from './components/Dashboard';
import { Blog } from './components/Blog';
import { Toggle } from './Toggle';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/services" element={ <Services/> } />
        <Route path="/blog" element={ <Blog/> } />
        <Route path="/contact" element={ <Contact/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="/register" element={ <Register/> } />
        <Route path="/dashboard/:id" element={ <Dashboard/> } />
      </Routes>

    <Footer/> 
    {/* <Toggle/> */}

    
    </>
  );
}

export default App;
