import React from 'react'
import ProductPreviewCardCSS from "./ProductPreviewCard.module.css"
import cartIcon from "./icon-cart.svg"

export const ProductPreviewCard = () => {
  return (
    <div className={ProductPreviewCardCSS.body}>
      <div className={ProductPreviewCardCSS.container}>
        <div className={ProductPreviewCardCSS.cardLeft}>
        </div>
        <div className={ProductPreviewCardCSS.cardRight}>
          <p className={ProductPreviewCardCSS.productCategory}>PERFUME</p>
          <h1 className={ProductPreviewCardCSS.heading + ' ' + ProductPreviewCardCSS.h1}>Gabrielle Essence Eau De Parfum</h1>
          <p className={ProductPreviewCardCSS.paragraph}>
            A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className={ProductPreviewCardCSS.pricing}>
            <h1 className={ProductPreviewCardCSS.heading + ' ' + ProductPreviewCardCSS.h1 + ' ' + ProductPreviewCardCSS.price}>$149.99</h1>
            <p className={ProductPreviewCardCSS.originalPrice}>$169.99</p>
          </div>
          <button className={ProductPreviewCardCSS.addCartBtn}>
            <img src={cartIcon}/>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
