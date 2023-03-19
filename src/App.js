import Navbar from './components/Navbar';
import Home from './components/Home';
import Characters from './components/Characters';
import CharacterDetails from './components/CharacterDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/characters/:id" element={<CharacterDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
