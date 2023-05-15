import styles from './css/Sobremim.module.css';

function Sobremim({ titulo, texto }) {
    return (
        <div className={styles.sobremim}>

            <h4>{titulo}</h4>

            <p>{texto}</p>

        </div>
    )
}
export default Sobremim;