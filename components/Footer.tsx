import moment from 'moment'
import styles from '../styles/Footer.module.scss'
import Logo from './Logo'

export default function Footer()  {
    return (
        <footer className={styles.footer}>
            <Logo />
            <span className={styles.footer__trailing}>
                <p>Tasktilt is a SanderVreeken production</p>
                <p>KvK 83723803, BTW NL003862848B17</p>
                <p>info@sandervreeken.com</p>
                <p>{`Enjoy the rest of your ${moment().format('dddd')}!`}</p>
            </span>
        </footer>
    )
}