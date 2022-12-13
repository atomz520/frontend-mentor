import React from 'react'
import { Container, Heading } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <Container maxW='container.lg'>
      <Heading>Frontend Mentor Challenges</Heading>
      <Link to='/interactive-rating-component'>Interactive Rating Component</Link>
    </Container>
    
  )
}

export default Home