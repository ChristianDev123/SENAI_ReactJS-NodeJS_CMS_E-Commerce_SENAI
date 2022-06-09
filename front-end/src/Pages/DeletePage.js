import Header from "../Components/Header/Header";
import Navbar from "../Components/NavBar/Navbar";
import styled from 'styled-components';
import DisplayTable from "../Components/DisplayTable/DisplayTable";
import TitleVerb from "../Components/TitleVerbs/TitleVerbs";
import { useEffect } from "react";

export default function ViewPage({changeTheme, currentTheme}){
    
    useEffect(()=>{
        document.querySelector(".titlePage").innerHTML = "Remoção de Produtos";
    },[])
    
    return(
        <>
            <Header changeTheme={changeTheme} currentTheme={currentTheme}/>
            <TitleVerb text="Remove an Exists Product in Database" colorText="#B30000"/>
            <DisplayWrapper>
                <DisplayTable deletePage/>
            </DisplayWrapper>
            <Navbar/>
        </>
    );
}


const DisplayWrapper = styled.main`
    height:80%;
    display:flex;
    justify-content:center;
    align-items:center;
`;