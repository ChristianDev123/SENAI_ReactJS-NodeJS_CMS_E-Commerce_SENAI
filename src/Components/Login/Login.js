import React from 'react'
import { Container, Row, Col, } from 'reactstrap';
import LeftMain from '../carrousel/Carrousel';
import MainForm from '../form/Content';
import { WrapperSection } from './StylesLogin';
export default function Login({changeTheme,currentTheme }) {
  return (
    <Container fluid>
      <WrapperSection>
        <Row xs="2">
          <Col>
              <LeftMain changeTheme={changeTheme} currentTheme={currentTheme}/>
          </Col>
          <Col>
              <MainForm />
          </Col>
        </Row>
      </WrapperSection>
    </Container>
  )
}