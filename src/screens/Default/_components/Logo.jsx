import logo from '../../../logo.svg';
import { useSelector } from "react-redux";

const Logo = () => {
    const defaultState = useSelector(state => state.default); // con esto recuperamos todas las variables globales del reducer default
    return( 
        <>
        <img src={logo} className="App-logo" alt="logo" />
            <h1>
                {defaultState.name}
            </h1>
        </>
    );
};
export default Logo;