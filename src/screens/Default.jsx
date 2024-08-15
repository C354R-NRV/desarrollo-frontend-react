
import Logo from './_components/Logo'; 
import Description from './_components/Description'; 
import OpenLink from '../components/OpenLink';

const Default = () => {

    return ( 
        <>
            <header className="App-header">
                <Logo/> 
                <Description/>
                <OpenLink title="Lean React" url="https://reactjs.org" />
                <OpenLink title="Mi proyecto React - Github" url="https://github.com/C354R-NRV/desarrollo-frontend-react" />
                
                
            </header>
        </>

    );

};

export default Default;