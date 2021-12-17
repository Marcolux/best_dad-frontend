import './App.css';

import { Route,Routes,Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react/cjs/react.development';
import axios from 'axios';

import NavigationBar from './components/NavigationBar';
import Login from './pages/Login';
import Signup from './pages/SignUp';
import UserPage from './pages/UserPage';
import Favfacts from './pages/FavFacts';
import FavJokes from './pages/FavJokes';
import FavQuotes from './pages/FavQuotes';
import HomePage from './pages/HomePage';



function App() {
  
  const [user,setUser] = useState({})
  

  useEffect(()=>{
    const fetchUser = () => {
    const userId = localStorage.getItem('userId')
    if (userId) {
    
    axios.get(`https://best-dad-backend.herokuapp.com/user/verify`, {
      headers: {
        Authorization: userId
      }
    })
    .then((response) => {
      setUser(response.data.user)
    })
  }
  }
  fetchUser()
  }, [user.id])




console.log(user)

  return (
    <div className="App">
    <NavigationBar user={user} setUser={setUser}/>
    <Routes>
    <Route path='/' element ={<HomePage user={user} setUser={setUser}/>}/>
    <Route path='/login' element={user.id ? <Navigate to={`/${user.id}`} element={<UserPage/>}/> : <Login user={user} setUser={setUser}/>}>Login</Route>
    <Route path='/signup' element={ user.id ? <Navigate to={`/${user.id}`} element={<UserPage/>}/>:<Signup user={user} setUser={setUser}/>}>Signup</Route>
    <Route path='/:id' element={
      user.id ? 
      <UserPage user={user}/>
      :
      <Navigate to='/login'
      />}>User p</Route>
    <Route path='/:id/facts' element={<Favfacts/>}>facts</Route>
    <Route path='/:id/jokes' element={<FavJokes/>}></Route>
    <Route path='/:id/quotes' element={<FavQuotes/>}></Route>
    
    </Routes>
    </div>
  );
}

export default App;
