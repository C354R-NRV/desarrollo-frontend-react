import {useState} from "react";
const useForm = (initialValues) => {
    const [values, setValue] = useState(initialValues); // variable de estado
    const handleChange = (event) =>{
        const {name, value} = event.target;
        setValue({
            ...values,
            [name]: value,
        });
    }
    const resetForm = () => {
        setValue(initialValues);
    };
    return [values, handleChange, resetForm];
};

export default useForm;