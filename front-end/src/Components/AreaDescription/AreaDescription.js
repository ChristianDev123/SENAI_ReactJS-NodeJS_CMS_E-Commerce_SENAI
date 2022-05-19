import { Area, Label, Wrapper } from "./StylesAreaDescription";

export default function AreaDescription({idInput, state, changeState}){
    return(
        <Wrapper>
            <Label htmlFor={idInput}>Descrição:</Label>
            <Area rows="3" id={idInput} value={state} onChange={(event)=>changeState(event.target.value)}/>
        </Wrapper>
    );
}