import style from "../Profile/AboutMe/AboutMe.module.css";

const Interest = () => {

    return (
        <div className={style.container}>
            <h1 className={style.title}>Intereses</h1>
            <div className={style.container__welcoming_img}>
                <ul>
                    <li className={style.description}>Me gusta resolver los desafíos en el área de programación, y mi compromiso con la actualización constante me lleva a explorar las últimas tecnologías. </li>
                    <li className={style.description}>Además de mi dedicación al código, disfruto siendo parte de la comunidad tecnológica, donde la colaboración y el intercambio de conocimientos son fundamentales.</li>
                    <li className={style.description}>La principal razón por la que elegí este camino es el proceso de superar desafíos y encontrar soluciones creativas.</li>
                </ul>
            </div>
        </div>
    )

}

export default Interest;