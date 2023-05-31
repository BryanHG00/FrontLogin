import { Navigate } from "react-router-dom"
import PropTypes from 'prop-types'

export const ProtectedRoute = ({user, children})=> {
    if(user.id == 0){
        return <Navigate to="/" />
    }

    return children
}

ProtectedRoute.propTypes = {
    user: PropTypes.object,
    children: PropTypes.element.isRequired,
    navigateTo: PropTypes.string
}