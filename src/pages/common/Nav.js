import { Link } from 'react-router-dom';

function Nav(props) {

    let{userNm} = props

    return (
        <div>
            <Link to={'/'}>Home</Link>
            <Link to={'/login'}>Login</Link>
            <div>{userNm ? userNm + "님으로 사용중" : "로그인 후 사용바랍니다."}</div>
        </div>
    );
}

export default Nav;