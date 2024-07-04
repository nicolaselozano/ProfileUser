import style from "./AboutMe.module.css";

const AboutMe = () => {

    return (
        <div className={style.container}>
            <h1 className={style.title}>Sobre Mi</h1>
            <p className={style.description}>
            Me gusta resolver los desafíos en el área de programación, y mi compromiso con la actualización constante me lleva a explorar las últimas tecnologías. Mis herramientas son NodeJS, .NET, C#, JAVA, Docker, Spring, Typescript, HTML, CSS, ORMs como Hibernate y Sequelize, ReactJs, NextJS.
            </p>
        </div>
    )

}

export default AboutMe;