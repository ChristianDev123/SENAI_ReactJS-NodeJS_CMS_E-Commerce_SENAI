import { Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import { Global } from './Styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { DarkTheme, LightTheme } from './Styles/theme';
import { useState } from "react";
import SelectionPage from "./Pages/SelectionPage";

export default function App(){
  const [isDark,setIsDark] = useState(false);
  return(
    <>
    <ThemeProvider theme={isDark?DarkTheme:LightTheme}>
      <Global />
      <Routes>
        <Route path='/' element={<LoginPage changeTheme={setIsDark} currentTheme={isDark}/>} />
        <Route path="/selection" element={<SelectionPage changeTheme={setIsDark} currentTheme={isDark}/>} />
        {/* <Route element={} /> */}
      </Routes>
    </ThemeProvider>
    </>
  );
}