import PropTypes from 'prop-types'
import { Link, useNavigate } from 'react-router-dom'
import homelogo from '../imgs/home.png'
import { useEffect } from 'react'

export const ExitoIS = ({logout, user})=> {
    //no se usa navigate ya que confunde las rutas de manera lógica, con useNavigate forzamos la redirección
    const ruta = useNavigate();

    useEffect(()=>{
        ruta('/home');
    },[])

  return (
    <>
        <div className='navISE'>
            <div className="navISE-I">
                <Link className='homebtn' to='/home'><img alt='homelogo' src={homelogo} width='25px'></img>Home</Link>
            </div>
            
            <div className='navISE-D'>
                <h2>Welcome {user.name}!</h2>
                <button onClick={logout}>Log out</button>
            </div>
        </div>
    </>
  )
}

ExitoIS.propTypes = {
    logout: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
}