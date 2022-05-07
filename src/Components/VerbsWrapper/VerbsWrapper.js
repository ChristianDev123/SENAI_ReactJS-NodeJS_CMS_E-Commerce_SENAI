import { Col, Container, Row } from "reactstrap";
import { SpanVerb, TextVerb } from "./StyleVerbWrapper";

export default function VerbsWrapper({id,Text,children}){
    let text = String(Text).trim();
    const firstSpace = text.indexOf(' ');
    const verb = text.substring(0,firstSpace);
    text = text.substring(firstSpace); 
    return(
        <Container fluid>
            <Row xs={1} md={2} className="py-1">
                {id%2 === 0?
                <>
                    <Col>
                        {children}
                    </Col>
                    <Col className={"d-none d-md-inline left"}>
                        <TextVerb>
                            <SpanVerb>
                                {verb}
                            </SpanVerb>
                            {text}
                        </TextVerb>  
                    </Col>
                </>
                :
                <>
                    <Col className={"d-none d-md-inline right"}>
                        <TextVerb>
                            <SpanVerb>
                                {verb}
                            </SpanVerb>
                            {text}
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