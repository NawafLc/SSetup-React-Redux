import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import Welcome from '../components/WelcomeTest';
import HomeContainer from '../containers/HomeContainer';

const Styled = styled.div`

`;

const Home = () => {
  return (
      <Styled>
          <Container>
            <HomeContainer />
          </Container>
      </Styled>
  );
};

export default Home;
