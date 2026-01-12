import {Metadata} from "next";
import React from "react";
import {getPage} from "@/api/page";
import {getMenu} from "@/api/menu";
import {notFound} from "next/dist/client/components/not-found";
import {MenuItem} from "@/interfaces/menu.interface";
import {firstLevelCategory} from "@/helpers/helpers";
import {TopPageComponent} from "@/app/page-components";
import {getProducts} from "@/api/products";
import {TopLevelCategory} from "@/interfaces/page.interface";

export const metadata: Metadata = {
    title: "Страница"
};

// Типы параметров
interface TopPageParams {
    type: string;
    alias: string;
}

interface TopPageProps {
    params: Promise<TopPageParams>;
}

export async function generateStaticParams(): Promise<TopPageParams[]> {
    const params: TopPageParams[] = [];

    for (const flc of firstLevelCategory) {
        const menu: MenuItem[] = await getMenu(flc.id);
        params.concat(menu.flatMap(item => item.pages.map(page => ({type: flc.route, alias: page.alias}))));
    }
    return params;
}

export default async function TopPage({params}: TopPageProps) {
    const resolvedParams = await params;
    const firstCategory: TopLevelCategory | undefined = firstLevelCategory.find(category => category.route === resolvedParams.type)?.id;
    if (firstCategory === undefined) {
        notFound();
    }
    const page = await getPage(resolvedParams.alias);
    if (!page) {
        notFound();
    }
    const products = await getProducts(page.category, 10);

    return (
        <TopPageComponent firstCategory={firstCategory} page={page} products={products}/>
    );
}