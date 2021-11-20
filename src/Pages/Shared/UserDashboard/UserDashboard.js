import React from 'react';
import { DropdownButton, Dropdown, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
const UserDashboard = () => {
    const { admin, logout, user } = useAuth();
    return (
        <>
            <DropdownButton id="dropdown-item-button" title="Dashboard">
                <div className="d-flex flex-column">
                    {admin && <div className="d-flex my-1 flex-column"> <Dropdown.ItemText className="fw-bold text-danger">Admin</Dropdown.ItemText> <NavLink className="nav-items my-2" to="/addadmin" style={isActive => ({
                        color: isActive ? "green" : "blue"
                    })}>Add Admin</NavLink>
                        <NavLink className="nav-items my-2" to="/addproduct" style={isActive => ({
                            color: isActive ? "green" : "blue"
                        })}>Add Product</NavLink>
                        <NavLink className="nav-items my-2" to="/manageallorders" style={isActive => ({
                            color: isActive ? "green" : "blue"
                        })}>Manage All Orders</NavLink>
                        <NavLink className="nav-items my-2" to="/manageproducts" style={isActive => ({
                            color: isActive ? "green" : "blue"
                        })}>Manage Products</NavLink>
                    </div>}
                    <NavLink className="nav-items my-2" to="/myorders" style={isActive => ({
                        color: isActive ? "green" : "blue"
                    })}>My Orders</NavLink>
                    <NavLink className="nav-items my-2" to="/addreviews" style={isActive => ({
                        color: isActive ? "green" : "blue"
                    })}>Review</NavLink>
                    <NavLink className="nav-items my-2" to="/payment" style={isActive => ({
                        color: isActive ? "green" : "blue"
                    })}>Pay</NavLink>
                    {
                        user?.email && <Button onClick={logout} className="mx-3 my-2" variant="outline-danger">Logout</Button>
                    }

                </div>
            </DropdownButton>
        </>
    );
}

export default UserDashboard;