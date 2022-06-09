import Header from "../Components/Header/Header";
import Navbar from "../Components/NavBar/Navbar";
import styled from 'styled-components';
import DisplayTable from "../Components/DisplayTable/DisplayTable";
import TitleVerb from "../Components/TitleVerbs/TitleVerbs";
import { useEffect } from "react";

export default function ViewPage(){
    
    useEffect(()=>{
        document.querySelector(".titlePage").innerHTML = "Pagina de Visualização"
    },[])

    return(
        <>
            <Header/>
            <TitleVerb text="View all Registers in Database" colorText="#5CD65C"/>
            <DisplayWrapper>
                <DisplayTable/>
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