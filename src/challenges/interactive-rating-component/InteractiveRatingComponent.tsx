import React, { useEffect } from 'react';
import { ChakraProvider, Button, Card, CardBody, Container, Grid, Heading, Text } from '@chakra-ui/react';

import { defineStyle, defineStyleConfig } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'

import WebFont from 'webfontloader'

import star from './icon-star.svg'

const rating = defineStyle({
  width: '51px',
  height: '51px',
  bg: 'darkBlue',
  color: 'mediumGrey',
  borderRadius: '25px'
})

const submit = defineStyle({
  height: '51px',
  bg: 'orange',
  color: 'white',
  borderRadius: '25px'
})

export const buttonTheme = defineStyleConfig({
  variants: { rating, submit },
})

export const theme = extendTheme({
  colors: {
    orange: 'hsl(25, 97%, 53%)',
    white: 'hsl(0, 0%, 100%)',
    lightGrey: 'hsl(217, 12%, 63%)',
    mediumGrey: 'hsl(216, 12%, 54%)',
    darkBlue: 'hsl(213, 19%, 18%)',
    veryDarkBlue: 'hsl(216, 12%, 8%)',
  },
  components: { Button: buttonTheme },
  fonts: {
    heading: `'Overpass', sans-serif`,
    body: `'Overpass', sans-serif`
  }
})

const InteractiveRatingComponent = () => {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Overpass', 'Chilanka']
      }
    });
  }, []);
   
  return (
    <ChakraProvider theme={theme}>
      <Grid height={'100vh'} justifyContent='center' alignItems={'center'}>
        <Card p='3' width={412} height={416} borderRadius={'15px'} bg={'radial-gradient(circle, rgba(35,42,52,1) 0%, rgba(24,30,39,1) 100%)'}>
          <CardBody>
            <Grid color={'white'} height={'100%'} alignItems="center" gap={2}>
              <Button variant="rating"><img src={star}/></Button>
              <Heading as="h1" size="lg">How did we do?</Heading>
              <Text color='lightGrey'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</Text>
              <Grid autoFlow={'column'}>
                <Button variant="rating">1</Button>
                <Button variant="rating">2</Button>
                <Button variant="rating">3</Button>
                <Button variant="rating">4</Button>
                <Button variant="rating">5</Button>
              </Grid>
              <Button variant="submit">SUBMIT</Button>
            </Grid>
            
          </CardBody>
        </Card>
      </Grid>
    </ChakraProvider>
    
  );
};

export default InteractiveRatingComponent;
