import React, { Component, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Card, Container } from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Styled = styled.div`

`;

class TestPage extends Component {

  render() {
    return (
      <div>
       Route Page Test
      </div>
    );
  }
}
const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, actions)(TestPage);
