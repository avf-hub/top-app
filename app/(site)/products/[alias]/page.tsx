import {Metadata} from "next";
import React, {JSX} from "react";

export const metadata: Metadata = {
    title: "Страница"
};

export default async function PageProducts({params}: {params: {alias: string}}): Promise<JSX.Element> {
    const objParams = await params;
    return (
        <div>
            Страница с alias: {objParams.alias}
        </div>
    );
}