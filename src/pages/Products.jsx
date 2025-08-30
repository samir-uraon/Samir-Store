import { useState } from "react"
import { Link } from "react-router-dom"
import Header from '../navbar/header'
import "./Products.css"

const products = [
  { id: 1, name: "Gold Necklace", price: "₹45,000", image: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcR4JjGf6OELuGfXT2_Rlhp492_D7uba7tSDP6wGFg9x9VEplbC1WRK5xc8lZw4J8js84dtUkYcNxxGdAF60t0o7RNIA5xomU_Wb7y0id0KK7bFgAnY", category: "Women" },
  { id: 2, name: "Diamond Ring", price: "₹25,000", image: "https://yourcdn.com/ring.jpg", category: "Women" },
  { id: 3, name: "Gold Bracelet", price: "₹15,000", image: "https://yourcdn.com/bracelet.jpg", category: "Men" },
  { id: 4, name: "Silver Earrings", price: "₹5,000", image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRc_Sehh0-KOpPTqG0Zq5Eyrr7oZWJ70XWlQhMxql9uClBVHSBUbuaevH5bQe4zJDDlYcA3tynsC8B_jJE4uxQlroqbDiL0TWjta1dudlpFP0eTSTU", category: "Women" },
  { id: 5, name: "Men’s Chain", price: "₹18,000", image: "https://yourcdn.com/mens-chain.jpg", category: "Men" },
]

export default function ProductSection() {
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState("All")

  const filteredProducts = products.filter((product) => {
    const matchesCategory = filter === "All" || product.category === filter
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <>
      <Header/>
      <section className="product-section">
        <h2 className="section-title">Our Products</h2>

        <div className="controls">
          <input
            type="text"
            placeholder="Search for a product..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="All">All</option>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
          </select>
        </div>

        <div className="product-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={product.image} alt={product.name} />
                  <h3>{product.name}</h3>
                </div>
                <div className="flip-card-back">
                  <h3>{product.name}</h3>
                  <p>{product.price}</p>
                  <p className="category">{product.category}</p>
                 <Link to={`/product/${product.id}`}> <button className="buy-btn">View Details</button>
               </Link> </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && <p className="no-products">No products found.</p>}
      </section>
    </>
  )
}
