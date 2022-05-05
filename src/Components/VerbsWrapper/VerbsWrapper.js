import { Col, Container, Row } from "reactstrap";
import { TextVerb } from "./StyleVerbWrapper";

export default function VerbsWrapper({id,Text,children}){
    return(
        <Container fluid>
            <Row xs={1} md={2}>
                {id%2 === 0?
                <>
                    <Col>
                        {children}
                    </Col>
                    <Col className={"d-none d-md-inline left"}>
                        <TextVerb>
                            {Text}
                        </TextVerb>  
                    </Col>
                </>
                :
                <>
                    <Col className={"d-none d-md-inline right"}>
                        <TextVerb>
                            {Text}
                        </TextVerb>
                    </Col>
                    <Col>
                        {children}
                    </Col>
                </>
                }
            </Row>
        </Container>
    );
}