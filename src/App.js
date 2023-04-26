import React, {useEffect} from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { useDispatch } from "react-redux";
import { auth } from './firebase';
import { setUser } from './redux/actions';

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
     auth.onAuthStateChanged((authUser) => {
       if(authUser) {
          dispatch(setUser(authUser));
       } else {
        dispatch(setUser(null));
       }
     })
  },[dispatch])
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route exact path="/weCodeForYou" element={<Home />} />
        <Route path="/weCodeForYou/login" element={<Login />} />
        <Route path="/weCodeForYou/register" element={<Register />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
