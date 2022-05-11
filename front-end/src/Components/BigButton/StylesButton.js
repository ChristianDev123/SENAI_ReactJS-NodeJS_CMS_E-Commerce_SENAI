import styled from 'styled-components';

export const ButtonWrapper = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    background:${(props)=>props.children.props.color};
`;

export const Button = styled.button`
    background: inherit;
    height:100%;
    width:100%;
`;

export const Image = styled.img`
`;