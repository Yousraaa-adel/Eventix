import { Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar/NavBar';
import Home from './pages/user/Home/Home';
import Events from './pages/user/Events/Events';
import TermsOfUse from './pages/user/TermsOfUse/TermsOfUse';
import Support from './pages/user/Support/Support';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/termsofuse" element={<TermsOfUse />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </>
  );
}

export default App;
