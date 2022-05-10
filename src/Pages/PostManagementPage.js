import { useEffect, useState } from "react";
import Header from "../Components/Header/Header";
import InputTextBox from "../Components/InputTextBox/InputTextBox";
import TitleVerb from "../Components/TitleVerbs/TitleVerbs";
import styled from 'styled-components';
import SelectImageBox from "../Components/SelectImageBox/SelectImageBox";
import { Col, Row } from "reactstrap";
import SizeBox from "../Components/SizeBox/SizeBox";
import ValorBox from "../Components/ValorBox/ValorBox";
import TableForm from "../Components/TableForm/TableForm";
import AreaDescription from "../Components/AreaDescription/AreaDescription";
import ButtonSubmit from "../Components/ButtonSubmit/ButtonSubmit";

export default function PostManagementPage({changeTheme,currentTheme}){
    const [nomeProduto,setNomeProduto] = useState('');
    const [codigoProduto,setCodigoProduto] = useState('');
    const [qtdProduto,setQtdProduto] = useState('');
    const [tamanhoProd,setTamanhoProd] = useState('G');    
    const [valor,setValor] = useState('');
    const [existSize,setExistSize] = useState([
        {size:'G',qtd:"100",product:'JumpMan AIJ1 moletom'}
    ]);
    const [description,setDescription ] = useState('');
    return(
        <>
            <Header changeTheme={changeTheme} currentTheme={currentTheme}/>
            <main>
                <TitleVerb text="Post New Product in Database" colorText="#3385ff"/>
                <Form onSubmit={(event)=>event.preventDefault()}>
                    <InputTextBox label="Nome do Produto:" state={nomeProduto} changeState={setNomeProduto}/>
                    <InputTextBox label="Codigo do Produto:" state={codigoProduto} changeState={setCodigoProduto}/>
                    <BottomSide>
                        <Row xs={1} md={2} className="gap-4 gap-md-0">
                            <Col md={6}>
                                <Row className="gap-4 gap-md-0" xs={1} md={2}>
                                    {/* <Col>
                                        <SelectImageBox label="Imagem do Produto:"/>
                                    </Col> */}
                                    <Col>
                                        <SizeBox label="Atual Quantidade em Estoque:" idInput="qtdEstoque" stateSize={tamanhoProd} changeStateSize={setTamanhoProd} stateQTD={qtdProduto} changeStateQTD={setQtdProduto} />
                                    </Col>
                                    <Col>
                                        <WrapperValue>
                                            <ValorBox label="Valor: " state={valor} changeState={setValor} idInput="valorProduto" />
                                        </WrapperValue>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={6}>
                                <TableForm contents={existSize}/>
                            </Col>
                        </Row>
                        <WrapperLastLine>
                            <AreaDescription  />
                            <ButtonSubmit />
                        </WrapperLastLine>
                    </BottomSide>
                </Form>
            </main> 
        </>
    );
}

const Form = styled.form`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding:10px;
`

const WrapperLastLine = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    width:90%;
    margin:auto;
    margin-top:20px;
    gap:2rem;
    @media screen and (min-width:768px) {
        flex-direction: row;
    }
`

const BottomSide = styled.div`
    margin-top:20px;
`;

const WrapperValue = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
`;
