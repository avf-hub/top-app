import {Metadata} from "next";
import {JSX} from "react";
import {Button, Htag} from "@/components";

export async function generateMetadata(): Promise<Metadata> {
    return {
        // ... Получение данных с backend
        title: "MyTop - Наш лучший топ",
        description: "MyTop by create next app"
    };
}

export default function Home(): JSX.Element {
    return (
        <>
            <Htag tag="h1">Тестовый текст</Htag>
            <Button appearance="primary" arrow="right">Кнопка primary</Button>
            <Button appearance="ghost" arrow="down">Кнопка ghost</Button>
        </>
    );
}
