import React from 'react'
import {useTypewriter,Cursor} from "react-simple-typewriter"
import Header from '../navbar/header'
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import "./Home.css"
const Home = () => {

	const [writerpen]=useTypewriter({
		words:["Frontend Developer","Backend Developer","Python Programmer"],
		typeSpeed:150,
		backSpeed:80,
		loop:{}
	})


		return (
			<>
			<Header/>

				<div className="containers">

				
					
					<div id='textdiv'>
					<div className="somehometext">
						<p>Hello, It's Me</p>
						<p>Samir Uraon</p>
						<p>And I'm a <span id="typingtext">{writerpen}</span><span id='typingcursor'><Cursor/></span></p>
					</div>
					<div id='welcometext'>
<p>Welcome to Samir-Store! Explore our wide selection of products, from the latest trends to timeless classics. </p>
<p>Enjoy a smooth, secure shopping experience with fast shipping and excellent customer service!</p>
					</div>

					<div className='socialicon'>
<a href="http://" target="_blank" > <TiSocialFacebook className='f' onClick={()=>{
	window.location.href="http://github.com"
}}/></a>
<TiSocialYoutube className='y' onClick={()=>{
	window.location.href="http://github.com"
}}/>
<TiSocialLinkedin className='l' onClick={()=>{
	window.location.href="http://github.com"
}}/>
<TiSocialTwitter className='t' onClick={()=>{
	window.location.href="http://github.com"
}}/>
					</div>
					<div id='readmore'>
						<button><a href="#">Read More</a></button>
					</div>
					</div>

					<div className="portfoliophoto">
						<img src="../public/Mask group.png" alt="" />
					</div>

				</div>
				
				</>
		)
}

export default Home