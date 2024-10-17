import {useRouter} from "next/router";

export default function User() {

    const {query} = useRouter();

    return (
        <>
            <h2>Пользователь с id {query.id}</h2>
            <strong>Their name is </strong>
        </>
    )
}