import "../globals.css";
import {Noto_Sans_KR} from "next/font/google";
import {Metadata} from "next";
import styles from "@/app/(site)/layout.module.css";
import {Header} from "@/app/components/Header/Header";
import {Sidebar} from "@/app/components/Sidebar/Sidebar";
import {Footer} from "@/app/components/Footer/Footer";
import {AppContextProvider} from "@/context/app.context";
import {getMenu} from "@/api/menu";
import {TopLevelCategory} from "@/interfaces/page.interface";
import {Up} from "@/components";

export async function generateMetadata(): Promise<Metadata> {
    return {
        // ... Получение данных с backend
        title: "MyTop - Наш лучший топ",
        description: "MyTop by create next app"
    };
}

const notoSansKR = Noto_Sans_KR({
    subsets: ["cyrillic"],
    weight: ["300", "400", "500", "700"],
    display: "swap"
});

export default async function RootLayout({children}: { children: React.ReactNode }) {
    const firstCategory: number = TopLevelCategory.Courses;
    const menu = await getMenu(firstCategory);
    return (
        <html lang="ru">
        <body className={notoSansKR.className}>
        <AppContextProvider menu={menu} firstCategory={firstCategory}>
            <div className={styles.wrapper}>
                <Header className={styles.header}/>
                <Sidebar className={styles.sidebar}/>
                <div className={styles.body}>
                    {children}
                </div>
                <Footer className={styles.footer}/>
                <Up/>
            </div>
        </AppContextProvider>
        </body>
        </html>
    );
}
