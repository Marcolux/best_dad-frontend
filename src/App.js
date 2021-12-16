import './App.css';

import { Route,Routes } from 'react-router-dom';

import NavigationBar from './components/NavigationBar';
import Login from './pages/Login';
import Signup from './pages/SignUp';
import UserPage from './pages/UserPage';
import Favfacts from './pages/FavFacts';
import FavJokes from './pages/FavJokes';
import FavQuotes from './pages/FavQuotes';



function App() {
  return (
    <div className="App">
    <NavigationBar/>
    <Routes>
    <Route path='/login' element={<Login/>}>Login</Route>
    <Route path='/signup' element={<Signup/>}>Signup</Route>
    <Route path='/user-page' element={<UserPage/>}>User page</Route>
    <Route path='/user-page/facts' element={<Favfacts/>}>facts</Route>
    <Route path='/user-page/jokes' element={<FavJokes/>}></Route>
    <Route path='/user-page/quotes' element={<FavQuotes/>}></Route>
    
    </Routes>
    </div>
  );
}

export default App;
