
import Logo from './Default/_components/Logo'; 
import Description from './Default/_components/Description'; 
import OpenLink from '../components/OpenLink';
import LessonInfo from './Default/_components/LessonInfo';
import Contador from './Default/_components/Contador';

const Default = () => {

    return ( 
        <>
            <header className="App-header">
                    <Contador />
                    <Logo/> 
                    <Description/>
                    <OpenLink title="Lean React" url="https://reactjs.org" />
                    <OpenLink title="Mi proyecto React - Github" url="https://github.com/C354R-NRV/desarrollo-frontend-react" />
                    <LessonInfo numero="1" texto="Introducción a react y estructura de proyecto"/><br/>
                    <LessonInfo numero="2" texto="Context API para la gestión del estado global en aplicaciones react"/>                
            </header>
        </>

    );

};

export default Default;