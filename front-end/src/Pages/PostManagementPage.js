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
import Navbar from "../Components/NavBar/Navbar";
import * as yup from 'yup'
import axios from "axios";
import ReactLoading from 'react-loading';


export default function PostManagementPage(){
    const [nomeProduto,setNomeProduto] = useState('');
    const [codigoProduto,setCodigoProduto] = useState('');
    const [image, setImage] = useState();
    const [qtdProduto,setQtdProduto] = useState('');
    const [tamanhoProd,setTamanhoProd] = useState('G');    
    const [valor,setValor] = useState('');
    const [description,setDescription ] = useState('');
    const [status,setStatus] = useState('');
    const [confirmation,setConfirmation] = useState(false);
    
    useEffect(()=>{
        document.querySelector(".titlePage").innerHTML = "Inserção de Produtos"
    },[])

    useEffect(()=>{
        if(confirmation) setTimeout(()=>(setConfirmation(false)),5000);
    },[confirmation])

    async function createNewProduct(event){
        event.preventDefault()
        
        const formData = new FormData();
        formData.append("image",image);
        const headers = {headers: {"Content-Type": "application/json"}};
        
        const obj = {
            nameProduct:nomeProduto,
            codeProduct:codigoProduto,
            qtdProduct:Number(qtdProduto),
            sizeProduct:tamanhoProd,
            unitValue:Number(valor),
            descProduct:description
        }

        if(await Validation(obj)){
           axios.post('https://crud-node-senai.herokuapp.com/newProduct', obj, headers)
           .then(()=>APIImage(formData))
           .catch(()=>setStatus({type:'error', message:'Erro ao conectar ao enviar informações à base de dados.'}))
        }
        
        setNomeProduto('');
        setCodigoProduto('');
        setQtdProduto('');
        setValor('');
        setDescription('');
    }
    
    function APIImage(formData){
        axios
        .post("https://crud-node-senai.herokuapp.com/Uploadimage", formData)
        .then((response)=>{setConfirmation(response)})
        .catch((err) => {
            console.log("o erro foi" + err);
        });
    }

    async function Validation(obj) {
        let schema = yup.object().shape({
            descProduct:
                yup
                .string("ERRO: Necessário preencher todos os campos")
                .required('Necessário preencher o campo "Descrição"!'),
            unitValue:
                yup
                .number("ERRO: Necessário preencher todos os campos")
                .required('Necessário preencher o campo "Nome Produto"!'),
            qtdProduct:
                yup
                .number("ERRO: Necessário preencher todos os campos")
                .integer()
                .required('Necessário preencher o campo "Atual Quantidade em Estoque"!'),
            codeProduct:
                yup
                .string("ERRO: Necessário preencher todos os campos")
                .required('Necessário preencher o campo "Código do Produto"!'),
            nameProduct:
                yup
                .string("ERRO: Necessário preencher todos os campos")
                .required('Necessário preencher o campo "Nome do Produto"!'),
        });
        try{
            await schema.validate(obj)
            return true;
        }catch(err){
            setStatus({
                type: 'error',
                message: err.errors
            })
            return false;
        }
    }

    return(
        <>
            <Header/>
            <main>
                <TitleVerb text="Post New Product in Database" colorText="#3385FF"/>
                <Form onSubmit={(event)=>createNewProduct(event)}>
                    <InputTextBox label="Nome do Produto:" state={nomeProduto} changeState={setNomeProduto} name="nameProduct"/>
                    <InputTextBox label="Codigo do Produto:" state={codigoProduto} changeState={setCodigoProduto} name="codeProduct"/>
                    <BottomSide>
                        <Row xs={1} md={2} className="gap-4 gap-md-0">
                            <Col md={6}>
                                <Row className="gap-4 gap-md-0" xs={1} md={2}>
                                    <Col>
                                        <SelectImageBox idInput="imageSelectPost" label="Imagem do Produto:" state={image} changeState={setImage}/>
                                    </Col>
                                    <Col>
                                        <SizeBox label="Atual Quantidade em Estoque:" idInput="qtdEstoque" stateSize={tamanhoProd} changeStateSize={setTamanhoProd} stateQTD={qtdProduto} changeStateQTD={setQtdProduto} name="qtdProduct"/>
                                    </Col>
                                    <Col>
                                        <WrapperValue>
                                            <ValorBox name="unitValue" label="Valor: " state={valor} changeState={setValor} idInput="valorProduto" />
                                        </WrapperValue>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={6}>
                                <TableForm update={confirmation}/>
                            </Col>
                        </Row>
                        <WrapperLastLine>
                            <AreaDescription name="descProduct" idInput="DescriptionArea" state={description} changeState={setDescription} />
                            <ButtonSubmit />
                        </WrapperLastLine>
                    </BottomSide>
                </Form>
                {confirmation && <Situation style={{color:'green'}}>
                    Atualização Realizada com sucesso!
                </Situation>}
                {status.type === "error" && (<Situation style={{ color: "red" }}>{status.message}</Situation>)}
                <WrapperLoading>
                    {confirmation && <ReactLoading type="spin" color="#D71709" height="50px" width="50px"/>}
                </WrapperLoading>
                <SidebarWrapper>
                    <Navbar/>
                </SidebarWrapper>
            </main> 
        </>
    );
}

const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding:2%;
`;

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
`;

const BottomSide = styled.div`
    margin-top:20px;
`;

const WrapperValue = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
`;

const SidebarWrapper = styled.div`
    margin:auto;
    padding:0 10%;
    margin-top:7%;
`;

const Situation = styled.p`
    font-family: Open Sans;
    font-size: 16px;
    text-align: center;
    margin-top:5%;
    @media screen and (max-width: 350px) {
        font-size: 14px;
    }
    @media screen and (min-width: 370px) {
        font-size: 22px;
    }
`;

const WrapperLoading = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
`;