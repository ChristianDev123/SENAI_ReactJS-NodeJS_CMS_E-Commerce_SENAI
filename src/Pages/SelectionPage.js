import BigButton from "../Components/BigButton/BigButton";
import Update from '../assets/UpdateIcon.svg';
import Post from '../assets/PostIcon.svg';
import Remove from '../assets/RemoveIcon.svg';
import View from '../assets/ViewIcon.svg';
import { useState } from "react";
import VerbsWrapper from "../Components/VerbsWrapper/VerbsWrapper";

export default function SelectionPage(){
    const [buttons,setButtons] = useState([
        {color:'#0000ff',image:Update, textverb:'Update'},
        {color:'#3385FF',image:Post, textverb:'Post'},
        {color:'#B30000',image:Remove, textverb:'Remove'},
        {color:'#5CD65C',image:View, textverb:'View'}
    ]);
    return(
        <>
            {buttons.map((verbs,index)=>{
                return (
                    <VerbsWrapper id={index} Text={verbs.textverb}>
                        <BigButton color={verbs.color} image={verbs.image} />
                    </VerbsWrapper>
                );
            })}
        </>
    );
}