import "../globals.css";
import { Noto_Sans_KR } from "next/font/google";
import { AppContextProvider } from "@/context/app.context";
import { getMenu } from "@/api/menu";
import { TopLevelCategory } from "@/interfaces/page.interface";
import { Metadata } from "next";
import { Main } from "@/app/components/Main/Main";

export async function generateMetadata(): Promise<Metadata> {
    return {
        // ... Получение данных с backend
        title: "MyTop - Наш лучший топ",
        description: "MyTop by create next app",
        openGraph: {
            locale: "ru-RU",
            url: "/"
        }
    };
}

const notoSansKR = Noto_Sans_KR({
    subsets: ["cyrillic"],
    weight: ["300", "400", "500", "700"],
    display: "swap"
});

export default async function RootLayout({ children }: { children: React.ReactNode }) {

    const firstCategory: number = TopLevelCategory.Courses;
    const menu = await getMenu(firstCategory);

    return (
        <html lang="ru">
            <body className={notoSansKR.className}>
                <AppContextProvider menu={menu} firstCategory={firstCategory}>
                    <Main children={children} />
                </AppContextProvider>
            </body>
        </html>
    );
}
