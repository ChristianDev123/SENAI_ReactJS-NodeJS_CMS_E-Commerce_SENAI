import styled from 'styled-components';

export const Wrapper = styled.div`
    padding:5px;
`

export const Label = styled.label`
    font-size:18px;
    padding:10px 0;
    color:${(props)=>props.theme.colors.text};
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
        transition:.5s;
    }
    &:focus{
        opacity:1;
        border-bottom:2px solid ${(props)=>props.theme.colors.specialText};
        outline: none;
    }
`;