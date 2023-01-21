import React from 'react';
import logo from '../assets/images/navlogo2.png';
import '../assets/css/nav-foot.css';

function NavBar(){
    return(
        <React.Fragment>
				{/*<!-- Topbar -->*/}
                <header>
        <nav className="principalNav">
          <div className="logo">
            <a href="/"><img className="logoVvape" src={logo} alt="logo" /></a>
          </div>
          <ul className="navtitles">
          </ul>
          <i id="burger" className="fa-solid fa-bars navicon" />
        </nav>
      </header>
				{/*<!-- End of Topbar -->*/}

        </React.Fragment>
    )
}
export default NavBar;