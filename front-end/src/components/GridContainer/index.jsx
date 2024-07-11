import React from "react";
//import "./style.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
/** 
 * @module Componente/Grade
 *  */

/** 
 * @typedef Grade
 * @type {React.FC}
*/

/** 
 * Renderiza uma grid que se adequa ao tamanho da página
 * @param {React.ReactNode} props.children - Lista de cards a serem exibidos na grade.
 * @returns {React.FC} O componente renderizado.
*/
const Grade = (props) => {
  return (
    <Container fluid>
      <Row className="justify-content-center">
        {props.children.map((child, index) => (
          <Col
            key={index}
            xs={"auto"}
            sm={"auto"}
            md={"auto"}
            lg={"auto"}
            xl={"auto"}
            xll={"auto"}
            className="mb-4"
          >
            {child}
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Grade
