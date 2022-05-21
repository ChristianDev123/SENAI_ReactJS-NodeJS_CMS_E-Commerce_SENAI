import styled from 'styled-components';

export const TextVerb = styled.h3`
    display:flex;
    align-items:center;
    height:100%;
    color:${(props)=>props.theme.colors.text};
    & .left{
        width:100%;
        text-align: right;
    }
    & .right{
        width:100%;
        text-align: left;
    }
`;

export const SpanVerb = styled.span`
    padding:0 5px;
    color:${(props)=>props.theme.colors.specialText};
`;