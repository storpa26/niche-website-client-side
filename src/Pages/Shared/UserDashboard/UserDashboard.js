import React from 'react';
import { DropdownButton, Dropdown, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const UserDashboard = () => {
    const { admin, logout } = useAuth();
    return (
        <>
            <DropdownButton id="dropdown-item-button" title="Dashboard">
                <div className="d-flex flex-column">
                    {admin && <div className="d-flex flex-column"> <Dropdown.ItemText className="fw-bold text-danger">Admin</Dropdown.ItemText> <NavLink className="nav-items" to="/addadmin" style={isActive => ({
                        color: isActive ? "green" : "blue"
                    })}>Add Admin</NavLink>
                        <NavLink className="nav-items" to="/addproduct" style={isActive => ({
                            color: isActive ? "green" : "blue"
                        })}>Add Product</NavLink>
                    </div>}
                    <NavLink className="nav-items" to="/myorders" style={isActive => ({
                        color: isActive ? "green" : "blue"
                    })}>My Orders</NavLink>
                    <NavLink className="nav-items" to="/addreviews" style={isActive => ({
                        color: isActive ? "green" : "blue"
                    })}>Review</NavLink>
                    <NavLink className="nav-items" to="/payment" style={isActive => ({
                        color: isActive ? "green" : "blue"
                    })}>Pay</NavLink>
                    <Button onClick={logout} className="mx-3" variant="outline-danger">Logout</Button>
                </div>
            </DropdownButton>
        </>
    );
}

export default UserDashboard;