import styled from 'styled-components';

export const Wrapper = styled.div`
    display:flex;
    flex-direction: column;
    width:85%;
`;

export const Label = styled.label`
    color:${(props)=>props.theme.colors.text};
`;

export const Area = styled.textarea`
    background:transparent;
    border:1.5px solid ${(props)=>props.theme.colors.text};
    color:${(props)=>props.theme.colors.text};
    border-radius:3px;
`;