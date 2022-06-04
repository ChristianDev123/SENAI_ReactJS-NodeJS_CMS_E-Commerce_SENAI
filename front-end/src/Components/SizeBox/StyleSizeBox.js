import styled from 'styled-components';

export const Wrapper = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const WrapperLine = styled.div`
    display:flex;
`;

export const Label = styled.label`
    font-size:18px;
    text-align:center;
    color:#000;
`; 

export const InputText = styled.input`
    border:none;
    border-bottom: 1px solid var(--primary-color);
    opacity:0.5;
    background:transparent;
    color:#000;
    &:hover{
        border-bottom:2px solid var(--primary-color);
        opacity:0.75;
        transition:.5s;
    }
    &:focus{
        opacity:1;
        border-bottom:2px solid var(--primary-color);
        outline: none;
    }
`;

export const SelectSize = styled.select`
    border:1px solid black;
    border-radius: 5px;
    &:focus{
        outline: none;
    }
`;