import styled from 'styled-components';

export const SelectionWrapper = styled.div`
    height:100%;
    display: flex;
    flex-direction: column;

`
export const LabelText = styled.h4`
    text-align: center;
    font-size:17px;
    font-weight: 400;
    color:#000;
`;
export const Label = styled.label`
    margin:auto;
    border:2px solid var(--primary-color);
    color:var(--primary-color);
    font-size: 18px;
    padding:3px 25px;
    border-radius:10px;
    cursor:pointer;
    &:hover{
        background:var(--primary-color);
        padding:4px 27px;
        font-size:18px;
        font-weight:700;
        color:var(--bk-color);
    }
    transition:.5s;
`;

export const SelectInput = styled.input`
    display:none;
`;