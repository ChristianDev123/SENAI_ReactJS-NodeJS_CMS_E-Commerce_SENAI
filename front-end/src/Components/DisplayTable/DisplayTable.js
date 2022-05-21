import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
import { BodyTable, ButtonDelete, CheckWrapper, ColumnHeader, ContainerAll, HeaderTable, HeaderWrapper, LineTable, LineWrapper, SearchIcon, SearchInput, Space, Table, Text, TextHeader, Wrapper, WrapperButton, WrapperSearch } from "./StylesDisplayTable";

export default function DisplayTable({deletePage=false}){
    const [content,setContent] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:3001/all')
        .then(({data})=>setContent(data));
    },[]);

    return(
        <ContainerAll>
            <Wrapper>
                <WrapperSearch>
                    <SearchInput/>
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
                                {content.map((data)=>(
                                        <input type="checkbox" name={data.idProduct}/>
                                ))}
                            </CheckWrapper>}
                        <LineWrapper>
                            {content.map((product)=>{
                                const lastUpdate = new Date(product.updatedAt)
                                return (
                                    <LineTable>
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
                        <ButtonDelete>Delete</ButtonDelete>
                    </WrapperButton>}
            </Wrapper>
        </ContainerAll>
    );
}