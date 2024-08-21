import { useSelector } from "react-redux";

//el useSelector sirve para seleccionar que reducer vamos autilizar
const Description = () => {
    const defaultState = useSelector(state => state.default); // con esto recuperamos todas las variables globales del reducer default
    return(
        <>
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <h5>
                ={defaultState.name}=
            </h5>
        </> 
    );
};
export default Description;