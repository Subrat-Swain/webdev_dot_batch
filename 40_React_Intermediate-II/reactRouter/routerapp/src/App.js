import './App.css';
import { Routes , Route, NavLink} from "react-router-dom"
import Home from "./components/Home";
import Support from "./components/Support";
import About from "./components/About";
import Labs from "./components/Labs";
import NotFound from "./components/NotFound";
import MainHeader from './components/MainHeader';


function App() {
  return (
    <div className='App'>

      <nav>
        <ul>
          <li>
            {/* <Link to="/">Home</Link> */}
            <NavLink to="/">Home</NavLink>

            {/* Link used for linking components with their route path 
            where as NavLink adds an "active" class For recognize
            which component is active then we can assign custom css*/}


          </li>
          <li>
            {/* <Link to="/support">Support</Link> */}
            <NavLink to="/support">Support</NavLink>
          </li>
          <li>
            {/* <Link to="/about">About</Link> */}
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            {/* <Link to="/labs">Labs</Link> */}
            <NavLink to="/labs">Labs</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>

            {/* Parent Route:-Home(Nested Routing) */}
        <Route path="/" element={<MainHeader/>}>

              {/* Default Route */}
          <Route index element={<Home/>}/>

          <Route path="/support" element={<Support/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/labs" element={<Labs/>}/>
          {/* NOT FOUND */}
          <Route path="*" element={<NotFound/>}/>

        </Route>

      </Routes>

    </div>
  )
}

export default App;
