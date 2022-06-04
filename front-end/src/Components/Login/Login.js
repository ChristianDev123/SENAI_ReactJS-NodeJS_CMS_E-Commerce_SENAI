import { Row, Col, } from 'reactstrap';
import LeftMain from '../carrousel/Carrousel';
import MainForm from '../form/Content';
import { WrapperSection } from './StylesLogin';

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