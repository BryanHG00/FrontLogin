import PropTypes from 'prop-types'
export const Login = ({login}) =>{

    return(
    <>
        <i className="bi bi-brightness-alt-high-fill logo"></i>
        <h1 className="titulo">Login</h1>
        <div className='formIS'>
            <label htmlFor="user">User</label>
            <input type="text" id='user'/>
            <label htmlFor="pass">Password</label>
            <input type="password" id='pass'/>

            <button onClick={login}>Login</button>
        </div>
    </>
    );
}

Login.propTypes = {
    login: PropTypes.func.isRequired
}