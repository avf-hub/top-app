import {Metadata} from "next";
import {JSX} from "react";
import {Htag} from "@/components";

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
            <Htag tag="h1">Text test</Htag>
        </>
    );
}
