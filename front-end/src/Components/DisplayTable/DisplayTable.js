import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
import { BodyTable, ButtonDelete, CheckWrapper, ColumnHeader, ContainerAll, HeaderTable, HeaderWrapper, InputCheck, LineTable, LineWrapper, SearchIcon, SearchInput, Space, Table, Text, TextHeader, Wrapper, WrapperButton, WrapperSearch } from "./StylesDisplayTable";

export default function DisplayTable({deletePage=false}){
    let arrProducts = []
    const [content,setContent] = useState([]);
    const [search,setSearch] = useState('');

    function DeleteProducts(indexProd){
        axios.delete(`https://crud-node-senai.herokuapp.com/deleteProducts/${indexProd}`)
        .then((response)=>{
            UpdatePage();
        })
        .catch((err)=>console.log("o erro foi" + err))
    }

    function StartDeletes(){
        arrProducts.forEach((id) => { DeleteProducts(id)});
        const arrChecks = document.querySelectorAll(".ChecksInput");
        arrChecks.forEach((input)=>{input.checked = false});
        arrProducts.length = 0;
    }

    function UpdatePage(){
        axios.get(`https://crud-node-senai.herokuapp.com/searchbar?name=${search}&code=${search}`)
        .then(({data})=>setContent(data.rows));
    }
    
    useEffect(()=>{
        UpdatePage();
    },[search]);

    return(
        <ContainerAll>
            <Wrapper>
                <WrapperSearch>
                    <SearchInput type="text" value={search} onChange={(event)=>setSearch(event.target.value)}/>
                    <SearchIcon/>
                </WrapperSearch>
                <Table>
                    <HeaderTable>
                        {deletePage && <Space/>}
                        <HeaderWrapper>
                            <ColumnHeader>
                                <TextHeader>Produto:</TextHeader>
                            </ColumnHeader>
                            <ColumnHeader>
                                <TextHeader>Qtd Estoque:</TextHeader>
                            </ColumnHeader>
                            <ColumnHeader>
                                <TextHeader>Valor Unitário:</TextHeader>
                            </ColumnHeader>
                            <ColumnHeader>
                                <TextHeader>Data de Inserção:</TextHeader>
                            </ColumnHeader>
                            <ColumnHeader>
                                <TextHeader>Código do Produto:</TextHeader>
                            </ColumnHeader>
                        </HeaderWrapper>
                    </HeaderTable>
                    <BodyTable>
                        {deletePage &&
                            <CheckWrapper>
                                {content.map((data,index)=>(  
                                    <InputCheck key={index} type="checkbox"  className="ChecksInput" onChange={(event)=>{
                                        if(event.target.checked) arrProducts.push(data.idProduct);
                                        else arrProducts = arrProducts.filter((productsDatas)=>productsDatas !== data.idProduct);
                                    }}/>
                                ))}
                            </CheckWrapper>}
                        <LineWrapper>
                            {content.map((product, index)=>{
                                const lastUpdate = new Date(product.updatedAt)
                                return (
                                    <LineTable key={index}>
                                        <Text>{product.name}</Text>
                                        <Text>{product.quantity}</Text>
                                        <Text>{product.unitValue}</Text>
                                        <Text>{lastUpdate.toLocaleDateString()}</Text>
                                        <Text>{product.code}</Text>
                                    </LineTable>
                                )
                            })}
                        </LineWrapper>
                    </BodyTable>
                </Table>
                {deletePage && 
                    <WrapperButton>
                        <ButtonDelete onClick={()=>StartDeletes()}>Delete</ButtonDelete>
                    </WrapperButton>}
            </Wrapper>
        </ContainerAll>
    );
}