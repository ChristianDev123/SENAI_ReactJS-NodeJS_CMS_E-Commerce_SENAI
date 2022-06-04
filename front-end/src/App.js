import { Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import { Global } from './Styles/GlobalStyles';
import SelectionPage from "./Pages/SelectionPage";
import PostManagementPage from "./Pages/PostManagementPage";
import UpdateManagementPage from "./Pages/UpdatePage";
import ViewPage from "./Pages/ViewPage";
import DeletePage from "./Pages/DeletePage";

export default function App(){
  return(
    <>
      <Global />
      <Routes>
        <Route path='/' element={<LoginPage/>} />
        <Route path="/selection" element={<SelectionPage/>} />
        <Route path="/postpage" element={<PostManagementPage/>} />
        <Route path="/updatepage" element={<UpdateManagementPage/>} />
        <Route path="/viewpage" element={<ViewPage/>} />
        <Route path="/removepage" element={<DeletePage/>} />
      </Routes>
    </>
  );
}