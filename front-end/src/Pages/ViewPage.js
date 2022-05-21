import Header from "../Components/Header/Header";
import Navbar from "../Components/NavBar/Navbar";
import styled from 'styled-components';
import DisplayTable from "../Components/DisplayTable/DisplayTable";

export default function ViewPage({changeTheme, currentTheme}){
    return(
        <>
            <Header changeTheme={changeTheme} currentTheme={currentTheme}/>
            <DisplayWrapper>
                <DisplayTable/>
            </DisplayWrapper>
            <SidebarWrapper>
                <Navbar/>
            </SidebarWrapper>
        </>
    );
}

const SidebarWrapper = styled.div`
    margin:auto;
    padding:0 10%;
    margin-top:7%;
`;

const DisplayWrapper = styled.main`
    height:calc(100vh - (68px + 52px));
    display:flex;
    justify-content:center;
    align-items:center;
`;