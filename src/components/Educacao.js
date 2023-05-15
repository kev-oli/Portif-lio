import styles from './css/Educacao.module.css';
import { AiFillHtml5 } from "react-icons/ai";
import { SiCsharp } from "react-icons/si";
import { SiPhp } from "react-icons/si";

import { FaJava } from "react-icons/fa";
import { GrReactjs } from "react-icons/gr";
import { TbBrandReactNative } from "react-icons/tb";


function Educacao({ titulo3, escolas, titu1, subt1, titu2, subt2, titu3, subt3 }) {
    return (
        <div className={styles.educacao}>

            <div className={styles.titulo}>
                <h6>{titulo3}</h6>

                <div className={styles.titulo1}>
           
           </div>
            </div>

            <div className={styles.lados}>
                <div className={styles.lado1}>
                    <div className={styles.tempos}>
                        <p>HTML e CSS  <AiFillHtml5/></p>
                        <div className={styles.tempo1}>
                        </div>
                        <p>Csharp <SiCsharp/></p>
                        <div className={styles.tempo2}>
                        </div>
                        <p>PHP <SiPhp/> </p>
                        <div className={styles.tempo3}>
                        </div>
                        <p>JAVA <FaJava/></p>
                        <div className={styles.tempo4}>
                        </div>
                        <p>ReactJS <GrReactjs/></p>
                        <div className={styles.tempo5}>
                        </div>
                        <p>React Native<TbBrandReactNative/></p>
                        <div className={styles.tempo6}>
                        </div>
                    </div>
                </div>

                <div className={styles.lado2}>
                    <div className={styles.tl}>
                    <h5>{escolas}</h5>
                    </div>
                  
                    <div className={styles.e1}>
                    <h6>{titu1}</h6>
                    <p>{subt1}</p>
                    </div>
                  
                    <div className={styles.e2}>
                    <h6>{titu2}</h6>
                    <p>{subt2}</p>
                    </div>
                 
                    <div className={styles.e3}>
                    <h6>{titu3}</h6>
                    <p>{subt3}</p>
                    </div>
                

                </div>
            </div>

        </div>
    )
}
export default Educacao;