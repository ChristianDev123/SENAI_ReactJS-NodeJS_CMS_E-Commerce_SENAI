import { InputWrapper,Input, Label } from "./StylesInputText";

export default function InputTextBox({state,changeState,idInput="",label}){
    return(
        <InputWrapper>
            <Label for={idInput}>{label}</Label>
            <Input type="text" id={idInput} value={state} onChange={(event)=>changeState(event.target.value)}/>
        </InputWrapper>
    );
}