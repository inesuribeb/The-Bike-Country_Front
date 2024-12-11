import NavBar from '../../components/navbar/NavBar'
import LoginForm from './LoginForm'

function Login (){
    return (
        <>
            <header>
                <NavBar></NavBar>
            </header>
            
            <main>
                <LoginForm></LoginForm>
            </main>
        </>
    );
}

export default Login;