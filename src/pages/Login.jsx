import PropTypes from 'prop-types'
import { useEffect, useState } from 'react';
export const Login = ({login, user}) =>{
    const [userr, setUserr] = useState("");

    useEffect(()=>{
        if(user.id != 0){
            window.location.reload();
        }
        // 
    },[])

    return(
    <>
        {
            user.id ==0 ? (
                <>
                <i className="bi bi-brightness-alt-high-fill logo"></i>
                <h1 className="titulo">Login</h1>
                <div className='formIS'>
                    <label htmlFor="user">User</label>
                    <input type="text" id='user' value={userr} onChange={(e)=>setUserr(e.target.value)}/>
                    <label htmlFor="pass">Password</label>
                    <input type="password" id='pass'/>

                    <button onClick={login}>Login</button>
                </div>
                </>
            ):(
                <>
                    <h2 className='titulo'>Cerrando sesión..</h2>
                </>
            )
        }
        
    </>
    );
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
}