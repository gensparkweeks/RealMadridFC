import './assets/css/App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importing Components
import Position from './components/Position';
import Error from './components/Error';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import PositionForm from './components/PositionForm';

function App() {
  return (
    <body>
      <BrowserRouter>
        <Header />

        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/index" element={<Home />} />

            <Route exact path="/positions" element={<Position />} />
            <Route exact path="/positionsform" element={<PositionForm />} />

            <Route exact path="*" element={<Error />} />

        </Routes>

        <Footer />
      </BrowserRouter>
    </body>
      
  );
}

export default App;
