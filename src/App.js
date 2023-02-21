import Home from "./routes/Home/Home";
import Navbar from './components/Navbar/Navbar';
import Navigation from "./routes/Navigation/Navigation";
import Dropdown from './components/Dropdown/Dropdown';
import SignIn from "./routes/SignIn/SignIn";

import { Routes, Route} from 'react-router-dom';
 
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path='/shop' element={<Dropdown />} />
        <Route path='/sign-in' element={<SignIn />} />
      </Route>
      
    </Routes>
  ); 
};

export default App;
