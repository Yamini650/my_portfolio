import React from "react";
import { Redirect } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

function BusinessContacts() {
    const { currentUser, logout } = useAuth();

    return <div>businessContacts</div>;
}

export default BusinessContacts;
