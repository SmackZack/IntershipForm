import React, { useState } from "react";
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBBtn, MDBContainer
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';

const NavbarPage = ({location}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    }
    return (
        <MDBNavbar color="special-color-dark" dark expand="md">
            <MDBContainer>
                <MDBNavbarBrand>
                    <h1 className="green-text">Key2IQ</h1>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={toggleCollapse} />
                <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
                    <MDBNavbarNav right>
                        <MDBNavItem >
                            <MDBNavLink to="/"><MDBBtn color="green">Form</MDBBtn></MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="/data"><MDBBtn color="green">Data</MDBBtn></MDBNavLink>
                        </MDBNavItem>

                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}


export default NavbarPage;