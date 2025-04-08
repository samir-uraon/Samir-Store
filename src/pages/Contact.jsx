import React from 'react'
import Header from '../navbar/header'
import "./Contact.css"
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaFacebook } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { RiWhatsappFill } from "react-icons/ri";

const Contact = () => {


const usstyle={
	color:"cyan"
}

function pressenterclose(evt){
    
	var bool=true
if(evt.keyCode==13){
bool=false
}
return bool
}


		return (
			<>
			<Header/>
<div className='main'>
	<div id='ContactHead'><h2>Contact <span style={usstyle}>Me!</span></h2></div>

	<div className="detailsdiv">

		<div className="info">
			<h1>Contact Information</h1>
			<p>Fill up form and our team will get back to you within 24 hours</p>
			<div className='icons'>
				<div className='firsti'><FaPhoneAlt style={{backgroundColor:"rgb(233, 63, 21)",padding:"0.3rem",borderRadius:"2rem" ,fontSize:"2rem"}}/><p>Phone : <a href="tel:+918016488419">+91 8016488419</a></p></div>
				<div className='secondi'><HiOutlineMail style={{backgroundColor:"rgb(233, 63, 21)",padding:"0.3rem",borderRadius:"2rem" ,fontSize:"2rem"}}/><p>Email : <a href="mailto:samiru.it.ug@jadavpuruniversity.in">samiru.it.ug@jadavpuruniversity.in</a></p></div>
			</div>
			<div className="icons2">
<FaFacebook id='f'  style={{padding:"0.35rem",borderRadius:"0.45rem" ,fontSize:"2.5rem"}}/>
<SiInstagram id='f'  style={{padding:"0.35rem",borderRadius:"0.45rem" ,fontSize:"2.5rem"}}/>
<RiWhatsappFill id='f'  style={{padding:"0.35rem",borderRadius:"0.45rem" ,fontSize:"2.5rem"}}/>
			</div>
		</div>

<div className="formdiv">
<h1>Send us a message</h1>
	<form
  action="https://formspree.io/f/xbljrpny"
  method="post"
  onKeyDown={()=>{pressenterclose}}
>
<div className="inputs">
 <input type="text" name="username" required spellCheck="false" autoComplete="false" placeholder='Your Name' />
		<input type="text" name="subject" required spellCheck="false" autoComplete="false" placeholder='Your Subject'/>
 <input type="email" name="Email" required spellCheck="false" autoComplete="false" placeholder='Your Email'/>
				<input type="tel" name="phone"  spellCheck="false" autoComplete="false" placeholder='Your Phone Number'/>
  </div> 
		 <textarea name="message" required spellCheck="false" autoComplete="false" placeholder='Write Your Message'></textarea>

  <button type="submit">Send Message</button>
</form>
	</div>


	</div>
	</div>				
				</>
		)
}

export default Contact