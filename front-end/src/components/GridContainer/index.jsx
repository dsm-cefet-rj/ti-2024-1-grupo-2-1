import React, {useState,useEffect} from 'react';
//import "./style.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Grade = (props) => {
  
  //   <div className='card-container'>
  //   {props.children}
  // </div>
  return (
    <Container fluid>
      <Row  className="justify-content-center">
        {props.children.map((child, index) => (
          <Col key={index} xs={'auto'} sm={'auto'} md={'auto'} lg={'auto'} xl={'auto'} xll={'auto'} className="mb-4">
            {child}
          </Col>
           ))}
      </Row>
    </Container>
  )
}