import React from 'react'
import "./AboutMain.css"
import { TbTruckDelivery } from "react-icons/tb";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
import { MdSecurity } from "react-icons/md";






const AboutMain = () => {
		return (
<>
<div className="main-a">
	<div className="section-a1">
		<div className="head-a1">
			<p>Check Now</p>
			<h2>Our Feature Services</h2>
		</div>
		<div className="img-a1">
<div className="imgs"><img src="https://images.unsplash.com/photo-1491472253230-a044054ca35f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFwdG9wJTIwY29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D" alt="" /><div className="text-img"><h2>Apple Macbook Pro</h2><p>
10-core CPU and 10-core GPU, (14.2″) Liquid Retina XDR Display, 16GB Memory, 512GB SSD</p>
<p>Just In 1.6Lakhs</p>
</div></div>
<div className="imgs"><img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRLixhHCh-ArymRGbKLo7Mz03uWosA4tFJRcuhhgMk1JrOrT3rXU5s4YaQCwGp4LVGjPs4MYCHc8CVEoAVcKFpo86b5LacUCNmXcTL5mQ" alt="" /><div className="text-img"><h2>Combo Bottel</h2><p>
Inditradition 3 Pieces Combo Water Bottle Set | With Glass Cup  (300+300ml+300ml+50ml)  	</p>
<p>Just In 350.00Rs</p></div></div>
<div className="imgs"><img src="https://www.thestiffcollar.com/cdn/shop/files/02.jpg?v=1683199858&width=5000" alt="" /><div className="text-img"><h2>Combo T-Shirt</h2><p>
BULLMER Trendy Printed Cotton Blend Round Neck Half Sleeve Tshirt for Men - Pack of 3</p>
<p>Just In 500.00Rs</p></div></div>
		</div>
	</div>


	<div className="section-a2">
<div className="a2-block1">
<TbTruckDelivery style={{color:"#7F00FF"}}/>
<p>
Super Fast and Free Delivery</p>
</div>
<div className="a2-block2">
<div className="a2-block21">
<MdSecurity style={{color:"#7F00FF"}}/>
<p>Non-Contact Shipping</p>
</div>
<div className="a2-block22">

<GiReceiveMoney style={{color:"#7F00FF"}}/>
<p>Money-back Guaranteed</p>
</div>
</div>
<div className="a2-block1">
<RiSecurePaymentLine style={{color:"#7F00FF"}}/>
<p>Secure Payment System</p>
</div>
	</div>


	<div className="section-a3">

<h3>Trusted By 1000+ Companies</h3>
<div className="compaine-icon">

	<img src="https://github.com/solodev/infinite-logo-carousel/blob/master/images/image1.png?raw=true" alt="" />
	
	<img src="https://github.com/solodev/infinite-logo-carousel/blob/master/images/image2.png?raw=true" alt="" />
	
	<img src="https://github.com/solodev/infinite-logo-carousel/blob/master/images/image3.png?raw=true" alt="" />
	
	<img src="https://github.com/solodev/infinite-logo-carousel/blob/master/images/image5.png?raw=true" alt="" />
	
	<img src="https://github.com/solodev/infinite-logo-carousel/blob/master/images/image6.png?raw=true" alt="" />
		
	<img src="https://github.com/solodev/infinite-logo-carousel/blob/master/images/image4.png?raw=true" alt="" />

</div>
</div>

</div>

</>
		)
}

export default AboutMain