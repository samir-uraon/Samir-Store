import { useParams } from "react-router-dom"
import Header from "../navbar/header"
import "./ProductPage.css"

const products = [
  { id: 1, name: "Gold Necklace", price: "₹45,000", image: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcR4JjGf6OELuGfXT2_Rlhp492_D7uba7tSDP6wGFg9x9VEplbC1WRK5xc8lZw4J8js84dtUkYcNxxGdAF60t0o7RNIA5xomU_Wb7y0id0KK7bFgAnY", category: "Women" },
  { id: 2, name: "Diamond Ring", price: "₹25,000", image: "https://www.arthursjewelers.com/content/images/thumbs/Original/31-V218ERR-E-19361275.jpg", category: "Women" },
  { id: 3, name: "Gold Bracelet", price: "₹15,000", image: "https://5.imimg.com/data5/OO/UM/FN/SELLER-45272018/68d2e2cdb4be8ee660cc53d4cae1ed39.jpg", category: "Men" },
  { id: 4, name: "Silver Earrings", price: "₹5,000", image: "https://tse3.mm.bing.net/th/id/OIP.yiKofBRUhmqggJpPaCTNMAHaJ4?rs=1&pid=ImgDetMain&o=7&rm=3", category: "Women" },
  { id: 5, name: "Men’s Chain", price: "₹18,000", image: "https://assets.talisa.com/media/catalog/product/cache/29d7d34990d2aec07d9b88f7ee7d79c4/c/u/curb_chain_men_name_necklace_-_stainless_steel-911.jpg", category: "Men" },
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
