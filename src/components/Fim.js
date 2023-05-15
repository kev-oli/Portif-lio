import styles from './css/Fim.module.css';
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { IoLogoInstagram } from "react-icons/io";
import { SiGmail } from "react-icons/si";
function Fim({ nome, texto }) {
    return (
        <div className={styles.fim}>
            <h1>{nome}</h1>
            <p>{texto}</p>
            <div className={styles.icon2}>
                <a href="https://github.com/Kevelly13" rel="noreferrer" target="_blank"  title="GitHub"> <AiFillGithub /> </a>
                <a href="https://www.linkedin.com/in/kevelly-oliveira/" rel="noreferrer" target="_blank" title="LinkedIn"> <AiFillLinkedin /> </a>
                <a href="https://www.instagram.com/kevelly.zz/" rel="noreferrer" target="_blank" title="Instagram"> <IoLogoInstagram /> </a>
                <a href="kevellyoliveira2@gmail.com" rel="noreferrer" target="_blank" title="Gmail"> <SiGmail /> </a>
            </div>

            <div className={styles.button1}>

            <a href="https://www.canva.com/design/DAFgFYeuEF0/Ma2BgknkxdGyUD7zL9Z8lA/view?utm_content=DAFgFYeuEF0&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" target='_blank'>
            <button type="button" href='https://www.freecodecamp.org/'>Saiba mais</button>
            </a>
          
            </div>
            <div className={styles.fimm}>
                <span className="copyright"> &copy; 2022 - 2023 Kevelly Mendes de Oliveira </span>
            </div>
        </div>
    )
}
export default Fim;