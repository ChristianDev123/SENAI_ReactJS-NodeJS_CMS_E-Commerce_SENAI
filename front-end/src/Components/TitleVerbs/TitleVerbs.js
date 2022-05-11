import { StyledText, WrapperText } from "./StyleTitleVerb";

export default function TitleVerb({text="", colorText="#000"}){
    return(
        <WrapperText>
            <StyledText color={colorText}>
                {text}
            </StyledText>
        </WrapperText>
    );
}