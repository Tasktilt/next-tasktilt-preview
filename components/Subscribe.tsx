import { FormEvent, useState } from 'react'
import { createMessage } from '../graphql/fetchers/messages'
import { CREATE_MESSAGE_MUTATION } from '../graphql/queries/messages'
import styles from '../styles/Subscribe.module.scss'
import Anchor from './Anchor'

export default function Subscribe() {
    const [email, setEmail] = useState<String>()

    const submitForm = async (event: FormEvent) => {
        event.preventDefault()
        const object = { email }
        try {
            const response = await createMessage(CREATE_MESSAGE_MUTATION, { message: object })
            if (response) {
                console.log(response)
            }
        } catch(error: any) {
            console.log(error.response.errors[0].message)
        }
    }

    return (
        <span className={styles.subscribe}>
            <form onSubmit={(event) => submitForm(event)}> 
                <input placeholder='you@domain.com' onChange={(event) => setEmail(event.target.value)}></input>
                <button>Keep Me Informed</button>
            </form>
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