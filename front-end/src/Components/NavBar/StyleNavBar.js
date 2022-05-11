import styled from 'styled-components';

import {Eye} from '@styled-icons/feather/Eye';
import {Autorenew} from '@styled-icons/material/Autorenew';
import {RemoveCircleOutline} from '@styled-icons/material-twotone/RemoveCircleOutline';
import {PlusCircle} from '@styled-icons/bootstrap/PlusCircle';

export const ViewIcon = styled(Eye)`
    width:48px;
    height:48px;
`;

export const UpdateIcon = styled(Autorenew)`
    width:48px;
    height:48px;
`;

export const RemoveIcon = styled(RemoveCircleOutline)`
    width:48px;
    height:48px;
`;

export const PostIcon = styled(PlusCircle)`
    width:48px;
    height:48px;
`;

export const Wrapper = styled.section`
    width:100%;
    display:flex;
    justify-content: center;
`

export const Button = styled.button`
    background:${(props)=>console.log(props)};
`;

export const Image = styled.img`
    
`;