import axios, { AxiosHeaders } from 'axios';

//엑시오스 호출 공통함수
export function commonAxios(type,url,reqData,callBack)
{
    const reqType = type

    switch (reqType)
    {
        case 'post':
            axios.post(url,
                reqData
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

