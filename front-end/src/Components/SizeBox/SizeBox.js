import { InputText, Label, SelectSize, Wrapper, WrapperLine } from "./StyleSizeBox";

export default function SizeBox({
    label="",
    idInput="",
    stateQTD,
    changeStateQTD,
    stateSize,
    changeStateSize
}){
    const arrSizeShoes = [35,36,37,38,39,40,41,42,43,44,45];
    return(
        <Wrapper>
            <Label htmlFor={idInput}>{label}</Label>
            <WrapperLine>
                <SelectSize value={stateSize} onChange={(event)=>changeStateSize(event.target.value)}>
                    <option value="G">G</option>
                    <option value="M">M</option>
                    <option value="P">P</option>
                    {arrSizeShoes.map((size, index)=>(<option key={index} value={size}>{size}</option>))}
                </SelectSize>
                <InputText id={idInput} type="number" min="0" value={stateQTD} onChange={(event)=>changeStateQTD(event.target.value)}/>
            </WrapperLine>
        </Wrapper>
    );
}