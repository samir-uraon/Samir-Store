import React from 'react'
import { NavLink } from 'react-router-dom'
import "./FirstBanner.css"



const FirstBanner = (props) => {

	//props a object
	
	const {name}=props
		return (
			<>
<div className="main-hero">
	<div className="grid grid-two">
		
<div className="hero-data">
	<p className="head-data">Welcome to</p>
	<h1>{name}</h1>
	<p>
	We're so glad you're here. Explore our wide range of products, enjoy seamless shopping, 
	and discover amazing deals just for you. Happy shopping!
	</p>
	<NavLink to={"/Products"}><button>Shop Now</button></NavLink>
</div>

<div className="hero-image">
	<figure>
		<img src="https://as2.ftcdn.net/v2/jpg/01/34/60/95/1000_F_134609536_4DI2GVMjIJT0877eFSYsbW6UhxMcBcu5.jpg" alt="" 
		className='img-style'/>
	</figure>
	<div className="imgback"></div>
</div>
	</div>
</div>
			</>
		)
}

export default FirstBanner