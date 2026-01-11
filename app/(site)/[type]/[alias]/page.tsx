import {Metadata} from "next";
import React from "react";
import {getPage} from "@/api/page";
import {getMenu} from "@/api/menu";
import {notFound} from "next/dist/client/components/not-found";
import {MenuItem} from "@/interfaces/menu.interface";
import {firstLevelCategory} from "@/helpers/helpers";

export const metadata: Metadata = {
    title: "Страница"
};

// Типы параметров
interface PageParams {
    type: string;
    alias: string;
}

interface PageProps {
    params: Promise<PageParams>;
}

export async function generateStaticParams(): Promise<PageParams[]> {
    const params: PageParams[] = [];

    for (const flc of firstLevelCategory) {
        const menu: MenuItem[] = await getMenu(flc.id);
        params.concat(menu.flatMap(item => item.pages.map(page => ({type: flc.route, alias: page.alias}))));
    }
    return params;
}

export default async function PageProducts({params}: PageProps) {
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