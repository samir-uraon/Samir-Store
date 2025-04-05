import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Error.css"
const Error = () => {
		return (
				<>
				<div className="cont">
					<div className="d">
					<h1>404 Error Page</h1>
					<p>Sorry, This page doesn't exist</p>
					<NavLink to="/" className="g">Go Back</NavLink>
				</div></div>
				</>
		)
}

export default Error