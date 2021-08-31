import { FormEvent, useState } from 'react'
import { createMessage } from '../graphql/fetchers/messages'
import { CREATE_MESSAGE_MUTATION } from '../graphql/queries/messages'
import styles from '../styles/Subscribe.module.scss'
import Anchor from './Anchor'
import Message from './Error'

export default function Subscribe() {
    const [email, setEmail] = useState<string>()
    const [error, setError] = useState<string>()
    const [isSent, setIsSent] = useState(false)

    // Function that renders the UI based on the state.
    const renderForm = () => {
        return !isSent ? (
            <form onSubmit={(event) => submitForm(event)}> 
                <input placeholder='you@domain.com' onChange={(event) => setEmail(event.target.value)}></input>
                <button>Keep Me Informed</button>
            </form>
        ) : (
            <Message color='#047857' message='Thanks for subscribing!' />    
        )
    }

    // Function that handles the submission of the form.
    const submitForm = async (event: FormEvent) => {
        event.preventDefault()
        try {
            const response = await createMessage(CREATE_MESSAGE_MUTATION, { message: { email }})
            if (response) {
                setError(undefined)
                setIsSent(true)
            }
        } catch(error: any) {
            setError(error.response.errors[0].message)
        }
    }

    return (
        <span className={styles.subscribe}>
            {error && <Message color='#dc2618' message={error} />}
            {renderForm()}
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