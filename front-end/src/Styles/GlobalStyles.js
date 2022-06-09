import {createGlobalStyle} from 'styled-components';

export const Global = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html,body,#root{
        width:100vw;
        height:100vh;
        background-color:var(--default-color-form);
    }
    :root{
        --primary-color:#D71709;
        --dark-color_900:#131112;
        --dark-color_800:#102E4AB2;
        --dark-color_700:#102E4A99;
        --dark-color_600:#102E4A66;
        --detail-line:#586D81;
        --bk-color:#fff;
        --default-color-form:#F4F4F9;
        --main-font:font-family: Damion;
    }
`;

