import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './pages/common/Nav.js';
import NotFound from './pages/common/NotFound.js';
import Home from './pages/common/Home.js';
import Login from './pages/common/Login.js';
import { useState } from 'react';

const App = () => {
  const [isLogin , setIsLogin] = useState(false);

  function loginCallBack(login)
  {
    setIsLogin(login);
  }

  return(
    <BrowserRouter>
      <div className = "App">
        <Nav />
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