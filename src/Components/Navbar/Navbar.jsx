import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [menu, setMenu] = useState('shop')

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={require('../Assets/logo.png')} alt='' />
        <p>SHOPPER</p>
      </div>

      <ul className='nav-menu'>

        <li onClick={() => setMenu('shop')}><Link className='link' to='/'>Shop{menu === 'shop' ? <hr /> : <></>}</Link></li>
        <li onClick={() => setMenu('men')}><Link className='link' to='/Men'>Men{menu === 'men' ? <hr /> : <></>}</Link></li>
        <li onClick={() => setMenu('women')}><Link className='link' to='/Women'>Women{menu === 'women' ? <hr /> : <></>}</Link></li>
        <li onClick={() => setMenu('kids')}><Link className='link' to='/Kids'>Kids{menu === 'kids' ? <hr /> : <></>}</Link></li>
      </ul>

      <div className='nav-login'>
        <button>Login</button>
        <img src={require('../Assets/cart_icon.png')} alt='' />
      </div>
    </div>
  )
}
