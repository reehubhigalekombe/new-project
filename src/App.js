import './App.css';
import Home from "./pages/Home";
import Services from "./pages/Services";
import Partnership from "./pages/Partnership"
import Client from "./pages/Client";
import Conduct from "./pages/Conduct";
import Company from "./pages/Company"
import Blog from "./pages/Blog"
import { 
  BrowserRouter as Router,
Route,
Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" exact element= {<Home/>}  />
          <Route path="/company" exact element= {<Company/>}  />
          <Route path="/client" exact element= {<Client/>}  />
          <Route path="/services" exact element= {<Services/>}  />
          <Route path="/partnership" exact element= {<Partnership/>}  />
          <Route path="/conduct" exact element= {<Conduct/>}  />
          <Route path="/blog" exact element= {<Blog/>}  />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
