import React from 'react';
import { Button, Card, CardBody, Container, Heading } from '@chakra-ui/react';

const InteractiveRatingComponent = () => {
  return (
    <Container>
      <Card maxW="lg">
        <CardBody>
          <Heading>How did we do?</Heading>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
          <Button>Submit</Button>
        </CardBody>
      </Card>
    </Container>
  );
};

export default InteractiveRatingComponent;
