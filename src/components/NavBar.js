import React from 'react'
import '../components/NavBar.css'
import CartWidget from './CartWidget'
import logoImg from '../assets/images/Logo.png'
    

export default function NavBar({cartCount}) {
    return (
        <div className="menu">
            <div className="menu_top">
                <div className="logo-garabatos">
                    <img src={logoImg}/>
                </div>
                <div className="logo-cart">
                    <CartWidget cartCount={cartCount}/>
                </div>
            </div>
            <div className="menu_bottom">
                <div className="menus-container">
                    <a href="#" id="nena-menu">Nena</a>
                    <div className="list-container-nena">
                        <ul className="categorias">
                            <li><a href="#">Zapatillas</a></li>
                            <li><a href="#">Zapatos</a></li>
                            <li><a href="#">Ojotas</a></li>
                            <li><a href="#">Guillerminas</a></li>
                            <li><a href="#">Botas</a></li>
                        </ul>
                        <ul className="marcas">
                            <li><a href="#">Ferli</a></li>
                            <li><a href="#">Marcel</a></li>
                            <li><a href="#">Atomik</a></li>
                            <li><a href="#">Diez Indiecitos</a></li>
                            <li><a href="#">Crocs</a></li>
                        </ul>
                        <ul className="temporada">
                            <li><a href="#">Primavera/Verano</a></li>
                            <li><a href="#">Otoño/Invierno</a></li>
                            <li><a href="#">Escolar</a></li>
                        </ul>
                    </div>
                    <a href="#" id="nene-menu">Nene</a>
                    <div className="list-container-nene">
                        <ul className="categorias">
                            <li><a href="#">Zapatillas</a></li>
                            <li><a href="#">Zapatos</a></li>
                            <li><a href="#">Ojotas</a></li>
                            {/* <li><a href="#">Guillerminas</a></li> */}
                            <li><a href="#">Botas</a></li>
                        </ul>
                        <ul className="marcas">
                            <li><a href="#">Ferli</a></li>
                            <li><a href="#">Marcel</a></li>
                            <li><a href="#">Atomik</a></li>
                            <li><a href="#">Diez Indiecitos</a></li>
                            <li><a href="#">Crocs</a></li>
                        </ul>
                        <ul className="temporada">
                            <li><a href="#">Primavera/Verano</a></li>
                            <li><a href="#">Otoño/Invierno</a></li>
                            <li><a href="#">Escolar</a></li>
                        </ul>
                    </div>
                    <a href="#" id="baby-menu">Baby</a>
                    <div className="list-container-baby">
                        <ul className="categorias">
                            <li><a href="#">Zapatillas</a></li>
                            <li><a href="#">Zapatos</a></li>
                            <li><a href="#">Ojotas</a></li>
                            <li><a href="#">Guillerminas</a></li>
                            <li><a href="#">Botas</a></li>
                        </ul>
                        <ul className="marcas">
                            <li><a href="#">Ferli</a></li>
                            <li><a href="#">Marcel</a></li>
                            <li><a href="#">Atomik</a></li>
                            <li><a href="#">Diez Indiecitos</a></li>
                            <li><a href="#">Crocs</a></li>
                        </ul>
                        <ul className="temporada">
                            <li><a href="#">Primavera/Verano</a></li>
                            <li><a href="#">Otoño/Invierno</a></li>
                            <li><a href="#">Escolar</a></li>
                        </ul>
                    </div>
                    <a href="#" id="acce-menu">Accesorios</a>
                    <div className="list-container-acce">
                        <ul className="categorias">
                            <li><a href="#">Mochilas</a></li>
                            <li><a href="#">Otros</a></li>
                            <li><a href="#">Otros</a></li>
                            <li><a href="#">Otros</a></li>
                        </ul>
                    </div>
                    <a href="#" id="sale-menu">SALE!</a>
                </div>

                
            </div>

        </div>
    )
}
