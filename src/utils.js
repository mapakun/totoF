// Grobal function
import axios from "axios";

// 로그인기능 구현 ㅡ 공통함수 엑세스토큰 재발급
export const refreshToken = function(refreshTokenCallBack)
{
  if(window.sessionStorage.getItem("userId") === null)
    return;

    axios.post(
        "/common/refreshToken",
        {
          inputId : window.sessionStorage.getItem("userId")
        },
        { withCredentials: true })
        .then((res) => {
          console.log(res.data);
          axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.token;
          if(refreshTokenCallBack)
          {
            refreshTokenCallBack(true,res.data.userId,window.sessionStorage.getItem("userNm"));
          }

        //   setTimeout(function(){
        //     refreshToken(null);
        //   }, (60 * 1000));
        })
        .catch((ex) => {
            console.log("silent req fail : " + ex);
            if(refreshTokenCallBack)
            {
              refreshTokenCallBack(false,'','');
            }
        })
        .finally(() => {
          console.log(":::refresh token request end:::");
        })
}

