import { Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import { Global } from './Styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { DarkTheme, LightTheme } from './Styles/theme';
import { useState } from "react";
import SelectionPage from "./Pages/SelectionPage";
import PostManagementPage from "./Pages/PostManagementPage";
import UpdateManagementPage from "./Pages/UpdatePage";
import ViewPage from "./Pages/ViewPage";
import DeletePage from "./Pages/DeletePage";

export default function App(){
  const [isDark,setIsDark] = useState(false);
  return(
    <>
    <ThemeProvider theme={isDark?DarkTheme:LightTheme}>
      <Global />
      <Routes>
        <Route path='/' element={<LoginPage changeTheme={setIsDark} currentTheme={isDark}/>} />
        <Route path="/selection" element={<SelectionPage changeTheme={setIsDark} currentTheme={isDark}/>} />
        <Route path="/postpage" element={<PostManagementPage changeTheme={setIsDark} currentTheme={isDark}/>} />
        <Route path="/updatepage" element={<UpdateManagementPage changeTheme={setIsDark} currentTheme={isDark}/>} />
        <Route path="/viewpage" element={<ViewPage changeTheme={setIsDark} currentTheme={isDark}/>} />
        <Route path="/removepage" element={<DeletePage changeTheme={setIsDark} currentTheme={isDark}/>} />
      </Routes>
    </ThemeProvider>
    </>
  );
}