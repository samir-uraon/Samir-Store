import React from 'react'
import "./Footer.css"
import { FaGithubSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';





const Footer = () => {
	return (
		<>
			<div className='main-footer'>
				<div className="headpart">
					<div className="textpart">
						<div className='textp'>
							<p>Ready to get started?</p>
							<p>Talk to us today</p></div>
						<NavLink to={"/Contact"}><button className='justbutton'>GET STARTED</button></NavLink>
					</div></div>

				<div className="downpart">
					<div className="down firstd">
						<div className="down1">
							<h2>Uraon Technical</h2>
							<p id='fp'>Ready to build your own websites and apps?
								Dive into the world of web development with our easy-to-follow tutorials!</p></div>
						<div className="down1 e">
							<p style={{ fontSize: "1.25rem" }}>Subscribe to get importent update</p>
							<form action="/" method="post">
								<input type="email" required autoComplete='false' placeholder='E-Mail' />
								<button className='justbutton'>Subscribe</button>
							</form>
						</div>
						<div className="down1 i">
							<h2>Follow Me</h2>
							<div className="dicons">
								<FaInstagram style={{ padding: "0.3rem", borderRadius: "50%", border: "0.1rem solid white", cursor: "pointer" }} onClick={() => {
									window.location.href = "https://www.youtube.com/@UraonTechnical"
								}} />
								<IoLogoYoutube style={{ padding: "0.3rem", borderRadius: "50%", border: "0.1rem solid white", cursor: "pointer" }} onClick={() => {
									window.location.href = "https://www.youtube.com/@UraonTechnical"
								}} />
								<FaGithubSquare style={{ padding: "0.3rem", borderRadius: "50%", border: "0.1rem solid white", cursor: "pointer" }} onClick={() => {
									window.location.href = "https://github.com/samir-uraon"
								}} />
							</div>
						</div>
						<div className="down1 L1">
							<h2>Location</h2>
							<NavLink to={"https://maps.app.goo.gl/rTCqacnDEspYq7M36"}><p>Kolkata,SaltLake Sector-3 ,Bidhannagar West Bengle</p></NavLink>
						</div>

					</div>
					<div className="down finish">
						<div className="down2"><p>@2025 Uraon Technical | All Rights Reserved</p></div>
						<div className="down2">
							<p>PRIVACY POLICY</p>
							<p>TERMS & CONDITION</p></div>
					</div>
				</div>

			</div>
		</>
	)
}

export default Footer