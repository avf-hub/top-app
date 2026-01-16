import {JSX} from "react";
import {Metadata} from "next";
import {Input} from "@/components";

export const metadata: Metadata = {
    title: "Главная страница"
};

export default function Home(): JSX.Element {
    return (
        <>
            <Input placeholder="sadasdasd"/>
        </>
    );
}