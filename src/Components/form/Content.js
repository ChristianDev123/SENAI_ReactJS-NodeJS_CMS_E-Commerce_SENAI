import {ContainerForm, Title, Form, Input, Label, SubText, Button} from './styledContent'
export default function MainForm(){
 return(
     <>
            <ContainerForm>
                    <Title>Login - ControlDatabaseSystem</Title>
                    <Form>
                        <Label htmlFor='user'>Usuário:</Label>
                        <Input name="user"></Input>

                        <Label htmlFor='pass'>Senha:</Label>
                        <Input name="user"></Input>

                        <Label htmlFor='mat'>Matrícula:</Label>
                        <Input name="mat"></Input>
                        <SubText>Esqueceu sua senha?</SubText>
                        
                    </Form>
                    <Button>Entrar</Button>
            </ContainerForm>
     
     
     </>
 )   
}