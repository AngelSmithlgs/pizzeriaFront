
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Landing from "./landing/Landing";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} />
        </Routes>
    </Router>
  );
}

export default App;