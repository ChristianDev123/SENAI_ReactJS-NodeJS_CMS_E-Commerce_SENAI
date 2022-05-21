import styled from 'styled-components';

export const InputWrapper = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction: column;
`;

export const Input = styled.input`
    border:none;
    border-bottom: 1px solid ${(props)=>props.theme.colors.specialText};
    opacity:0.5;
    background:transparent;
    color:${(props)=>props.theme.colors.text};
    &:hover{
        border-bottom:2px solid ${(props)=>props.theme.colors.specialText};
        opacity:0.75;   
    }
    &:focus{
        opacity:1;
        border-bottom:2.5px solid ${(props)=>props.theme.colors.specialText};
        outline: none;
    }
    transition: 0.5s;
`;

export const Label = styled.label`
    padding: 5px 0;
    font-family:22px;
    color:${(props)=>props.theme.colors.text};
`;