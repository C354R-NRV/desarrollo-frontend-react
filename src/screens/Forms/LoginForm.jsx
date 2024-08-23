import useForm from "../../hooks/useForm";
import { useSelector, useDispatch } from 'react-redux';
import { saveFormData, setLoggedIn , clearFormData} from "../../redux/form/formActions";
import { motion } from 'framer-motion';
import ModalInfo from "../../components/ModalInfo";
import { useState } from "react"; 

const LoginForm =() => {
    const [values, handleChange, resetForm] = useForm({username: '', email:'', password:''});
    const [showModalInfo, setShowModalInfo] = useState(false);  
    const [showModalLogout, setShowModalLogout] = useState(false);  

    const [showPassword, setShowPassword] = useState(false);

    const form = useSelector((state)  => state.form);
    const isLoggedIn = useSelector((state)  => state.form.isLoggedIn);
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault(); 
        console.log("form.passwordMaster:"+form.passwordMaster);
        console.log("values.password:"+values.password);
        if(form.passwordMaster === values.password){
            dispatch(saveFormData(values));
            dispatch(setLoggedIn(true)); 
        }else{ 
            setShowModalInfo(true);
        } 
    }; 
    const hideModalInfo = () => {
        setShowModalInfo(false);
    };
    const hideModalLogout = () => {
        setShowModalLogout(false);
    };
    const toggleShowPassword = () => {
        setShowPassword(prevShowPassword => !prevShowPassword);
    };
    const preLogout = () => {
        setShowModalLogout(true);
    }; 
    const logout = () => { 
        dispatch(setLoggedIn(false));  
        dispatch(clearFormData());
        resetForm();
        hideModalLogout();  
    };

    return( 
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            <ModalInfo 
                visible={showModalInfo}
                message="Password incorrecto"
                onClose={hideModalInfo}/>
            <ModalInfo 
                visible={showModalLogout}
                message={
                    <div>
                        Estas seguro de que quieres cerrar la sesión?
                        <button type="button" onClick={logout} className="btn-logout">
                            Presionar para salir!!!
                        </button>
                    </div>
                }
                onClose={hideModalLogout}/>

            < div className="container"> 
                <form onSubmit={handleSubmit}>
                    <h5>User: {form.formData.username}</h5>
                    <h5>Email: {form.formData.email}</h5>
                    <h5>Pass: {form.formData.password}</h5>
                    <hr/>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" id="username" 
                                value={values.username}
                                onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" 
                                value={values.email}
                                onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            type={showPassword ? "text" : "password"} // Condicional para mostrar/ocultar la contraseña
                            name="password"
                            id="password"
                            value={values.password}
                            onChange={handleChange}
                        />
                        <button type="button" onClick={toggleShowPassword} className="toggle-password">
                            {showPassword ? "Hide" : "Show"}
                        </button>
                    </div>

                    <div className="button-container">

                    <button type="submit">Submit</button>
                    {isLoggedIn && (
                        <button type="button"  onClick={preLogout}  className="btn-logout">
                                LogOut
                        </button>
                    )}
                    </div>
                </form> 
            </div> 

        </motion.div>
        
    );
};
export default LoginForm;