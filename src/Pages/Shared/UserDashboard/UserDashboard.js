import React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const UserDashboard = () => {
    const { admin } = useAuth();
    return (
        <>
            <DropdownButton id="dropdown-item-button" title="Dashboard">

                {admin && <div> <Dropdown.ItemText className="fw-bold text-danger">Admin</Dropdown.ItemText> <NavLink className="nav-items" to="/addadmin" style={isActive => ({
                    color: isActive ? "green" : "blue"
                })}>Add Admin</NavLink></div>}
                <NavLink className="nav-items" to="/myorders" style={isActive => ({
                    color: isActive ? "green" : "blue"
                })}>My Orders</NavLink>

                <Dropdown.Item as="button">Action</Dropdown.Item>
                <Dropdown.Item as="button">Another action</Dropdown.Item>
                <Dropdown.Item as="button">Something else</Dropdown.Item>
            </DropdownButton>
        </>
    );
}

export default UserDashboard;