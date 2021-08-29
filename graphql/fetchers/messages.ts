import { request } from 'graphql-request'

export const createMessage = (query: any, variables: any) => request(process.env.API_ENDPOINT!, query, variables)
