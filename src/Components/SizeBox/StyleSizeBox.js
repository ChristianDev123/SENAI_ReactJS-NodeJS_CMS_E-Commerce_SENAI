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
    color:${(props)=>props.theme.colors.text};
`; 

export const InputText = styled.input`
    border:none;
    border-bottom: 1px solid ${(props)=>props.theme.colors.specialText};
    opacity:0.5;
    background:transparent;
    color:${(props)=>props.theme.colors.text};
    &:hover{
        border-bottom:2px solid ${(props)=>props.theme.colors.specialText};
        opacity:0.75;
        transition:.5s;
    }
    &:focus{
        opacity:1;
        border-bottom:2px solid ${(props)=>props.theme.colors.specialText};
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