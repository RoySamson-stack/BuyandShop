import {BrowserRouter , Route, Link} from 'react-router-dom';
import Store from "./components/store";





function App() {
  return (
<BrowserRouter>
    <Route path="/" exact component={Store} />
    <Route path="/store" component={Store} />
{/* <Route path="/" component={Home}/>
<Route path="/about" component={About}/> */}
</BrowserRouter>
  );
}

export default App;
