
import Logo from './_components/Logo'; 
import Description from './_components/Description'; 
import OpenLink from '../components/OpenLink';
import LessonInfo from './_components/LessonInfo';

const Default = () => {

    return ( 
        <>
            <header className="App-header">
                <div>
                    <Logo/> 
                    <Description/>
                    <OpenLink title="Lean React" url="https://reactjs.org" />
                    <OpenLink title="Mi proyecto React - Github" url="https://github.com/C354R-NRV/desarrollo-frontend-react" />
                    <LessonInfo numero="1" texto="Introducción a react y estructura de proyecto"/><br/>
                    <LessonInfo numero="2" texto="Context API para la gestión del estado global en aplicaciones react"/>
                </div>
                
            </header>
        </>

    );

};

export default Default;