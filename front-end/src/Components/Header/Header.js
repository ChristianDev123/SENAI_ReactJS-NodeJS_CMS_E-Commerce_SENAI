import { Switch } from "@mui/material";
import { ContainerAll, Title } from "./StylesHeader";

export default function Header({changeTheme,currentTheme,title}){
    return(
        <header>
            <ContainerAll>
                <Switch onClick={()=>changeTheme(!currentTheme)}/>
                <Title>{title}</Title>
            </ContainerAll>
        </header>
    );
}