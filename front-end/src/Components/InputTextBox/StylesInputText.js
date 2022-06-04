import styled from 'styled-components';

export const InputWrapper = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction: column;
`;

export const Input = styled.input`
    border:none;
    border-bottom: 1px solid var(--primary-color);
    opacity:0.5;
    background:transparent;
    color:#000;
    &:hover{
        border-bottom:2px solid var(--primary-color);
        opacity:0.75;   
    }
    &:focus{
        opacity:1;
        border-bottom:2.5px solid var(--primary-color);
        outline: none;
    }
    transition: 0.5s;
`;

export const Label = styled.label`
    padding: 5px 0;
    font-family:22px;
    color:#000;
`;