import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Nav from './pages/common/Nav.js';
import NotFound from './pages/common/NotFound.js';
import Home from './pages/common/Home.js';
import Login from './pages/common/Login.js';
import AuthRoute from './components/common/AuthRoute.js'
import GameInfo from './pages/gameinfo/GameInfo.js';

import { useState,useEffect } from 'react';
import { refreshToken } from './utils.js';

const App = () => {
  const [isLogin , setIsLogin] = useState(false);
  const [userId , setUserId] = useState('');
  const [userNm , setUserNm] = useState('');

  useEffect(() => {
    try{
      refreshToken(refreshTokenCallBack)
    }catch(e){
      console.log(e);
    }
  },[]);

  function loginCallBack(login,userId,userNm)
  {
    setIsLogin(login);
    setUserId(userId);
    setUserNm(userNm);
    setTimeout(function(){
      refreshToken(refreshTokenCallBack);
    }, (60 * 1000));
  }

  function refreshTokenCallBack(login,userId,userNm)
  {
    setIsLogin(login);
    setUserId(userId);
    setUserNm(userNm);
    
    if(login)                           //로그인 된 상태라면 silentLogin 을 계속 수행한다. 만료시 세션아웃으로 보는 로직 처리 예정.
    {
      setTimeout(function(){
        refreshToken(refreshTokenCallBack);
      }, (60 * 1000));
    }else{                                  //리프레시토큰 or 로그인만료
      window.sessionStorage.clear()         //세션스토리지 정리    
    }

  }

  return(
    <BrowserRouter>
      <div className = "App">
        <Nav userNm={userNm}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login loginCallBack={loginCallBack}/>} />      

          {/* 에러페이지 */}
          <Route path="*" element={<NotFound />}></Route>

          {/* 권한자 라우터 */}
          <Route element={<AuthRoute isLogin={isLogin} />}>
            <Route path="/GameInfo" element={<GameInfo />}/>
          </Route>

        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;