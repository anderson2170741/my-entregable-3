import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'
import Characters from './Characters';

function App() {
  const [location, setLocation] = useState({});
  const [typeLocation, setTypeLocation] = useState("");

  useEffect(() => {
    const randomId = Math.floor(Math.random() * 125) + 1;
    axios.get(`https://rickandmortyapi.com/api/location/${randomId}`)
      .then(res => setLocation(res.data));
  }, []);

  console.log(location);

  const searchType = () => {
    axios.get(`https://rickandmortyapi.com/api/location/${typeLocation}`)
      .then(res => setLocation(res.data));
  }

  return (
    <div className="App">
      <div className='background'>
      </div>
      <div className='title'>
        <h1>Rick and Morty</h1>
      </div>
      <div className='search'>
        <input type="text" placeholder="Write the location id from 1 to 126" value={typeLocation} onChange={e => setTypeLocation(e.target.value)} />
        <button onClick={searchType}>Search</button>
      </div>
      <div className='information'>
        <div className='container-information'>
          <div className='cont'>
            <h2>Name:</h2>
            <p>{location.name}</p>
          </div>
          <div className='cont'>
            <h2>Type:</h2>
            <p>{location.type}</p>
          </div>
          <div className='cont'>
            <h2>Dimension:</h2>
            <p>{location.dimension}</p>
          </div>
          <div className='cont'>
            <h2>Residents:</h2>
            <p>{location.residents?.length}</p>
          </div>
        </div>
      </div>
      <div className='map'>
        <div className='map-container'>
          <ul>
            {location.residents?.map((location) => (
              <Characters
                location={location}
                url={location}
                key={location}
              />
            ))}
          </ul>

        </div>
        <footer>
            <h3>© Anderson Durán</h3>
        </footer>
      </div>

    </div>
  )
}

export default App
