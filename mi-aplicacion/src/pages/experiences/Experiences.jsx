import ExperiencesPacks from './ExperiencesPacks'
import Details from './Details'
import NavBar from '../../components/navbar/NavBar'
import './Experiences.css';


function Experiences() {
    return (
        <>
            <header>
                <NavBar></NavBar>
            </header>
            <section>

            </section>
            <main>
                <ExperiencesPacks></ExperiencesPacks>
                <Details></Details>
            </main>
        </>
    );
}

export default Experiences;

