import React from 'react'
import animationsvg from './assets/icon-animation.svg'
import GridItem from './GridItem'

const SkilledElearningLandingPage = () => {
  return (
    <main className="container mx-auto max-w-[1110px]">
        <header className="grid grid-flow-col justify-between my-4">
          <h1 className="text-2xl">skilled</h1>
          <button>Get Started</button>
        </header>
        <div>
          <h1>Maximize skill, minimize budget</h1>
          <p>
            Our modern courses across a range of in-demand skills will give you the knowledge you need to live the life you want.
          </p>
          <button>Get Started</button>
        </div>
        <div>
          <GridItem 
            image="animationsvg" 
            title="Animation"
            paragraph="Our modern courses across a range of in-demand skills will give you the 
            knowledge you need to live the life you want."></GridItem>
        </div>
        
        <footer>
          <h1>skilled</h1>
          <button>Get Started</button>
        </footer>
      {/* Get Started

      Maximize skill, minimize budget

      Our modern courses across a range of in-demand skills will give you the 
      knowledge you need to live the life you want.

      Get Started

      Check out our most popular courses!

      Animation
      Learn the latest animation techniques to create stunning motion 
      design and captivate your audience.
      Get Started

      Design
      Create beautiful, usable interfaces to help shape the future of 
      how the web looks.
      Get Started

      Photography
      Explore critical fundamentals like lighting, composition, and focus 
      to capture exceptional photos.
      Get Started

      Crypto
      All you need to know to get started investing in crypto. Go from beginner 
      to advanced with this 54 hour course.
      Get Started

      Business
      A step-by-step playbook to help you start, scale, and sustain your business 
      without outside investment.
      Get Started

      Get Started */}
    </main>
  )
}

export default SkilledElearningLandingPage