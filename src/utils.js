// Grobal function
import axios from "axios";

// 로그인기능 구현 ㅡ 공통함수 엑세스토큰 재발급
export const refreshToken = function(refreshTokenCallBack,userId)
{
    axios.post(
        "/common/refreshToken",
        {
          inputId : window.sessionStorage.getItem("userId")
        })
        .then((res) => {
          console.log(res.data);
          axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.token;
          if(refreshTokenCallBack)
          {
            refreshTokenCallBack(true,res.data.msg);
          }

        //   setTimeout(function(){
        //     refreshToken(null);
        //   }, (60 * 1000));
        })
        .catch((ex) => {
            console.log("silent req fail : " + ex);
            if(refreshTokenCallBack)
            {
              refreshTokenCallBack(false,'');
            }
        })
        .finally(() => {
          console.log(":::refresh token request end:::");
        })
}

