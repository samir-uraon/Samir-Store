import { useParams } from "react-router-dom"
import Header from "../navbar/header"
import "./ProductPage.css"

const products = [
  { id: 1, name: "Gold Necklace", price: "₹45,000", image: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcR4JjGf6OELuGfXT2_Rlhp492_D7uba7tSDP6wGFg9x9VEplbC1WRK5xc8lZw4J8js84dtUkYcNxxGdAF60t0o7RNIA5xomU_Wb7y0id0KK7bFgAnY", category: "Women" },
  { id: 2, name: "Diamond Ring", price: "₹25,000", image: "https://lh3.googleusercontent.com/gg-dl/AJfQ9KSy9xtCSQldaBASifQ8hoEG3KQOvq6mK4lRNmz5m9qsMbcfvGbGEIEPZT7nI-aI8VJCCTH9lmXbs0aNJbo9JCmP2euFKoJMACutfrdqX2RaYLKv3o4UfvbH9GVQcRbKZf6v072gaCW2Zqy43rmWyoacI7t2Ce_6dT3EtF5db8vMNz3I7g", category: "Women" },
  { id: 3, name: "Gold Bracelet", price: "₹15,000", image: "https://lh3.googleusercontent.com/gg-dl/AJfQ9KRR1EfqFY-QW_MO00_Uqak2Y0L4krTC2N-OVUlVi2FS9PWy90zI5YDUEiS40ClMVYe2-OI1ZljwFqgnyTfCyNfcg36Q2Y7s3rr_dn0Z93GqQX5EjRHm9TO7d7J1JGVx962xm6xEP4zLDuqfxaK3_i8Y7bfltmEgUKKnaBlvXt7HGKPOHw", category: "Men" },
  { id: 4, name: "Silver Earrings", price: "₹5,000", image: "https://lh3.googleusercontent.com/gg-dl/AJfQ9KRce2dVgIRVySE06EKp-00Oh7IPkMd-hBpyux4YyPKT3jCTEBV6qhDUkyQ8NlW5g-LPs0MJTwVx8ponAn_NY6dmHiCQsACG_AaYfyj15GbtCgYyBAun_5j8nylcJKGCwusnnsM0gKo20PEIqq-k_NReWx2CGSQNCrGPbxBnoXOpau4E-w", category: "Women" },
  { id: 5, name: "Men’s Chain", price: "₹18,000", image: "https://lh3.googleusercontent.com/gg-dl/AJfQ9KTY3drzfKUQq-w6cMvxzGbJO9qRvcZTs5tfJZKsA5_h3SIqPVrO_RZIUN_XX178U1kkUH_z1kpsENkwRJtdOL7WdI1ANz2exvB6G0s6kgo5QhUl9J7g-XMiXt6RX3DQDqA7IyLHnaHcXi_xCqtcJOcyxQGjBbvDh6bkMQtN3a3-K6p3Jg", category: "Men" },
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
