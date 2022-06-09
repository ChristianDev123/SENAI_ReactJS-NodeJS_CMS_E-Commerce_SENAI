import Update from '../assets/UpdateIcon.svg';
import Post from '../assets/PostIcon.svg';
import Remove from '../assets/RemoveIcon.svg';
import View from '../assets/ViewIcon.svg';
import { useEffect, useState } from "react";
import VerbsWrapper from '../Components/VerbsWrapper/VerbsWrapper';
import BigButton from '../Components/BigButton/BigButton';
import Header from '../Components/Header/Header';
import { Link } from 'react-router-dom';

export default function SelectionPage(){
    
    useEffect(()=>{
        document.querySelector(".titlePage").innerHTML = "Pagina de Seleção"
    },[])

    const [buttons,setButtons] = useState([
        {color:'#0000ff',image:Update, textverb:'Update an register',to:'/updatepage'},
        {color:'#3385FF',image:Post, textverb:'Post an new register',to:'/postpage'},
        {color:'#B30000',image:Remove, textverb:'Remove an register',to:'/removepage'},
        {color:'#5CD65C',image:View, textverb:'View all registers',to:'/viewpage'}
    ]);

    return(
        <>
            <Header title="Choose an action"/>
            <main>
                {buttons.map((verbs,index)=>{
                    return (
                        <Link to={verbs.to} className="text-decoration-none" key={index}>
                            <VerbsWrapper id={index} Text={verbs.textverb}>
                                <BigButton color={verbs.color} image={verbs.image} />
                            </VerbsWrapper>
                        </Link>
                    );
                })}
            </main>
        </>
    );
}