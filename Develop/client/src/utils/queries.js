import gql from '@apollo/client';
// GET_ME query
// create GET_ME component that represents the submissions for for the book search selection. Inside we create our GET_ME mutation 
export const GET_ME = gql`
{
    me {
        _id
        username
        email
        bookCount
        savedBooks{
            bookId
            authors
            description
            title
            link
            image
        }
    }
}
`;