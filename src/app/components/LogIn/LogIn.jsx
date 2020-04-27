import React from 'react';
import logo from '../../assets/img/logo.svg';
import './LogIn.css'
import { NavLink } from 'react-router-dom'

function LogIn() {
  return (
    <div className='LogIn'>

      <div className='Logo'>
        <img src={logo} alt='Mount' className='startLogo' />
        <h1 className='presentText'>Mount</h1>
      </div>
      <div className='LoginData'>
          <label><h2>Логин</h2><input type="text" placeholder="Введите логин"></input></label> 
          <label><h2>Пароль</h2><input type="password" placeholder="Введите пароль"></input></label>  
      </div>

      <div className='Actions'>
       <NavLink to='/messages'> <button>Вход</button> </NavLink>
        <NavLink to="/registration"><p className='linkBtn'>Регистрация</p></NavLink>
      </div>

    </div>
  );
}

export default LogIn;
