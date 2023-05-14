import axios, { AxiosHeaders } from 'axios';

/*
@ 엑시오스 공통함수
@ param
(1)type : get or post , (2)url : callURL , (3)reqData : body or param , (4)callBack : callBackFuction

ex)
const test = {inputId:'크앙',inputPw:'그앙'};
function testCallBack(res)
      {
        console.log("콜백함수 테스트 입니다 잘오면 반응합니다.");
        console.log(res);
      }

common.commonAxios("post","/gameinfo/test",test,testCallBack);
*/
export function commonAxios(type,url,reqData,callBack)
{
    const reqType = type

    switch (reqType)
    {
        case 'post':
            axios.post(
                url,
                reqData,
                { withCredentials: true }
            )
            .then((res) =>{
                console.log(res);
                return callBack(res);
            })
            .catch((e) =>{
                console.log(e);
            });
            break;

        case 'get':
            axios.get(url,
                {
                    params:
                    { 
                    reqData
                    },
                })
                .then((res) =>{
                    return res;
                })
                .catch();
            break;

        default:
            console.log('잘못된 요청입니다.');
    }
};
//엑시오스 호출 공통함수

