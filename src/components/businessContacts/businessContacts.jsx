import React from "react";
import { Redirect } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
<link rel="stylesheet" href="business.css" type="text/css" />

function BusinessContacts() {
    const { currentUser, logout } = useAuth();

    return <div>
    <table>
    <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Contact</th>
    </tr>
    <tr>
        <td>Navya</td>
        <td>navyak@gmail.com</td>
        <td>9017387489</td>
    </tr>
    <tr>
        <td>Yamini</td>
        <td>yamini@gmail.com</td>
        <td>9078383889</td>
    </tr>
    <tr>
        <td>gowri</td>
        <td>gowri@gmail.com</td>
        <td>8017387239</td>
    </tr>
    <tr>
        <td>Ashok</td>
        <td>ashok@gmail.com</td>
        <td>9017381231</td>
    </tr>
    <tr>
        <td>Mani</td>
        <td>manik@gmail.com</td>
        <td>9012344897</td>
    </tr>
    <tr>
        <td>Anil</td>
        <td>anilk@gmail.com</td>
        <td>9017389121</td>
    </tr>
    <tr>
        <td>murthi</td>
        <td>murthi@gmail.com</td>
        <td>8123387891</td>
    </tr>
    <tr>
        <td>vasu</td>
        <td>vasu@gmail.com</td>
        <td>7017387272</td>
    </tr>
    <tr>
        <td>chaitanya</td>
        <td>chaitanya@gmail.com</td>
        <td>9171276907</td>
    </tr>
    <tr>
        <td>shivaji</td>
        <td>shivajia@gmail.com</td>
        <td>9012767611</td>
    </tr>
    <tr>
        <td>sai</td>
        <td>saik@gmail.com</td>
        <td>8123067612</td>
    </tr>
    </table>
    </div>;
}

export default BusinessContacts;
