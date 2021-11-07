import {BrowserRouter , Route, Routes, Link} from 'react-router-dom';
import Store from "./components/store";
import Home from "./components/home";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/store" component={Store} />
        </Routes>
      </div>
      <Home />
    </BrowserRouter>
  );
}

export default App;
