import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Blog from './Blog';

function App() {
  return (
    <BrowserRouter>
<Nav/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
</BrowserRouter>
  );
}

export default App;
