import Navbar from './components/Navbar';
import Home from './components/Home';
import Favorite from './components/Favorite';
import Characters from './components/Characters';
import CharacterDetails from './components/CharacterDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CharacterIDProvider } from './components/CharacterIDContext';
import RandomCharacter from './components/RandomCharacter';

function App() {
  return (
    <CharacterIDProvider>
      <Router>
        <div className="App">
          <Navbar />
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/characters" element={<Characters />} />
              <Route path="/characters/:id" element={<CharacterDetails />} />
              <Route path="/favorite" element={<Favorite />} />
              <Route path="/RandomCharacter" element={<RandomCharacter />} />
            </Routes>
          </div>
        </div>
      </Router>
    </CharacterIDProvider>
  );
}

export default App;
