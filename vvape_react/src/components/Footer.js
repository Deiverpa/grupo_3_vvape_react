import React from 'react';
import { Route } from 'react-router-dom';
import '../assets/css/nav-foot.css';

function Footer(){
    return (
        <React.Fragment>
      <footer>
        <ul className="footTitles">
		<Route path='/github' component={() => {
     		window.location.href = 'https://example.com/1234';
    	    return null;
			}}/>
          <li class="footer">VVAPE - DH</li>
		  <li></li>
		  <a target="_blank" href="https://github.com/ebautista07" rel="noopener noreferrer" class="footer">Estefanía GITHUB</a>
		  <li></li>
		  <a target="_blank" href="https://github.com/Deiverpa" rel="noopener noreferrer" class="footer">Deiver GITHUB</a>
        </ul>
      </footer>

        </React.Fragment>
    )
}
export default Footer;