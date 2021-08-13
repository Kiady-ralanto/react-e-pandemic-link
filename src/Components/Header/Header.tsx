/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import './Header.css' ;
import Logo from '../Logo/Logo' ;
import { MyContext } from '../MyContext';
import { NavLink } from 'react-router-dom';
var FontAwesome = require('react-fontawesome');

class Header extends Component {
    render(){
        return (
            <header>
                <div className="wrapper" id="header-content">
                    <Logo />
                    
                    <nav id="primary-menu">
                        <ul>
                            <li><NavLink to="/feed" activeClassName="active">Actualités</NavLink></li>
                            <li><NavLink to="/profile" activeClassName="active">Profil</NavLink></li>
                            <li><NavLink to="/login" activeClassName="active">Se connecter</NavLink></li>
                            
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}
Header.contextType = MyContext ;
export default Header ;