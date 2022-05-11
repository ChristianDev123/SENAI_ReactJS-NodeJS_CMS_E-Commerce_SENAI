import { Button, ButtonWrapper, Image } from "./StylesButton";

export default function BigButton({color, image,}){
    return(
        <ButtonWrapper>
            <Button color={color}>
                <Image src={image} />
            </Button>
        </ButtonWrapper>
    );
}