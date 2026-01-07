import {Metadata} from "next";
import React, {JSX} from "react";
import {getPage} from "@/api/page";
import {notFound} from "next/dist/client/components/not-found";

export const metadata: Metadata = {
    title: "Страница"
};

export default async function PageProducts({params}: {params: {alias: string}}): Promise<JSX.Element> {
    const objParams = await params;
    const alias = await getPage(objParams.alias);
    if (!alias) {
        notFound();
    }
    return (
        <div>
            {alias.title}
        </div>
    );
}