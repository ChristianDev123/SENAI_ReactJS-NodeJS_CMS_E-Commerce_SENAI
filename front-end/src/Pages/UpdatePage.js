import { useEffect, useState } from "react";
import Header from "../Components/Header/Header";
import InputTextBox from "../Components/InputTextBox/InputTextBox";
import TitleVerb from "../Components/TitleVerbs/TitleVerbs";
import styled from 'styled-components';
import { Col, Row } from "reactstrap";
import SizeBox from "../Components/SizeBox/SizeBox";
import ValorBox from "../Components/ValorBox/ValorBox";
import TableForm from "../Components/TableForm/TableForm";
import AreaDescription from "../Components/AreaDescription/AreaDescription";
import ButtonSubmit from "../Components/ButtonSubmit/ButtonSubmit";
import SelectImageBox from "../Components/SelectImageBox/SelectImageBox";
import Navbar from "../Components/NavBar/Navbar";

export default function UpdateManagementPage({changeTheme,currentTheme}){
    const [nomeProduto,setNomeProduto] = useState('');
    const [atualCodigoProduto,setAtualCodigoProduto] = useState('');
    const [novoCodigoProduto,setNovoCodigoProduto] = useState('');
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
                <TitleVerb text="Update an Existent Product" colorText="#0000ff"/>
                <Form onSubmit={(event)=>event.preventDefault()}>
                    <InputTextBox label="Nome do Produto:" state={nomeProduto} changeState={setNomeProduto}/>
                    <CodeLineWrapper>
                        <Row xs={1} md={2} className="gap-4 gap-md-0">
                            <Col>
                                <InputTextBox label="Código Atual do Produto:" state={atualCodigoProduto} changeState={setAtualCodigoProduto}/>
                            </Col>
                            <Col>
                                <InputTextBox label="Novo Código do Produto:" state={novoCodigoProduto} changeState={setNovoCodigoProduto}/>
                            </Col>
                        </Row>
                    </CodeLineWrapper>
                    <BottomSide>
                        <Row xs={1} md={2} className="gap-4 gap-md-0">
                            <Col md={6}>
                                <Row className="gap-4 gap-md-0" xs={1} md={2}>
                                    <Col>
                                        <SelectImageBox idInput="ImageSelectUpdate" label="Imagem do Produto:"/>
                                    </Col>
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
                            <AreaDescription idInput="DescriptionAreaUpdate"  state={description} changeState={setDescription} />
                            <ButtonSubmit />
                        </WrapperLastLine>
                    </BottomSide>
                </Form>
                <SidebarWrapper>
                    <Navbar/>
                </SidebarWrapper>
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
    padding:2%;
`

const WrapperLastLine = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width:90%;
    margin:auto;
    margin-top:20px;
    gap:2rem;
    @media screen and (min-width:768px) {
        flex-direction: row;
        align-items: flex-end;
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

const CodeLineWrapper = styled.div`
    margin-top:15px;
`;

const SidebarWrapper = styled.div`
    margin:auto;
    padding:0 10%;
    margin-top:7%;
`;