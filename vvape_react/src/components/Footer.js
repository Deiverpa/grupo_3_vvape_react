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
		  <a target="_blank" href="http://localhost:3001/users/api/users" rel="noopener noreferrer" class="footer">USERS API</a>
		  <li></li>
		  <a target="_blank" href="http://localhost:3001/api/products" rel="noopener noreferrer" class="footer">PRODUCTS API</a>
        </ul>
      </footer>

        </React.Fragment>
    )
}
export default Footer;