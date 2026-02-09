import { Metadata } from "next";
import { firstLevelCategory } from "@/helpers/helpers";
import { notFound } from "next/dist/client/components/not-found";

export const metadata: Metadata = {
    title: "Страница категории"
};

interface PageParam {
    type: string;
}

interface PageProps {
    params: Promise<PageParam>;
}

export async function generateStaticParams(): Promise<PageParam[]> {
    const params: PageParam[] = [];
    firstLevelCategory.forEach(flc => params.push({ type: flc.route }));
    return params;
}

export default async function PageProducts({ params }: PageProps) {
    const resolvedParam = await params;
    if (!resolvedParam) {
        notFound();
    }
    return (
        <div>
            TYPE: {resolvedParam.type}
        </div>
    );
}