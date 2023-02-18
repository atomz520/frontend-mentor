import React from 'react'
import "./style.css"
import cartIcon from "./icon-cart.svg"

export const ProductPreviewCard = () => {
  return (
    <div className="container">
      <div className="card-left">
      </div>
      <div className="card-right">
        <p className="product-category">PERFUME</p>
        <h1>Gabrielle Essence Eau De Parfum</h1>
        <p>
          A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div className="pricing">
          <h1 className="price">$149.99</h1>
          <p className="original-price">$169.99</p>
        </div>
        <button className="add-cart-btn">
          <img src={cartIcon}/>
          Add to Cart
        </button>
      </div>
    </div>
  )
}
