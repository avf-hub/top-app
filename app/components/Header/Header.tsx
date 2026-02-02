"use client";

import { JSX, useEffect, useState } from "react";
import { HeaderProps } from "@/app/components/Header/Header.props";
import cn from "classnames";
import styles from "./Header.module.css";
import Logo from "@/app/logo.svg";
import { ButtonIcon } from "@/components";
import { motion, useReducedMotion } from "framer-motion";
import { Sidebar } from "@/app/components/Sidebar/Sidebar";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
    const [isOpened, setIsOpened] = useState<boolean>(false);
    const shouldReduceMotion: boolean | null = useReducedMotion();
    const router: AppRouterInstance = useRouter();

    useEffect(() => {
        setIsOpened(false);
    }, [router]);

    const variants = {
        opened: {
            opacity: 1,
            x: 0,
            transition: {
                stiffness: 20
            }
        },
        closed: {
            opacity: shouldReduceMotion ? 1 : 0,
            x: "100%"
        }
    };

    return (
        <header className={cn(className, styles.header)} {...props}>
            <Logo />
            <ButtonIcon icon="menu" appearance="white" onClick={() => setIsOpened(true)} />
            <motion.div
                className={styles.mobileMenu}
                variants={variants}
                initial="closed"
                animate={isOpened ? "opened" : "closed"}
            >
                <Sidebar />
                <ButtonIcon className={styles.menuClose} icon="close" appearance="white"
                    onClick={() => setIsOpened(false)} />
            </motion.div>
        </header>
    );
}