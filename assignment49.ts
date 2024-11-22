// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

// Component Imports
const Home = () => {
  return (
    <div>
      <h2>Welcome to the Comic Book Library</h2>
      <p>Explore your favorite characters and comics!</p>
    </div>
  );
};

const BrowseCharacters = () => {
  const characters = [
    { id: 1, name: 'Spider-Man' },
    { id: 2, name: 'Iron Man' },
    { id: 3, name: 'Captain America' },
    // Add more characters here
  ];

  return (
    <div>
      <h2>Browse Characters</h2>
      <ul>
        {characters.map(character => (
          <li key={character.id}>
            <NavLink to={`/character/${character.id}`}>{character.name}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

const CharacterDetails = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    // Replace with actual API call
    const fetchCharacter = async () => {
      const characterDetails = {
        1: { name: 'Spider-Man', description: 'Friendly neighborhood Spider-Man', comics: ['Amazing Spider-Man #1', 'Spider-Man #2'] },
        2: { name: 'Iron Man', description: 'Genius, billionaire, playboy, philanthropist', comics: ['Iron Man #1', 'Iron Man #2'] },
        3: { name: 'Captain America', description: 'Super soldier fighting for justice', comics: ['Captain America #1', 'Captain America #2'] },
      };
      setCharacter(characterDetails[id]);
    };

    fetchCharacter();
  }, [id]);

  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{character.name}</h2>
      <p>{character.description}</p>
      <h3>Comics:</h3>
      <ul>
        {character.comics.map((comic, index) => (
          <li key={index}>{comic}</li>
        ))}
      </ul>
    </div>
  );
};

const Comics = () => {
  return (
    <div>
      <h2>Comics</h2>
      <p>This component is under construction. Check back later!</p>
    </div>
  );
};

const NotFound = () => {
  return (
    <div>
      <h2>404 - Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/" end>Home</NavLink>
            </li>
            <li>
              <NavLink to="/browse-characters">Browse Characters</NavLink>
            </li>
            <li>
              <NavLink to="/comics">Comics</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse-characters" element={<BrowseCharacters />} />
          <Route path="/character/:id" element={<CharacterDetails />} />
          <Route path="/comics" element={<Comics />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
