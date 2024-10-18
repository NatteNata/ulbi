import {useEffect, useState} from "react";
import A from "../components/A";

type User = {
    id: number
    name: string
}

export default function Users() {

    const [users, setUsers] = useState<User[]>([
        {id: 1, name: 'Helen'},
        {id: 2, name: 'Mathew'},
    ])

    useEffect(() => {

        const getData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users')
                const data = await response.json()
                setUsers(data)
            } catch (error) {
                console.log(`YOU've got some error on your hands!`)
            }
        }
        getData()
    }, []);

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