export const CREATE_MESSAGE_MUTATION = /* GraphQL */ `
    mutation($message: MessageInput!) {
        createMessage(message: $message)
    }
`

