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
                        <Row xs={2}>
                            <Col xs={8}>
                                <Row xs={2}>
                                    {/* <Col>
                                        <SelectImageBox label="Imagem do Produto:"/>
                                    </Col> */}
                                    <Col>
                                        <SizeBox label="Atual Quantidade em Estoque:" idInput="qtdEstoque" stateSize={tamanhoProd} changeStateSize={setTamanhoProd} stateQTD={qtdProduto} changeStateQTD={setQtdProduto} />
                                    </Col>
                                    <Col>
                                        <ValorBox label="Valor: " state={valor} changeState={setValor} idInput="valorProduto" />
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={4}>
                                <TableForm contents={existSize}/>
                            </Col>
                        </Row>
                        <WrapperLastLine>
                            <AreaDescription  />
                            <SubmitWrapper>
                                <ButtonSubmit />
                            </SubmitWrapper>
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
    justify-content: space-between;
    align-items: center;
    width:90%;
`

const SubmitWrapper = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
`;

const BottomSide = styled.div`
    margin-top:20px;
`;