import React from 'react';
import CartWidget from './CartWidget.jsx';
import '../css/NavBar.css';

function NavBar() {
    return (
    <nav className='navbar navbar-expand-lg navbar-light p-0 mx-0 bg-success' id='menu'>
        <div className='container-fluid bg-success p-1 m-0 d-flex mx-lg-0'>
            <a className='navbar-brand mx-1 my-0' href='#'>
                <span className='fs-1 titulo-logo md-4'>Algoritmia!</span>
                <span className='fw-light subtitulo-logo'>{' '}La tecnología que necesitas</span>
            </a>
            <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon' />
            </button>
        </div>
        <div className='container-fluid bg-warning mx-0 d-flex flex-row-reverse'>
            <div className='col-lg-6 collapse navbar-collapse navbar-menu bg-warning p-3 m-0' id='navbarSupportedContent'>
                <ul className='navbar-nav me-auto mb-2 mb-lg-0 d-flex ml-auto'>
                    <li className='nav-item align-bottom align-self-start'>
                        <a className='nav-link active' aria-current='page' href='#Inicio'> Inicio</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='#Comunidad'> Comunidad</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='#unete'> Unete</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='./pages/eventos.html'> Eventos</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='#footer'>{' '} Contacto</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='./pages/tienda.html'>{' '}Tienda</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='./pages/miCuenta.html'>{' '}Mi Cuenta</a>
                    </li>
                </ul>
                <CartWidget/>
            </div>
        </div>
    </nav>
);
}

export default NavBar;