import {JSX} from "react";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Главная страница"
};

export default function Home(): JSX.Element {
    return (
        <>
            Главная страница
        </>
    );
}