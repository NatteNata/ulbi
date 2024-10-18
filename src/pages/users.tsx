import A from "../components/A";
import {Context} from "node:vm";

type User = {
    id: number
    name: string
}

export default function Users({users}: Context) {

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

export async function getStaticProps() {

    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()

    return {
        props: {
            users,
        },
    }
}