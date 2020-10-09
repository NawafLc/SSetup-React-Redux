import React, { Component } from 'react';
import Welcome from '../components/WelcomeTest';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Card, Button, Row, Col, CardDeck } from 'react-bootstrap';
import styled from 'styled-components';
const Styled = styled.div`
  
`;

class HomeContainer extends Component {
  render() {
    return(
      <Styled>
          <Welcome/>
      </Styled>
      );
    }
}

const mapStateToProps = state => ({
 /* Movies: state.Movies,
  is_Deli: state.is_deli,
  is_home: state.is_home,*/
});

export default connect(mapStateToProps, actions)(HomeContainer);
