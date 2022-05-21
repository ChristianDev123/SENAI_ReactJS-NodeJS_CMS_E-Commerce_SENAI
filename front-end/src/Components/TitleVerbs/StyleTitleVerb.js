import styled from 'styled-components';

export const WrapperText = styled.div`
    margin:auto;
    margin-top:10px;
    margin-bottom: 10px;
    max-width: 80%;
    display:flex;
    align-items:center;
    justify-content: center;
    border-bottom:2.5px solid var(--detail-line);
`;

export const StyledText = styled.h2`
    color:${(props)=>(props.color)};
    text-align: center;
    font-size:28px;
`;