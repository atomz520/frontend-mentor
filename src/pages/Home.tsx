import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <main className="container mx-auto">
      <h1 className="text-3xl">Frontend Mentor Challenges</h1>
      <ul className="list-none my-5">
        <li><Link to='/interactive-rating-component'>Interactive Rating Component</Link></li>
        <li><Link to='/product-preview-card'>Product Preview Card</Link></li>
      </ul>
    </main>
  )
}

export default Home