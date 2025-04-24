import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Services from './Services';
import Marketing from './Marketing';
import Header from './Header';
function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/About' element={<About />} />
        <Route path='/Services' element={<Services />} />
        <Route path='/marketing' element={<Marketing />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
