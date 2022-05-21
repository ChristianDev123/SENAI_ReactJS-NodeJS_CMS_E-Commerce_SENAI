import { Input, Label, Wrapper } from "./StylesValorBox";

export default function ValorBox({
    state,
    changeState,
    idInput="",
    label=""
}){
    return(
        <Wrapper>
            <Label htmlFor={idInput}>{label}</Label>
            <Input id={idInput} type="text" min="0" value={state} onChange={(event)=>changeState(event.target.value)}/>
        </Wrapper>
    );
};