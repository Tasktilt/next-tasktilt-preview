import Logo from './Logo'
import styles from '../styles/Header.module.scss'

export default function Header() {
    return (
        <header className={styles.header}>
            <Logo />
        </header>
    )
}