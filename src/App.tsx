import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Story from './pages/Story';
import Tidbits from './pages/Tidbits';
import Gifts from './pages/Gifts';
import Schedule from './pages/Schedule';
import Venue from './pages/Venue';
import QandA from './pages/QandA';
import WeddingParty from './pages/WeddingParty';
import Moments from './pages/Moments';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#faf7f5]">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/story" element={<Story />} />
          <Route path="/tidbits" element={<Tidbits />} />
          <Route path="/gifts" element={<Gifts />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/venue" element={<Venue />} />
          <Route path="/qanda" element={<QandA />} />
          <Route path="/wedding-party" element={<WeddingParty />} />
          <Route path="/moments" element={<Moments />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;