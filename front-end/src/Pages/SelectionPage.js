import Update from '../assets/UpdateIcon.svg';
import Post from '../assets/PostIcon.svg';
import Remove from '../assets/RemoveIcon.svg';
import View from '../assets/ViewIcon.svg';
import { useState } from "react";
import VerbsWrapper from '../Components/VerbsWrapper/VerbsWrapper';
import BigButton from '../Components/BigButton/BigButton';
import Header from '../Components/Header/Header';

export default function SelectionPage({changeTheme,currentTheme }){
    const [buttons,setButtons] = useState([
        {color:'#0000ff',image:Update, textverb:'Update an register'},
        {color:'#3385FF',image:Post, textverb:'Post an new register'},
        {color:'#B30000',image:Remove, textverb:'Remove an register'},
        {color:'#5CD65C',image:View, textverb:'View all registers'}
    ]);
    return(
        <>
            <Header changeTheme={changeTheme} currentTheme={currentTheme} title="Choose an action"/>
            <main>
                {buttons.map((verbs,index)=>{
                    return (
                        <VerbsWrapper id={index} Text={verbs.textverb}>
                            <BigButton color={verbs.color} image={verbs.image} />
                        </VerbsWrapper>
                    );
                })}
            </main>
        </>
    );
}