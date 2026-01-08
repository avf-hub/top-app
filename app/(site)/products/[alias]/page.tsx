import {Metadata} from "next";
import React from "react";
import {getPage} from "@/api/page";
import {getMenu} from "@/api/menu";
import {notFound} from "next/dist/client/components/not-found";
import {MenuItem} from "@/interfaces/menu.interface";

export const metadata: Metadata = {
    title: "Страница"
};

export async function generateStaticParams(): Promise<{alias: string}[]> {
    const menu: MenuItem[] = await getMenu(0);
    return menu.flatMap(item => item.pages.map(page => ({alias: page.alias})));
}

export default async function PageProducts({params}: {params: {alias: string}}) {
    const resolvedParams = await params;
    const alias = await getPage(resolvedParams.alias);
    if (!alias) {
        notFound();
    }
    return (
        <div>
            {alias.title}
        </div>
    );
}