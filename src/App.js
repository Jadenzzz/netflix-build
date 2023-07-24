import React, { useEffect } from 'react';
import './App.css'
import HomeScreen from './screen/HomeScreen';
import LoginScreen from './screen/LoginScreen';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {auth} from "./firebase";
import { logout, selectCount } from './features/counterSlice';
import { login } from './features/counterSlice';
import ProfileScreen from './screen/ProfileScreen';

function App() {
  const user = useSelector(selectCount);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubsrcibe = auth.onAuthStateChanged(userAuth => {
      if (userAuth)
      {
        //logged in
        console.log(userAuth)
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))
      }
      else
      {
        dispatch(logout())
        //logged out
      }
    });
    return unsubsrcibe;
  }, [dispatch]);

  return (
    <div className="App">
      <BrowserRouter>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route path='/profile' element={
              <ProfileScreen />
            }>
            </Route>
            <Route exact path='/' element={
              <HomeScreen />
            }>
            </Route>
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
