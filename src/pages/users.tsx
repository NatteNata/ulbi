import A from "../components/A";
import {GetStaticProps} from 'next'

type User = {
    id: number
    name: string
}

type UsersProps = {
    users: User[]
}

export default function Users({users}: UsersProps) {

    return (
        <>
            <h1>
                Пользователи
            </h1>
            <ul>
                {users.map(user =>
                    <li key={user.id}>
                        <A href={`/users/${user.id}`} text={user.name}/>
                    </li>
                )}
            </ul>
        </>
    );
};

export const getStaticProps: GetStaticProps<UsersProps> = async () => {

    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()

    return {
        props: {
            users,
        },
    }
}