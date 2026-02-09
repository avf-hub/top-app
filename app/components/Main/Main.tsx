"use client";

import { JSX, KeyboardEvent, useRef, useState } from "react";
import styles from "./Main.module.css";
import { Header } from "@/app/components/Header/Header";
import { Sidebar } from "@/app/components/Sidebar/Sidebar";
import { Footer } from "@/app/components/Footer/Footer";
import cn from "classnames";
import { Up } from "@/components";
import { MainProps } from "@/app/components/Main/Main.props";

export const Main = ({ children, className, ...props }: MainProps): JSX.Element => {
    const [isSkipLinkDisplayed, setIsSkipLinkDisplayed] = useState<boolean>(false);
    const bodyRef = useRef<HTMLDivElement>(null);

    const skipContentAction = (key: KeyboardEvent) => {
        if (key.code == "Space" || key.code == "Enter") {
            key.preventDefault();
            bodyRef.current?.focus();
        }
        setIsSkipLinkDisplayed(false);
    };

    return (
        <div className={cn(className, styles.wrapper)} {...props}>
            <a
                onFocus={() => setIsSkipLinkDisplayed(true)}
                tabIndex={0}
                className={cn(styles.skipLink, {
                    [styles.displayed]: isSkipLinkDisplayed
                })}
                onKeyDown={skipContentAction}
            >Сразу к содержанию</a>
            <Header className={styles.header} />
            <Sidebar className={styles.sidebar} />
            <main className={styles.body} ref={bodyRef} tabIndex={0} role="main">
                {children}
            </main>
            <Footer className={styles.footer} />
            <Up />
        </div>
    );
}