import React from 'react'
import { useRef ,useState} from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import {NavLink} from "react-router-dom"
import './header.css'
const Header = () => {

	const [Initial,Updated]=useState(true)

const Icon=useRef(true)

//const handalIcon=()=>{
// Icon.current=false
//}

const handalIcon=()=>{
	
Initial? Updated(false):Updated(true)
}

const check=()=>{
	if(window.innerWidth>480){
			return "horizontal"
		}
	else if(Initial){
		return "horizontal"
	}
	
	else{
		return "vertical"
	}

}

		return (

				<div className='header'>
					<h3>Samir-Store</h3>

					<ul className={check()}>
				<li><NavLink to={"/"}>Home</NavLink></li>
				<li><NavLink to={"/About"}>About</NavLink></li>
				<li><NavLink to={"/Products"}>Products</NavLink></li>
				<li><NavLink to={"/Contact"}>Contact</NavLink></li>
					</ul>

					<div className='menu-button'>
<button ref={Icon} onClick={handalIcon}>
{Initial?<RxHamburgerMenu/>:<RxCross2/>}
</button>
					</div>
				</div>
		
		)
}

export default Header