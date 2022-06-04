import styled from 'styled-components';

import {Eye} from '@styled-icons/feather/Eye';
import {Autorenew} from '@styled-icons/material/Autorenew';
import {RemoveCircleOutline} from '@styled-icons/material-twotone/RemoveCircleOutline';
import {PlusCircle} from '@styled-icons/bootstrap/PlusCircle';

export const Wrapper = styled.section`
    width:100%;
    margin:auto;
    display:flex;
    justify-content: center;
    background:var(--default_color-form);
    border-radius:15px 15px 0 0;
`

export const ViewIcon = styled(Eye)`
    width:48px;
    height:48px;
    &:hover{
        color:#5CD65C;
        width:50px;
        height:50px;
        top:5px;
    }
    transition: 0.5s;
`;

export const UpdateIcon = styled(Autorenew)`
    width:48px;
    height:48px;
    &:hover{
        color:#0000ff;
        width:50px;
        height:50px;
        top:5px;
    }
    transition: 0.5s;
`;

export const RemoveIcon = styled(RemoveCircleOutline)`
    width:48px;
    height:48px;
    &:hover{
        color:#B30000;
        width:50px;
        height:50px;
        top:5px;
    }
    transition: 0.5s;
`;

export const PostIcon = styled(PlusCircle)`
    width:48px;
    height:48px;
    &:hover{
        color:#3385FF;
        width:50px;
        height:50px;
        top:5px;
    }
    transition: 0.5s;
`;

export const Button = styled.button`
    padding:2px 15px;
    border:none;
    background:transparent
`;