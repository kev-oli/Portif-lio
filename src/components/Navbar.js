import styles from './css/Navbar.module.css';

function Navbar({ nome }) {
    return (
        <div className={styles.navbar}>
                    <img src="logo.png" title="Portifólio" />

            <ul>
                <li><a href="#sobremim">Sobre Mim</a></li>
                <li><a href="#projetos">Portifólio</a></li>
                <li><a href="#educacao">Educação</a></li>
            </ul>
        </div>

    )
}
export default Navbar;