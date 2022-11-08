import React from 'react';
import menu from '../assets/icons/icon_menu.svg';
import shopping_cart from '../assets/icons/icon_shopping_cart.svg';
import logo from '../assets/logos/Logo-aranda.svg';
import '../components/ProductsCard';

import '../styles/app.css';
const Nav = () => {
  return (
    <>
    <nav>
        <img src={menu} alt="menu" class="menu"/>
        <div class="navbar-left">
            <img src={logo} alt="logo" class="logo"/>
            <ul>
                <li>
                    <a href="/">Agregar Producto</a>
                </li>
                <li>
                    <a href="/">Categoria</a>
                </li>
                <br />
                <li>
                    <input type="email" class="form-control" 
                           id="exampleInputEmail1" aria-describedby="emailHelp" 
                           placeholder="Buscar Producto.."/>
                </li>
            </ul>
        </div>

        <div class="navbar-right">  
            <ul>
                <li class="navbar-email">Aranda@example.com</li>
                <li class="navbar-shopping-cart">
                    <img src={shopping_cart} alt="shopping-cart"/>
                    <div>0</div>
                </li>
            </ul>          
        </div>    
    </nav>
    <br/>
    </>
  )
}

export default Nav
