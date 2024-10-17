import Link from "next/link";

export default function Index() {
    return (
        <>
            <nav>
                <ul>
                    <Link href={'/'}>Главная</Link>
                    <Link href={'/users'}>Пользователи</Link>
                </ul>
            </nav>
            <div>
                главная страница
            </div>
        </>
    );
};