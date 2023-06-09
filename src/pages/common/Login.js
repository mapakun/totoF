import { useState,useEffect } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login = (props) => {
  const [inputId, setInputId] = useState('')
  const [inputPw, setInputPw] = useState('')

  const navigate = useNavigate();

  // input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
  const handleInputId = (e) => {
    setInputId(e.target.value)
  }

  const handleInputPw = (e) => {
    setInputPw(e.target.value)
  }

  // login 버튼 클릭 이벤트 
  const onClickLogin = () => {
    console.log('click login')

    axios.post(
      "/common/login",
      {
        inputId : inputId,
        inputPw : inputPw
      },
      { withCredentials: true })
      .then((res) => {
        console.log(res);
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.token;
        props.loginCallBack(true,res.data.userId,res.data.userNm);
        window.sessionStorage.setItem("userId" , res.data.userId);                     //유저아이디 세션스토리지 저장
        window.sessionStorage.setItem("userNm" , res.data.userNm)
        navigate('/')      //에러수정 및 엑시오스 추상화 생각
      })
      .catch();
  };

  // 페이지 렌더링 후 가장 처음 호출되는 함수 주석처리로 차단
  // useEffect(() => {
  //   axios.get('/user_inform/login')
  //   .then(res => console.log(res))
  //   .catch()
  // },
  // // 페이지 호출 후 처음 한번만 호출될 수 있도록 [] 추가
  // [])

    return (
      <div>
        <p>로그인 페이지 입니다.</p>
        <div>
          <h2>로그인창</h2>
        </div>
        <div>
          <label htmlFor='input_id'>ID : </label>
          <input type='text' name='input_id' value={inputId} onChange={handleInputId} />
        </div>
        <div>
          <label htmlFor='input_pw'>PW : </label>
          <input type='password' name='input_pw' value={inputPw} onChange={handleInputPw} />
        </div>
        <div>
          <button  type='button' onClick={onClickLogin}>Login</button>
        </div>
      </div>
    );
  };
  
  export default Login;