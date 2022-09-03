import './assets/css/App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importing Components
import Error from './components/Error';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import PositionsForm from './components/PositionsForm';
import PositionsUpdate from './components/PositionsUpdate';
import Positions from './components/Positions';
import A from './components/A';

function App() {
  return (
    <body>
      <BrowserRouter>
        <Header />

        <Routes>
            
            <Route exact path="/" element={<Home />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/index" element={<Home />} />

            <Route exact path="/positions" element={<Positions />} />
            <Route exact path="/positionsform" element={<PositionsForm />} />
            {/* <Route exact path="/positionsupdate/:id/:name" element={<PositionsUpdate />} /> */}
            <Route exact path="/positionsupdate/:id/:name" element={<A />} />

            <Route exact path="*" element={<Error />} />

        </Routes>

        <Footer />
      </BrowserRouter>
    </body>
      
  );
}

export default App;
