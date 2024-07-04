import cameraIMG from "../../../public/camera_icon.svg";
import style from "./DescriptionP.module.css";

const DescriptionP = () => {

    return (
        <div className={style.container}>
            <h1>Mi perfil</h1>
            <div className={style.container__Profile}>
                <div className={style.container__BackProfile}>
                    <h2>Nombre del Usuario</h2>
                </div>
                
                <div className={style.container__ProfileImg}>
                    <h2>Profile Img</h2>
                    <div>
                        <img src={cameraIMG.src} alt="camera Image" />
                    </div>
                </div>
            </div>

        </div>
    );
    
}

export default DescriptionP;