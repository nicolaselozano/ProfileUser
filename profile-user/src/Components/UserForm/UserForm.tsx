"use client"
import { useState } from "react";
import style from "./UserForm.module.css";
import { ValidateForm } from "@/Services/Validation/ValidationsForm";

const UserForm = () => {

    const [formData, setFormData] = useState ({
        email:"",
        asunto:"",
        mensaje:"",
    });

    const [validateError, setValidateError] = useState({
        email:"",
        asunto:"",
        mensaje:"",
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        const validate = ValidateForm(event.target as HTMLInputElement);

        if (validate === true) {
            setFormData(prevState => ({
                ...prevState,
                [name]: value
            }));
            setValidateError(prevState => ({
                ...prevState,
                [name]: ""
            }));
        } else {
            setValidateError(prevState => ({
                ...prevState,
                [name]: validate as string
            }));
        }
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        let isValid = true;

        for (const key in validateError) {
            if (validateError[key].length > 1) isValid = false; 
        }

        if (isValid) {
            alert("Se Enviara el siguiente OBJ validado : "+JSON.stringify(formData));
            return formData;
        }
    }


    return (
        <div className={style.container}>
            <form onSubmit={handleSubmit} >
                <fieldset className={style.container__contact}>
                    <legend className={style.container__legend}>Contacto</legend>

                    <label htmlFor="email" className={style.container__label}>Correo electrónico:</label>
                    <input onChange={handleChange} type="email" id="email" name="email" required className={style.container__input}/>
                    {validateError.email ? <span>{validateError.email}</span>: <span></span>}

                    <label htmlFor="asunto" className={style.container__label}>Asunto:</label>
                    <input onChange={handleChange} type="text" id="asunto" name="asunto" required className={style.container__input}/>
                    {validateError.asunto ? <span>{validateError.asunto}</span>: <span></span>}

                    <label htmlFor="mensaje" className={style.container__label}>Mensaje:</label>
                    <textarea onChange={handleChange} id="mensaje" name="mensaje" rows={5} required className={style.container__textarea}></textarea>
                    {validateError.mensaje ? <span>{validateError.mensaje}</span>: <span></span>}

                    <button  type="submit" className={style.container__button}>Enviar</button>
                </fieldset>
            </form>
        </div>
    )

}

export default UserForm;