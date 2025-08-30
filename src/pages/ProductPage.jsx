import { useParams } from "react-router-dom"
import Header from "../navbar/header"
import "./ProductPage.css"

const products = [
  { id: 1, name: "Gold Necklace", price: "₹45,000", image: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcR4JjGf6OELuGfXT2_Rlhp492_D7uba7tSDP6wGFg9x9VEplbC1WRK5xc8lZw4J8js84dtUkYcNxxGdAF60t0o7RNIA5xomU_Wb7y0id0KK7bFgAnY", category: "Women", description: "Beautiful handcrafted gold necklace." },
  { id: 2, name: "Diamond Ring", price: "₹25,000", image: "https://yourcdn.com/ring.jpg", category: "Women", description: "Elegant diamond ring with timeless design." },
  { id: 3, name: "Gold Bracelet", price: "₹15,000", image: "https://yourcdn.com/bracelet.jpg", category: "Men", description: "Classic gold bracelet for men." },
  { id: 4, name: "Silver Earrings", price: "₹5,000", image: "https://yourcdn.com/earrings.jpg", category: "Women", description: "Stylish silver earrings." },
  { id: 5, name: "Men’s Chain", price: "₹18,000", image: "https://yourcdn.com/mens-chain.jpg", category: "Men", description: "Men's gold chain." },
]

export default function ProductPage() {
  const { id } = useParams()
  const product = products.find(p => p.id === parseInt(id))

  if (!product) return <h2 style={{ padding: "40px" }}>Product not found.</h2>

  return (
			<>
			<Header/>
    <div className="product-page">
      <img src={product.image} alt={product.name} />
      <div className="product-info">
        <h1>{product.name}</h1>
        <p className="product-price">{product.price}</p>
        <p className="product-description">{product.description}</p>
        <button className="buy-btn">Buy</button>
      </div>
    </div></>
  )
}
