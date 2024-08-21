import {useState, useEffect} from "react"; 

const Contador = () => {

    const [contador, setContador] = useState(10); // permite manejar valiables de estado de uso lobal

    const handleContador = () => {
        setContador(contador+1);
    };
    const handleContador2 = () => {
        setContador(contador-1);
    };
    //esta funcion especial se ejecuta cuando el componente se haya montado
    useEffect(()=>{
        setContador(12);
    },[]);
    //esta funcion especial se ejecuta cuando haya cambiado el valor de contador
    useEffect(()=>{
        if(contador === 15){
            alert("Contador es 15");
        }
    },[contador]);

    //esta funcion se ejecuta cuando el componente se desmonta
    useEffect(()=>{
        return() =>{
            console.log('El componente se desmonto');
        }
    });

    return (
        <>
            <h4>Componente Contador</h4>
            <h3>{contador}</h3>
            <div>
            <button onClick={handleContador2}>Disminuir</button> | <button onClick={handleContador}>Aumentar</button>
            </div>
        </>
    );
};
export default Contador;