import { gql } from '@urql/next'

export const IssuesQuery = gql`
  query IssuesQuery {
    issues {
      content
      createdAt
      id
      name
      status
    }
  }
`
