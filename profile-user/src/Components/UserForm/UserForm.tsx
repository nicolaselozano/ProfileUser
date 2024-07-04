import style from "./UserForm.module.css";

const UserForm = () => {

    return (
        <div className={style.container}>
            <form>
                <fieldset className={style.container__contact}>
                    <legend className={style.container__legend}>Contacto</legend>

                    <label htmlFor="email" className={style.container__label}>Correo electrónico:</label>
                    <input type="email" id="email" name="email" required className={style.container__input}/>

                    <label htmlFor="asunto" className={style.container__label}>Asunto:</label>
                    <input type="text" id="asunto" name="asunto" required className={style.container__input}/>

                    <label htmlFor="mensaje" className={style.container__label}>Mensaje:</label>
                    <textarea id="mensaje" name="mensaje" rows={5} required className={style.container__textarea}></textarea>

                    <button type="submit" className={style.container__button}>Enviar</button>
                </fieldset>
            </form>
        </div>
    )

}

export default UserForm;