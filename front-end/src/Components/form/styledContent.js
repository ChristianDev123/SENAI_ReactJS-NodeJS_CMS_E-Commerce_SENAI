import styled from "styled-components";

export const ContainerForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding:20px;
    height:100%;
`;

export const Title = styled.h1`
    font-size:20px;
    font-weight: 600;
    letter-spacing: 0em;
    text-align:left;
    color: ${(props)=>props.theme.colors.specialText};
    font-style: italic;
    padding-bottom: 50px;
    @media screen and (max-width:350px) {
        font-size:16px;
    }
    @media screen and (min-width:768px) {
        font-size:28px;
    }
`;

export const Form = styled.form`
`;

export const Label = styled.label`
    font-family: Open Sans;
    font-size: 16px;
    text-align: left;
    padding: 10px 10px 0 5px;
    color:${(props)=>props.theme.colors.specialText};
    @media screen and (max-width:350px) {
        font-size:14px;
    }
    @media screen and (min-width:370px) {
        font-size: 22px;;
    }
`;

export const Input = styled.input`
    justify-content: center;
    align-items: center;
    border:none;
    background: none;
    width: 100%;
    border-bottom: 2px solid ${(props)=>props.theme.colors.text};
    opacity:0.65;
    
    &:hover{
        opacity:1;
        transition:.7s;
    }
    &:focus{
        outline: none;
        border-bottom: 3px solid var(--primary-color);
    }
`;

export const Button = styled.button`
    width: 230px;
    height: 60px;
    background: none;
    border: 1px solid ${(props)=>props.theme.colors.text};
    box-sizing: border-box;
    border-radius: 10px;
    color: ${(props)=>props.theme.colors.text};
    font-size: 20px;
    font-weight: 400;
    
    &:hover{
        border:1px solid var(--primary-color);
        background:var(--primary-color);
        color:var(--bk-color);
        font-weight:bold;
        font-size:25px;
        transition:.7s;
    }
`;

export const SubText = styled.a`
    font-family: Open Sans;
    font-size: 13px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: right;
    padding-top: 10px;
    text-decoration:none;
    color: ${(props)=>props.theme.colors.text};
    :hover{
        text-decoration: none;
        cursor: pointer;
    }
    @media screen and (max-width:350px) {
        font-size:11px;
    }
`;

export const Situation = styled.p`
    font-family: Open Sans;
    font-size: 16px;
    text-align: left;
    padding: 10px 10px 0 5px;
    @media screen and (max-width: 350px) {
        font-size: 14px;
    }
    @media screen and (min-width: 370px) {
        font-size: 22px;
    }
`;