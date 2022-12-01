import {Link, NavLink} from 'react-router-dom'

function Header(props) {
	return(
		<header>
		
		<Link to={'/'}>
		<div className="headerLeft">
		  <img width={40} height={40} src="/img/logo.png" alt="logo"></img>
		 <div className="headerInfo">
		   <h3>React Sneakers</h3>
		   <p >Магазин лучших кроссовок</p>
		 </div>
		</div>
		</Link>
		<ul className="headerRight">
		 <li onClick = {props.onClickCart}>
		  <img src="/img/Cart.svg" alt="Cart"></img>
			<span> 1205 руб.</span>
		  </li>
		  <li>
		<Link to={'favorites'}>
		<img src="/img/heard.svg" alt="Favorite"></img>
		</Link>
		  </li>
		  <li>
		  <img src="/img/User.svg" alt="User"></img>
		  </li>
		</ul>
	  </header>
	);
}
export default Header;