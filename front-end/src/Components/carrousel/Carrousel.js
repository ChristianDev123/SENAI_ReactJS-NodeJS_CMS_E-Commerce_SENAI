import { CarrouselWrapper, Wrapper , Image } from "./StyledCass";
import { useState } from "react";
import DarkIcon from '../../assets/MoonIcon.png';
import LightIcon from '../../assets/SunIcon.svg';
import { UncontrolledCarousel } from 'reactstrap';
import GenericImage1 from '../../assets/GenericImage1.jpg';
import GenericImage2 from '../../assets/GenericImage2.jpg';
import GenericImage3 from '../../assets/GenericImage3.jpg';


export default function LeftMain({changeTheme,currentTheme }){
    const [isDark,setIsDark] = useState(true);
    const [imagesCarousel,setImagesCarousel] = useState([
        {src:GenericImage1},
        {src:GenericImage2},
        {src:GenericImage3}
    ]);
    /* sempre usar imagens em modo retrato (3000,2000) */
    return(
        <>
            <Wrapper>
                <Image src={isDark?DarkIcon:LightIcon}
                    onClick={()=>{
                        setIsDark(!isDark);
                        changeTheme(!currentTheme);
                    }}
                />
                <CarrouselWrapper>
                    <UncontrolledCarousel items={imagesCarousel}/>
                </CarrouselWrapper>
            </Wrapper>
        </>
    )
}