import { BrowserRouter as Router, Routes, Route }from "react-router-dom"

import Store from "./components/store";
import Home from "./components/home";


function App() {
  return (
    <div>
      <Router>
        <Home />
        <Routes>
        <Route path="/home" element={<Home />} /> 
        <Route path="/store" element={<Store />} />
        </Routes>
      </Router>
  </div>
  );
}

export default App;
