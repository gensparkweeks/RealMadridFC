import './assets/css/App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importing Components
import Error from './components/Error';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import PositionsForm from './components/PositionsForm';
import Positions from './components/Positions';
import PositionsUpdate from './components/PositionsUpdate';
import Country from './components/Country';
import CountryForm from './components/CountryForm';
import CountryUpdate from './components/CountryUpdate';
import Player from './components/Player';
import PlayerForm from './components/PlayerForm';
import PlayerUpdate from './components/PlayerUpdate';

function App() {
  return (
      <BrowserRouter>
        <Header />

        <Routes>
            
            <Route exact path="/" element={<Home />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/index" element={<Home />} />

            <Route exact path="/positions" element={<Positions />} />
            <Route exact path="/positionsform" element={<PositionsForm />} />
            <Route exact path="/positionsupdate/:id/:name" element={<PositionsUpdate />} />

            <Route exact path="/countries" element={<Country />} />
            <Route exact path="/contriesform" element={<CountryForm  />} />
            <Route exact path="/contriesupdate/:id/:name/:flag" element={<CountryUpdate  />} />

            <Route exact path="/players" element={<Player />} />
            <Route exact path="/playersform" element={<PlayerForm />} />
            <Route exact path="/playersupdate/:id" element={<PlayerUpdate />} />

            <Route exact path="*" element={<Error />} />

        </Routes>

        <Footer />
      </BrowserRouter>
  );
}

export default App;
