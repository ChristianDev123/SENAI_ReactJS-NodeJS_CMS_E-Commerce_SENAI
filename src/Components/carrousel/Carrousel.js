import { CarrouselWrapper, Wrapper , Image } from "./StyledCass";
import { useState } from "react";
import DarkIcon from '../../assets/MoonIcon.png';
import LightIcon from '../../assets/SunIcon.svg';

export default function LeftMain({changeTheme,currentTheme }){
    const [isDark,setIsDark] = useState(true);
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
                </CarrouselWrapper>
            </Wrapper>
        </>
    )
}