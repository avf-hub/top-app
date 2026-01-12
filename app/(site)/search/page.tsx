import {Metadata} from "next";
import {JSX} from "react";

export const metadata: Metadata = {
    title: "Страница поиска",
    description: "Страница найденных данных по строке поиска"
};

export default function Page(): JSX.Element {
    return (
        <>
            Страница поиска
        </>
    );
}