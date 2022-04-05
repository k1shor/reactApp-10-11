import React from 'react'
import { Route, Navigate } from 'react-router-dom'
import { isAuthenticated } from '../auth'


const PrivateRoute = ({ Component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => isAuthenticated() && isAuthenticated().user.role === 0 ?
                (<Component{...props} />) : <Navigate to={{
                    pathname: "/signin",
                    state: { from: props.location }
                }}
                />
            } />


    )
}

export default PrivateRoute