import {Metadata} from "next";
import {Noto_Sans_KR} from "next/font/google";
import '../globals.css';

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

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="ru">
            <body className={notoSansKR.className}>
            <div>Авторизация</div>
            {children}
            </body>
        </html>
    );
}