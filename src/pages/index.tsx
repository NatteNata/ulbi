import A from "../components/A";

export default function Index() {
    return (
        <>
            <nav>
                <ul>
                    <A href={'/'} text={'Главная'}/>
                    <A href={'/users'} text={'Пользователи'}/>
                </ul>
            </nav>
            <h1>
                Главная страница
            </h1>
        </>
    );
};