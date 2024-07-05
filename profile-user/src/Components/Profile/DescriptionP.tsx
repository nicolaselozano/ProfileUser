"use client"
import cameraIMG from "../../../public/camera_icon.svg";
import style from "./DescriptionP.module.css";
import ExampleUserIMG from "../../../public/pfp1.png";
import { useEffect, useState } from "react";

const DescriptionP = () => {

    const [UserImg,setUserImg] = useState<string>("");

    useEffect(() => {

        setUserImg(ExampleUserIMG.src);

    },[])

    return (
        <div className={style.container}>
            <h1>Mi perfil</h1>
            <div className={style.container__Profile}>
                <div className={style.container__BackProfile}>
                    <h2>Nicolás Lozano</h2>
                </div>
                
                <div className={style.container__ProfileImg}>
                    <img className={style.container__UserImg} src={UserImg} alt="Profile Img" />
                    <div>
                        <img className={style.container__ProfileImg_Cam} src={cameraIMG.src} alt="camera Image" />
                    </div>
                </div>
            </div>

        </div>
    );
    
}

export default DescriptionP;