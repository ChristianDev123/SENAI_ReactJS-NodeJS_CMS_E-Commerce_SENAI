import { Area, Label, Wrapper } from "./StylesAreaDescription";

export default function AreaDescription({idInput, state, changeState}){
    return(
        <Wrapper>
            <Label for={idInput}>Descrição:</Label>
            <Area id={idInput} value={state} onChange={(event)=>changeState(event.target.value)}/>
        </Wrapper>
    );
}