import React from 'react'
import { Route } from "react-router-dom";
import { useSelector } from 'react-redux';
import Redirect from './Redirect';

const UserRoute = ({children, ...rest}) => {
 
    const { currentUser } = useSelector((state) => state.user);

    return currentUser ? <Route {...rest} /> : <Redirect />;
};

export default UserRoute;
