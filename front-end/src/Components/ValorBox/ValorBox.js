import { Input, Label, Wrapper } from "./StylesValorBox";

export default function ValorBox({
    state,
    changeState,
    idInput="",
    label=""
}){
    return(
        <Wrapper>
            <Label for={idInput}>{label}</Label>
            <Input id={idInput} type="number" min="0" value={state} onChange={(event)=>changeState(event.target.value)}/>
        </Wrapper>
    );
};