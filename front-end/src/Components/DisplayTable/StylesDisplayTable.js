import styled from 'styled-components';
import { Search } from '@styled-icons/bootstrap/Search'

export const ContainerAll = styled.section`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
`;

export const Wrapper = styled.div`
    border:1px solid rgba(0,0,0,0.75);
    border-radius:5px;
    width:90%;
    height:50%;
`;

export const WrapperSearch = styled.div`
    background:rgba(0,0,0,0.75);
    display:flex;
    justify-content:center;
    align-items:center;
`;

export const SearchInput = styled.input`
    width:50%;
    height:100%;
    border:none;
    background:#f2f2f2;
    margin:0 5px;
    padding:1px 5px;
    &:focus{
        background-color:var(--bk-color);
        outline: none;
    }  
`;

export const SearchIcon = styled(Search)`
    width:32px;
    height:32px;
    color:white;
    padding:3px;
    cursor:pointer;
`;

export const Table = styled.div`
  overflow-y: scroll;
  ::-webkit-scrollbar{
      width:5px;
  }
  ::-webkit-scrollbar-track{
      background:rgba(0,0,0,0.75);
  }
  ::-webkit-scrollbar-thumb{
      background:#000;
      border-radius: 10px;
  }
  max-height:500px;  
`;

export const HeaderTable = styled.div`
    display: flex;
    justify-content: space-around;
`;

export const BodyTable = styled.div`
    display:flex;
`;

export const ButtonDelete = styled.button`
    padding:5px 20px;
    color:white;
    font-weight: bold;
    font-size: 20px;
    background:#B30000;
    border:none;
    border-top-left-radius: 10px;
    box-shadow: -4px -4px 8px rgba(0,0,0,0.75);
`;

export const WrapperButton = styled.div`
    display: flex;
    justify-content: flex-end;
    width:100%;
    margin-top:-39px;
    margin-left:-5px;
    position: relative;
    z-index: 2;
`;

export const LineTable = styled.div`
    display:flex;
    justify-content: space-around;
`;

export const ColumnHeader = styled.div`
    display: flex;
    align-items:center; 
`;

export const ColumnBody = styled.div`

`;

export const Text = styled.p`
    text-align: center;
    font-size: 11px;
    width:5ch;
    @media screen and (min-width:410px){
        font-size: 13px;
    }
    @media screen and (min-width: 760px){
        font-size:15px;
    }
    @media screen and (min-width: 900px){
        width:10ch;
    }
    @media screen and (min-width:1000px){
        width:15ch;
    }
    @media screen and (min-width:1100px){
        width:20ch;
    }
`;

export const TextHeader = styled.p`
    font-weight:bold;
    text-align: center;
    font-size: 8px;
    width:5ch;

    @media screen and (min-width: 350px) {
        font-size:11px;
    }
    @media screen and (min-width:410px){
        font-size: 13px;
    }
    @media screen and (min-width: 760px){
        font-size:15px;
    }
    @media screen and (min-width: 900px){
        width:10ch;
    }
    @media screen and (min-width:1000px){
        width:15ch;
    }
    @media screen and (min-width:1100px){
        width:20ch;
    }
`;

export const CheckWrapper = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:space-between;
    align-items: center;
    border-right:1px solid rgba(0,0,0,0.75);
    padding:10px;
    width:50px;
`;

export const LineWrapper = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
`;

export const Space = styled.div`
    border-right:1px solid rgba(0,0,0,0.75);
    width:39px;
    @media screen and (min-width:350px){
        width:54px;
    }
    @media screen and (min-width:410px){
        width:53px;
    }
    @media screen and (min-width:530px){
        width:52px;
    }
    @media screen and (min-width: 750px){
        width:51px;
    }
    @media screen and (min-width:800px){
        width:52px;
    }
    @media screen and (min-width: 1000px){
        width:51px;
    }
`;

export const HeaderWrapper = styled.div`
    display:flex;
    justify-content: space-around;
    width:100%;
`;

export const InputCheck = styled.input`
    z-index: 3;
`;