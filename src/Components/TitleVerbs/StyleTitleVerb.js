import styled from 'styled-components';

export const WrapperText = styled.div`
    margin:auto;
    max-width: 85%;
    display:flex;
    align-items:center;
    justify-content: center;
    border-bottom:2.5px solid var(--detail-line);
`;

export const StyledText = styled.h2`
    color:${(props)=>(props.color)};
    text-align: center;
`;