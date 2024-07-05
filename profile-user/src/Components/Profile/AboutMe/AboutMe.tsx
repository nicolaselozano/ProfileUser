import style from "./AboutMe.module.css";

const AboutMe = () => {

    return (
        <div className={style.container}>
            <h1 className={style.title}>Sobre Mi</h1>
            <p className={style.description}>
            Estudie en la UTN la Tecnicatura Universitaria en Programación, con un enfoque sólido en API REST, Java y Hibernate. Luego decidí mejorar mis habilidades tecnológicas y me sumergí en un bootcamp intensivo llamado "Henry", dónde me especialice en back-end NodeJs,Express y con herramientas de front como React, Redux, actualmente trabajo con .NET 8, C# en el back y NextJS, TypeScript, logrando hacer un proyecto web para mostrar mis logros y proyectos (Portafolio).
            </p>
            <h1> Mis herramientas son: </h1>
            <div className={`${style.container__welcoming_img}`}>
                        <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
                        <img src="https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=java&logoColor=white" alt="Java" />
                        <img src="https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white" alt="C#" />
                        <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
                        <img src="https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML" />
                        <img src="https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS" />
                        <img src="https://img.shields.io/badge/.NET-512BD4?style=for-the-badge&logo=.net&logoColor=white" alt=".NET" />
                        <img src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white" alt="Sequelize" />
                        <img src="https://img.shields.io/badge/Auth0-EB5424?style=for-the-badge&logo=auth0&logoColor=white" alt="Auth0" />
                        <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
                        <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
                        <img src="https://img.shields.io/badge/SQL-4479A1?style=for-the-badge&logo=sql&logoColor=white" alt="SQL" />
                        <img src="https://img.shields.io/badge/Postgres-336791?style=for-the-badge&logo=postgresql&logoColor=white" alt="Postgres" />
                        <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" alt="Postman" />
                        <img src="https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white" alt="Spring" />
                        <img src="https://img.shields.io/badge/Hibernate-59666C?style=for-the-badge&logo=hibernate&logoColor=white" alt="Hibernate" />
                    </div>
        </div>
    )

}

export default AboutMe;