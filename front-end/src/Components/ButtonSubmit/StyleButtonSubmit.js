import styled from 'styled-components';

export const Wrapper = styled.div`
`;

export const Button = styled.input`
    border:2px solid var(--primary-color);
    background:transparent;
    color:var(--primary-color);
    font-size: 18px;
    padding:3px 25px;
    border-radius:10px;
    cursor:pointer;
    &:hover{
        background:var(--primary-color);
        padding:4px 27px;
        font-size:20px;
        font-weight:700;
        color:var(--bk-color);
    }
    transition:0.5s;
`;
