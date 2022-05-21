import { InputText, Label, SelectSize, Wrapper, WrapperLine } from "./StyleSizeBox";

export default function SizeBox({
    label="",
    idInput="",
    stateQTD,
    changeStateQTD,
    stateSize,
    changeStateSize
}){
    return(
        <Wrapper>
            <Label htmlFor={idInput}>{label}</Label>
            <WrapperLine>
                <SelectSize value={stateSize} onChange={(event)=>changeStateSize(event.target.value)}>
                    <option value="G">G</option>
                    <option value="M">M</option>
                    <option value="P">P</option>
                </SelectSize>
                <InputText id={idInput} type="number" min="0" value={stateQTD} onChange={(event)=>changeStateQTD(event.target.value)}/>
            </WrapperLine>
        </Wrapper>
    );
}