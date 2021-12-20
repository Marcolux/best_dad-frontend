import './App.css';

import { Route,Routes,Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import NavigationBar from './components/NavigationBar';
import Login from './pages/Login';
import Signup from './pages/SignUp';
import UserPage from './pages/UserPage';
import Favfacts from './pages/FavFacts';
import FavJokes from './pages/FavJokes';
import FavQuotes from './pages/FavQuotes';
import HomePage from './pages/HomePage';
import updateInfo from './pages/UpdateForm';



function App() {
  
  const [user,setUser] = useState({})
  

  const fetchUser = async () => {
  const userId = localStorage.getItem('userId')
    if (userId) {
      
      // axios.get(`https://best-dad-backend.herokuapp.com/user/verify`, 
      await axios.get(`http://localhost:3001/user/verify`, 
      {
        headers: {
          Authorization: userId
        }
      })
      .then((response) => {
        setUser(response.data.user)
      })
    }
  }
  useEffect(fetchUser, [])




console.log('app', user.id)

  return (
    <div className="App">
    <NavigationBar user={user} setUser={setUser}/>
    <Routes>
    <Route path='/' element ={<HomePage user={user} setUser={setUser}/>}/>
    <Route path='/Login' element={user.id ? <Navigate to={`/${user.id}`} element={<UserPage/>}/> : <Login user={user} setUser={setUser}/>}>Login</Route>
    <Route path='/Signup' element={user.id ? <Navigate to={`/${user.id}`} element={<UserPage/>}/> : <Signup user={user} setUser={setUser}/>}>Signup</Route>
    <Route path='/:id' element={user.id ?  <UserPage user={user}/>
    :
    <div className='spin'>
  
    </div>
    // <Navigate to='/'/>
    }></Route>
    <Route path='/:id/facts' element={user? <Favfacts/> :<Navigate to='/'/>}></Route>
    <Route path='/:id/jokes' element={ user.id ? <FavJokes/> :<Navigate to='/'/>}></Route>
    <Route path='/:id/quotes' element={ user.id ? <FavQuotes/> : <Navigate to='/'/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
