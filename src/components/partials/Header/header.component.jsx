import React from 'react'
import HeaderNavbar from './HeaderNavbar.component'
import HeaderTopBar from './HeaderTopbar.component';


const Header = () => {
     return (
          <header className="header container">
               <HeaderTopBar/>
               <HeaderNavbar/>
          </header>
     )
}

export default Header;