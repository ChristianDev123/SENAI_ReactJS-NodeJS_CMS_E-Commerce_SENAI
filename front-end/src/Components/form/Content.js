import { ContainerForm, Title, Form, Input, Label, Button, Situation } from './styledContent'
import Axios from 'axios'
import { useEffect, useState } from 'react';
import * as yup from 'yup'
import ReactLoading from 'react-loading';
import { useNavigate } from 'react-router-dom';
import { Switch } from '@mui/material';

export default function MainForm() {
    const [user, set_user] = useState({ user: "", pass: "", mat: "" });
    const [status, set_status] = useState({ type: '', message: '' })
    const [validateUser, set_ValidateUser] = useState(null);
    const [showPass,setShowPass] = useState(false);
    const navigate = useNavigate();

    async function VerifieUser(e){
        e.preventDefault();
        if (!await Validation()) return;
        Axios.post("https://crud-node-senai.herokuapp.com/userverification", user)
        .then(({data})=>{
            set_status({type:'sucess'})
            set_ValidateUser(data.user)
        })
        .catch((err)=>console.log("o erro foi" + err));

        if (status.type !== 'sucess') set_status({type:'failed',message:'Usuário, matrícula ou senha incorreta!'});
        
        set_user({user: '', pass: '', mat: ''});
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

    useEffect(()=>{
        if(validateUser) setTimeout(()=>(navigate('selection',{replace:true})),5000);
    },[validateUser])

    return (
        <>
            <ContainerForm className="px-2">
                <Title>Login - ControlDatabaseSystem</Title>
                <Form>
                    <Label htmlFor='user'>Usuário:</Label>
                    <Input name="user" value={user.user} onChange={(e)=>set_user((VA)=>{
                        return{...VA,user:e.target.value};
                    })} />
                    <Label htmlFor='pass'>Senha:</Label>
                    <div>
                        <Input type={showPass?"text":"password"} name="pass" value={user.pass} onChange={(e)=>set_user((VA)=>{
                            return{...VA,pass:e.target.value};
                        })} />
                        <Switch onClick={()=>setShowPass(!showPass)}/> Mostrar Senha ?
                    </div>
                    <Label htmlFor='mat'>Matrícula:</Label>
                    <Input name="mat" value={user.mat} onChange={(e)=>set_user((VA)=>{
                        return{...VA,mat:e.target.value};
                    })} />
                </Form>
                <Button onClick={(event)=>VerifieUser(event)}>Entrar</Button>
                {status.type === "error" && (<Situation style={{ color: "red" }}>{status.message}</Situation>)}
                {status.type === 'failed' && (<Situation style={{color:'red'}}>{status.message}</Situation>)}
                {validateUser? 
                    (<Situation style={{color: 'green'}}>Usuário Logado</Situation>) 
                    : 
                    (<Situation style={{color: "red"}}>{validateUser === null?'':'Usuário Incorreto'}</Situation>)
                }
                {validateUser && <ReactLoading type="spin" color="#D71709" height="50px" width="50px"/>}
            </ContainerForm>
        </>
    )
}