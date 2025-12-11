import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AvatarSelection from './pages/AvatarSelection';
import AvailableEvents from './pages/AvailableEvents';
import EventVoting from './pages/EventVoting';
import EventLeaderboard from './pages/EventLeaderboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AvatarSelection />} />
        <Route path="/events" element={<AvailableEvents />} />
        <Route path="/voting" element={<EventVoting />} />
        <Route path="/leaderboard" element={<EventLeaderboard />} />
      </Routes>
    </Router>
  );
}

export default App;
