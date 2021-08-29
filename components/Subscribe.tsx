import styles from '../styles/Subscribe.module.scss'
import Anchor from './Anchor'

export default function Subscribe() {
    return (
        <span className={styles.subscribe}>
            <input placeholder='you@domain.com'></input>
            <button>Keep Me Informed</button>
            <p>Your email will be used for Tasktilt only!</p>
            <span>
                <p>Want to support the project?</p>
                <Anchor href='https://www.buymeacoffee.com/SanderVreeken'>
                    <p>Click here to buy me a coffee.</p>
                </Anchor>
            </span>
        </span>
    )
}