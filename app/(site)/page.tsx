import {JSX} from "react";
import {Metadata} from "next";
import styles from "@/app/(site)/page.module.css";
import {Header} from "@/app/(site)/components/Header/Header";
import {Sidebar} from "@/app/(site)/components/Sidebar/Sidebar";
import {Footer} from "@/app/(site)/components/Footer/Footer";
import {Menu} from "@/app/(site)/components/Menu/Menu";

export const metadata: Metadata = {
    title: "Главная страница"
};

export default function Home(): JSX.Element {
    return (
        <div className={styles.wrapper}>
            <Header className={styles.header}/>
            <Sidebar className={styles.sidebar}/>
            <div className={styles.body}>
                Главная страница
                <Menu />
            </div>
            <Footer className={styles.footer}/>
        </div>
    );
}
