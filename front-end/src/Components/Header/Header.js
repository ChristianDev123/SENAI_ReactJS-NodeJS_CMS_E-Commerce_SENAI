import { ContainerAll, Title } from "./StylesHeader";

export default function Header({title}){
    return(
        <header>
            <ContainerAll>
                <Title>{title}</Title>
            </ContainerAll>
        </header>
    );
}