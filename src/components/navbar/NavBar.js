import React from 'react'
import './NavBar.css'
import CartWidget from '../cartWidget/CartWidget'
import logoImg from '../../assets/images/Logo.png'
import { Link } from 'react-router-dom'
    

export default function NavBar({cartCount}) {
    return (
        <div className="menu">
            <div className="menu_top">
                <div className="logo-garabatos">
                    <Link to="/" >
                        <img src={logoImg}/>
                    </Link>
                </div>
                <div className="logo-cart">
                    <Link to="/cart" className="linkCart">
                        <CartWidget cartCount={cartCount}/>
                    </Link>
                </div>
            </div>
            <div className="menu_bottom">
                <div className="menus-container">
                    <Link to="/gender/nena" id="nena-menu">Nena</Link>
                    <div className="list-container-nena">
                        <ul className="categorias">
                            <li><Link to="/category/zapatilla">Zapatillas</Link></li>
                            <li><Link to="/category/zapato">Zapatos</Link></li>
                            <li><Link to="/category/ojota">Ojotas</Link></li>
                            <li><Link to="/category/guillermina">Guillerminas</Link></li>
                            <li><Link to="/category/bota">Botas</Link></li>
                        </ul>
                        <ul className="marcas">
                            <li><Link to="/brand/Ferli">Ferli</Link></li>
                            <li><Link to="/brand/Marcel">Marcel</Link></li>
                            <li><Link to="/brand/Atomik">Atomik</Link></li>
                            <li><Link to="/brand/Diez indiecitos">Diez Indiecitos</Link></li>
                            <li><Link to="/brand/Croc">Crocs</Link></li>
                            <li><Link to="/brand/Addnice">Addnice</Link></li>
                        </ul>
                        <ul className="temporada">
                            <li><a href="#">Primavera/Verano</a></li>
                            <li><a href="#">Oto??o/Invierno</a></li>
                            <li><a href="#">Escolar</a></li>
                        </ul>
                    </div>
                    <Link to="/gender/nene" id="nene-menu">Nene</Link>
                    <div className="list-container-nene">
                        <ul className="categorias">
                            <li><Link to="/category/zapatilla">Zapatillas</Link></li>
                            <li><Link to="/category/zapato">Zapatos</Link></li>
                            <li><Link to="/category/ojota">Ojotas</Link></li>
                            <li><Link to="/category/bota">Botas</Link></li>
                        </ul>
                        <ul className="marcas">
                            <li><Link to="/brand/Ferli">Ferli</Link></li>
                            <li><Link to="/brand/Marcel">Marcel</Link></li>
                            <li><Link to="/brand/Atomik">Atomik</Link></li>
                            <li><Link to="/brand/Diez indiecitos">Diez Indiecitos</Link></li>
                            <li><Link to="/brand/Croc">Crocs</Link></li>
                            <li><Link to="/brand/Addnice">Addnice</Link></li>
                        </ul>
                        <ul className="temporada">
                            <li><a href="#">Primavera/Verano</a></li>
                            <li><a href="#">Oto??o/Invierno</a></li>
                            <li><a href="#">Escolar</a></li>
                        </ul>
                    </div>
                    <Link to="/gender/baby" id="baby-menu">Baby</Link>
                    <div className="list-container-baby">
                        <ul className="categorias">
                            <li><Link to="/category/zapatilla">Zapatillas</Link></li>
                            <li><Link to="/category/zapato">Zapatos</Link></li>
                            <li><Link to="/category/ojota">Ojotas</Link></li>
                            <li><Link to="/category/guillermina">Guillerminas</Link></li>
                            <li><Link to="/category/bota">Botas</Link></li>
                        </ul>
                        <ul className="marcas">
                            <li><Link to="/brand/Ferli">Ferli</Link></li>
                            <li><Link to="/brand/Marcel">Marcel</Link></li>
                            <li><Link to="/brand/Atomik">Atomik</Link></li>
                            <li><Link to="/brand/Diez indiecitos">Diez Indiecitos</Link></li>
                            <li><Link to="/brand/Croc">Crocs</Link></li>
                            <li><Link to="/brand/Addnice">Addnice</Link></li>
                        </ul>
                        <ul className="temporada">
                            <li><a href="#">Primavera/Verano</a></li>
                            <li><a href="#">Oto??o/Invierno</a></li>
                            <li><a href="#">Escolar</a></li>
                        </ul>
                    </div>
                    <a href="#" id="acce-menu">Accesorios</a>
                    <div className="list-container-acce">
                        <ul className="categorias">
                            <li><a href="#">Mochilas</a></li>
                            <li><a href="#">Cartucheras</a></li>
                            <li><a href="#">Medias</a></li>
                            <li><a href="#">Otros</a></li>
                        </ul>
                    </div>
                    <a href="#" id="sale-menu">SALE!</a>
                </div>

                
            </div>

        </div>
    )
}
