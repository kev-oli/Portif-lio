import styles from './css/Projetos.module.css';

function Projetos({ titulo2, t1, s1, s2, t2, t3, s3 }) {
    return (
        <div className={styles.projetos}>

            <div className={styles.titulo}>
                <h5>{titulo2}</h5>
            </div>
            <div className={styles.container}>

                <div className={styles.container1}>
                    <br />
                    <img src="container1.png" width="220px" height="100px" title="Locadora" />
                    <h1>{t1}</h1>
                    <br />
                    <p>{s1}</p>
                    <br /> <br /><br />  <hr />
                    <a href="https://github.com/kev-oli/Projeto-Locadora.git" target="_blank" rel="noopener"> Acesse no github </a>
                </div>

                <div className={styles.container2}>
                    <br />
                    <img src="container2.png" width="100px" height="100px" title="CRUD PHP" />
                    <h1>{t2}</h1>
                    <br />
                    <p>{s2}</p>
                    <br /> <br />  <hr />
                    <a href="https://github.com/kev-oli/CRUD-PHP.git" target="_blank" rel="noopener"> Acesse no github </a>

                </div>

                <div className={styles.container3}>
                    <br />
                    <img src="logo.png" width="120px" height="120px" title="Portifólio" />

                    <h1>{t3}</h1>
                    <br />
                    <p>{s3}</p>
                    <br /> <br /><br /> 
                    
                     {/* <hr /> */}
                    {/* <a href="https://github.com/Kevelly13" target="_blank" rel="noopener"> Acesse no github </a> */}

                </div>

            </div>
        </div>
    )
}
export default Projetos;