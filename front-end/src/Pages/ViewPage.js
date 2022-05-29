import Header from "../Components/Header/Header";
import Navbar from "../Components/NavBar/Navbar";
import styled from 'styled-components';
import DisplayTable from "../Components/DisplayTable/DisplayTable";
import TitleVerb from "../Components/TitleVerbs/TitleVerbs";

export default function ViewPage({changeTheme, currentTheme}){
    return(
        <>
            <Header changeTheme={changeTheme} currentTheme={currentTheme}/>
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