import React from 'react';
import css from './Header.module.css';  
import logo from '../../assets/logo.png';
import {CgShoppingBag} from 'react-icons/cg';
import {GoThreeBars} from 'react-icons/go';
import { useState } from 'react';

const Header = () => {

      const [ShowMenu,setShowMenu]=useState(true)

      const toggleMenu = () =>{
        setShowMenu((ShowMenu)=>!ShowMenu) 
      }


  return (
      <div className={css.container}>
        <div className={css.logo}>
            <img src={logo} alt="" />
            <span>amazon</span>
        </div>

        <div className={css.right}>

            <div className={css.bars} onClick={toggleMenu}>
              <GoThreeBars/>
            </div>



            <ul className={css.menu} style={{display: ShowMenu? 'inherit':'none'}}>
                <li><a href='#hero'>Collections</a></li>
                <li>Brands</li>
                <li>New</li>
                <li><a href='#sales'>Sales</a></li>
                <li>ENG</li>
            </ul>

            <input type="text" className={css.search} placeholder="Search" />

            <CgShoppingBag className={css.cart}/>
        </div>

      </div>

  )
}

export default Header
