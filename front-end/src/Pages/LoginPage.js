import { Row, Col, } from 'reactstrap';
import LeftMain from '../Components/carrousel/Carrousel';
import MainForm from '../Components/form/Content';
import styled from 'styled-components';

export default function Login() {
  return (
      <WrapperSection>
        <Row xs={1} lg={2} className='h-100'>
          <Col className="d-none d-md-inline h-100">
              <LeftMain/>
          </Col>
          <Col className='h-100'>
              <MainForm />
          </Col>
        </Row>
      </WrapperSection>
  )
}

const WrapperSection = styled.section`
    background-color:var(--default-color-form);
    height:100vh;
    margin:auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding:10px;
`