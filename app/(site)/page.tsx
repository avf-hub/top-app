import { JSX } from "react";
import { Metadata } from "next";
import { Input, Textarea } from "@/components";
import { getPage } from "@/api/page";

export async function generateMetadata({ params }: { params: { alias: string } }): Promise<Metadata> {
    const page = await getPage(params.alias);
    return { title: page?.metaTitle };
};

export default function Home(): JSX.Element {
    return (
        <>
            <Input placeholder="тест" />
            <Textarea placeholder="тест area" />
        </>
    );
}