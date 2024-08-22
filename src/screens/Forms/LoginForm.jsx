import useForm from "../../hooks/useForm";
import { useSelector, useDispatch } from 'react-redux';
import { saveFormData } from "../../redux/form/formActions";

const LoginForm =() => {
    const [values, handleChange] = useForm({username: '', email:''});
    const form = useSelector(state => state.form);
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(values);
        dispatch(saveFormData(values));
    };
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h5>User:{form.formData.username}</h5>
                <h5>Email:{form.formData.email}</h5>
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
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};
export default LoginForm;