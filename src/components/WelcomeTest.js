import React from 'react';
import { CardColumns, Card, /* Button, Row, */ Col } from 'react-bootstrap';
import styled from 'styled-components';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';

const Styled = styled.div``;

const Welcome = props => {
  return (
    <Styled>
      <h1>Hello World</h1>
    </Styled>
  );
};

export default Welcome;
