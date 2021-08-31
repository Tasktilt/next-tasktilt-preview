import styles from '../styles/Message.module.scss'

interface Props {
    color: string
    message: string
}

export default function Message({ color, message }: Props) {
    return (
        <span className={styles.message}>
            <p className={styles.message__title} style={{
                color: color
            }}>{message}</p>
        </span>
    )
}