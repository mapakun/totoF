import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Nav from './pages/common/Nav.js';
import NotFound from './pages/common/NotFound.js';
import Home from './pages/common/Home.js';
import Login from './pages/common/Login.js';
import { useState,useEffect } from 'react';
import { refreshToken } from './utils.js';

const App = () => {
  const [isLogin , setIsLogin] = useState(false);
  const [userId , setUserId] = useState('');

  useEffect(() => {
    try{
      refreshToken(refreshTokenCallBack,userId)
    }catch(e){
      console.log(e);
    }
  },[]);

  function loginCallBack(login,userId)
  {
    setIsLogin(login);
    setUserId(userId);
    setTimeout(function(){
      refreshToken(refreshTokenCallBack,userId);
    }, (60 * 1000));
  }

  function refreshTokenCallBack(login,userId)
  {
    console.log("난몇번?");
    setIsLogin(login);
    setUserId(userId);
  }

  return(
    <BrowserRouter>
      <div className = "App">
        <Nav userId={userId}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login loginCallBack={loginCallBack}/>} />

          {/* 에러페이지 */}
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;