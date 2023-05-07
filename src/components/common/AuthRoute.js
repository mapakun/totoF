import React from "react";
import { Navigate, Outlet  } from "react-router-dom";

// 로그인 여부를 판단하여 페이지접근을 확인하는 AuthRoute
function AuthRoute(props)
{
    let{isLogin} = props

    return (
    isLogin ? <Outlet/>  : <Navigate to="/login" />
    );
}

export default AuthRoute;