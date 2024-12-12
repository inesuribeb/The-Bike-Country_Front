import NavBar from '../../components/navbar/NavBar'
import RegistrationForm from './RegistrationForm';

function Register (){
    return (
        <>
            <header>
                <NavBar></NavBar>
            </header>
            
            <main>
                <RegistrationForm></RegistrationForm>
            </main>
        </>
    );
}

export default Register;