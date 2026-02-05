import { JSX } from "react";
import { Input, Textarea } from "@/components";

export default function Home(): JSX.Element {
    return (
        <>
            <Input placeholder="тест" />
            <Textarea placeholder="тест area" />
        </>
    );
}