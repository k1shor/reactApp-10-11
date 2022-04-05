import React from 'react'
import { Route, Navigate } from 'react-router-dom'
import { isAuthenticated } from '../auth'


const AdminRoute = ({ Component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => isAuthenticated() && isAuthenticated().user.role === 1 ?
                (<Component{...props} />) : 
                (<Navigate to={{
                    pathname: "/signin",
                    state: { from: props.location }
                }}
                />)
            } />


    )
}

export default AdminRoute