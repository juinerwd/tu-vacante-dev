import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {Navbar, Nav, Button, Dropdown} from 'react-bootstrap';
import { startLogout } from '../actions/auth';

import '../styles/components/navbar.scss';

function NavBar() {

    const dispatch = useDispatch();
    const { uid, name, profilePhoto, role } = useSelector(state => state.auth);
    let clearName = '';

    if(!!name){
        clearName = name.replace(/\s+/g, '');
    }

    const handleLogout = () => {
        dispatch(startLogout());
    }
    return (
        <Navbar bg="light" expand="lg">
            <Link className="logo" to="/">VacanteDev</Link>
            {/* <Navbar.Brand to="#home">VacanteDev</Navbar.Brand> */}
            <Navbar.Toggle bg="white" aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                <Nav className={`navbar-nav ml-auto ${!!uid ? 'hidden' : ''}`}>
                    <Link className="nav-link" to="/vacancies">Vacantes</Link>
                    <Link className="nav-link" to="/create-vacancy">Publicar vacante</Link>
                    <Link className="nav-link" to="/login">Ingresar</Link>
                </Nav>
                <Nav className={`navbar-nav ml-auto ${!!uid ? '' : 'hidden'}`}>
                    <Link className="nav-link" to="/vacancies">Vacantes</Link>
                    <Link className={role === "RECRUITER_ROLE" ? "nav-link" : 'd-none' } to="/create-vacancy">Publicar vacante</Link>
                    <Dropdown>
                        <Dropdown.Toggle className="btn__toggle--drodown" variant="success" id="dropdown-basic">
                            <img src={profilePhoto} alt="Foto" />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Link className={role === "DEV_ROLE" ? 'dropdown-item' : 'd-none'} to={role === "DEV_ROLE" ? `/profile-dev/${clearName}` : 'd-none'}>Mi perfil</Link>
                            <Link className={role === "RECRUITER_ROLE" ? 'dropdown-item' : 'd-none'} to={role === "RECRUITER_ROLE" ? `/profile-recruiter/${clearName}` : 'd-none'}>Mi perfil</Link>

                            <Link className={role === "DEV_ROLE" ? 'dropdown-item' : 'd-none'} to="/">Publicar HV</Link>
                            <Link className={role === "RECRUITER_ROLE" ? 'dropdown-item' : 'd-none'} to="/my-vacancies">Mis vacantes</Link>

                            <Link className={role === "DEV_ROLE" ? 'dropdown-item' : 'd-none'} to={`/account-dev/${clearName}/edit`}>Configuración</Link>
                            <Link className={role === "RECRUITER_ROLE" ? 'dropdown-item' : 'd-none'} to={`/account-recruiter/${clearName}/edit`}>Configuración</Link>

                            <Button className="dropdown-item btn-logout" onClick={handleLogout}>Cerrar sesión</Button>
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar
