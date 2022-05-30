import { Label, LabelText, SelectInput, SelectionWrapper } from "./StyleImageBox";

export default function SelectImageBox({label,idInput,changeState}){
    return(
        <SelectionWrapper>
            <LabelText>
                {label}
            </LabelText>
            <Label htmlFor={idInput}>Selecione</Label>
            <SelectInput id={idInput} onChange={(event)=>changeState(event.target.files[0])} type="file"/>
        </SelectionWrapper>
    );
}