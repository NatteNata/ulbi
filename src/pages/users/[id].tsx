import { GetServerSideProps, GetServerSidePropsContext } from 'next';

export default function User({user}) {

     return (
        <>
            <h2>Пользователь с id {user.id}</h2>
            <strong>Their name is {user.name}</strong>
        </>
    )
}


export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
    const {id} = context.params;
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const user = await response.json()
    return {props: {user}}
}