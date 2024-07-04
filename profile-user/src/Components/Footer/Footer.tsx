import style from "./Footer.module.css";
import LogoIMG from "../../../public/logo.svg";

const Footer = () => {
    return (
        <footer className={style.container}>
            <img className={style.container__LogoImg} src={LogoIMG.src} alt="Logo" />
            <h2 className={style.container__title}>Contactanos en :</h2>
            <ul className={style.container__contactList}>
                <li>
                    <a href="email.com" className={style.container__link}>
                        Correo Electrónico
                    </a>
                </li>
                <li>
                    <a href="" className={style.container__link}>
                        Teléfono
                    </a>
                </li>
                <li>
                    <a href="contact" className={style.container__link}>
                        Formulario de Contacto
                    </a>
                </li>
            </ul>
            <p className={style.container__description}>
            © 2024 Your Company. All rights reserved.
            </p>
        </footer>
    )
}

export default Footer;