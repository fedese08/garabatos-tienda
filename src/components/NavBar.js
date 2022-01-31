import React from 'react'
import '../components/NavBar.css'
import CartWidget from './CartWidget'

export default function NavBar({cartCount}) {
    return (
        <div className="menu">
            <div className="menu_top">
                <div className="logo-garabatos">
                    <h1>Garabatos</h1>
                </div>
                <div className="logo-cart">
                    <CartWidget cartCount={cartCount}/>
                </div>
            </div>
            <div className="menu_bottom">
                <a href="#" id="nena-menu">Nena</a>
                <a href="#" id="nene-menu">Nene</a>
                <a href="#" id="baby-menu">Baby</a>
                <a href="#" id="acce-menu">Accesorios</a>
                <div className="list-container">
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
                
            </div>

        </div>
    )
}
