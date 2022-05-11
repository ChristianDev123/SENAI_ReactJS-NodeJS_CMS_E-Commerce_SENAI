import { ContainerForm, Title, Form, Input, Label, SubText, Button, Situation } from './styledContent'
import Axios from 'axios'
import { useState } from 'react';
import * as yup from 'yup'
export default function MainForm() {
    const [user, set_user] = useState({ user: "", pass: "", mat: "" });
    const [status, set_status] = useState({ type: '', message: '' })
    const [validateUser, set_ValidateUser] = useState(false);
    
    async function VerifieUser(e){
        e.preventDefault();
        if (!await Validation()) return;
        Axios.post("http://localhost:3001/banco", {
            user: user.user,
            pass: user.pass,
            mat: user.mat
        })
        .then((response) => {set_ValidateUser(response.data.user)})
        .catch((err) => console.log("o erro foi" + err))
        const saveDataForm = true;
        if (saveDataForm) {
            set_status({
                type: "sucess",
            })
        }
        set_user({
            user: '',
            pass: '',
            mat: ''
        })
    }

    async function Validation() {
        let schema = yup.object().shape({
            mat: yup
                .string("ERRO: Necessário preencher todos os campos")
                .required("Necessário preencher o campo matricula!"),
            pass: yup
                .string("ERRO: Necessário preencher todos os campos")
                .required("Necessário preencher o campo senha!")
                .min(6, "Necessário a senha ter no minimo 6 caracteres"),
            user: yup
                .string("ERRO: Necessário preencher todos os campos")
                .required("Necessário preencher o campo usuário!"),
        });

        try{
            await schema.validate(user)
            return true;
        }catch(err){
            set_status({
                type: 'error',
                message: err.errors
            })
            return false;
        }
    }

    return (
        <>
            <ContainerForm>
                <Title>Login - ControlDatabaseSystem</Title>
                <Form>
                    <Label htmlFor='user'>Usuário:</Label>
                    <Input name="user" value={user.user} onChange={(e)=>set_user((VA)=>{
                        return{...VA,user:e.target.value};
                    })} />
                    <Label htmlFor='pass'>Senha:</Label>
                    <Input name="pass" value={user.pass} onChange={(e)=>set_user((VA)=>{
                        return{...VA,pass:e.target.value};
                    })} />
                    <Label htmlFor='mat'>Matrícula:</Label>
                    <Input name="mat" value={user.mat} onChange={(e)=>set_user((VA)=>{
                        return{...VA,mat:e.target.value};
                    })} />
                    <SubText>Esqueceu sua senha?</SubText>
                </Form>
                <Button onClick={VerifieUser}>Entrar</Button>
                {status.type === "error" && (<Situation style={{ color: "red" }}>{status.message}</Situation>)}
                {validateUser ===  true? 
                    (<Situation style={{color: 'green'}}>Usuário Logado</Situation>) 
                    : 
                    (<Situation style={{color: "red"}}>Usuário Incorreto</Situation>)
                }
            </ContainerForm>
        </>
    )
}