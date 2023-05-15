import styles from './css/Perfil.module.css';
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { IoLogoInstagram } from "react-icons/io";
import { SiGmail } from "react-icons/si";
// import {Link} from 'react-router-dom';

function Perfil({ foto, nome, sub }) {
    return (

        <div className={styles.perfil}>

            {/* <img className={styles.ftperfil} src={foto} height="120px" width="120px" /> */}
            <img className={styles.ftperfil}  src="eu.png" width="220px" height="220px"/>

            <h2>{nome}</h2>

            <h3>{sub}</h3>

            <div className={styles.icon1}>
                <a href="https://github.com/Kevelly13" target="_blank" rel="noopener" title="GitHub"> <AiFillGithub /> </a>
                <a href="https://www.linkedin.com/in/kevelly-oliveira/" target="_blank" rel="noopener" title="LinkedIn"> <AiFillLinkedin /> </a>
                <a href="https://www.instagram.com/kevelly.zz/" target="_blank" rel="noopener" title="Instagram"> <IoLogoInstagram /> </a>
                <a href="mailto:kevellyoliveira2@gmail.com?subject=Portifólio&body=Ol%C3%A1%20vi%20seu%20portif%C3%B3lio!" target="_blank"rel="noopener" title="Gmail"> <SiGmail /> </a>
            </div>
        </div>
    )
}
export default Perfil;