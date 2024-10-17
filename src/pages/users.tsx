import Link from "next/link";

type User = {
    id: number
    name: string
}

const users: User[] = [
    {id: 1, name: 'Helen'},
    {id: 2, name: 'Mathew'},
]

export default function Users() {
    return (
        <>
            <div>
                Пользователи
            </div>
            <ul>
                {users.map(user =>
                    <li><Link href={`/users/${user.id}`}>{user.name}</Link></li>)}
            </ul>
        </>
    );
};