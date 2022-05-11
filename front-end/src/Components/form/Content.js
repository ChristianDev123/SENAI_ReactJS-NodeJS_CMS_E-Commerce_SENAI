import { ContainerForm, Title, Form, Input, Label, SubText, Button, Situation } from './styledContent'
import Axios from 'axios'
import { useState } from 'react';
import * as yup from 'yup'
export default function MainForm() {

    const [user, set_user] = useState({
        user: "",
        pass: "",
        mat: "",
    });
    const [status, set_status] = useState({
        type: '',
        message: ''
    })
    const ValueInput = e => set_user({ ...user, [e.target.name]: e.target.value })
    const [ValidateUser, set_ValidateUser] = useState();

    const VerifieUser = async e => {
        e.preventDefault();
        if (!await Validation()) return;

        Axios.post("http://localhost:3001/banco", {
            user: user.user,
            pass: user.pass,
            mat: user.mat
        }).then((response) => {set_ValidateUser(response.data.user) })
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
        try {
            await schema.validate(user)
            return true;
        }
        catch (err) {
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
                    <Input name="user" onChange={(e) => ValueInput(e)} />
                    <Label htmlFor='pass'>Senha:</Label>
                    <Input name="pass" onChange={(e) => ValueInput(e)} />
                    <Label htmlFor='mat'>Matrícula:</Label>
                    <Input name="mat" onChange={(e) => ValueInput(e)} />
                    <SubText>Esqueceu sua senha?</SubText>
                </Form>
                <Button onClick={VerifieUser}>Entrar</Button>
                {status.type === "error" ? (
                    <Situation style={{ color: "red" }}>{status.message}</Situation>
                ) : ""}

                {ValidateUser ===  "True"? (<Situation style={{color: 'green'}}>Usuário Logado</Situation>) : ""}

                {ValidateUser === "false" ? (<Situation style={{color: "red"}}>Usuário Incorreto</Situation>) : ""}
            </ContainerForm>
        </>
    )
}