"use client";

import {JSX, useEffect} from "react";
import styles from "./Up.module.css";
import UpIcon from "./up.svg";
import {useScrollY} from "@/hooks/useScrollY";
import {motion, useAnimation} from "framer-motion";

export const Up = (): JSX.Element => {
    const controls = useAnimation();
    const y: number = useScrollY();

    useEffect(() => {
        controls.start({opacity: y / document.body.scrollHeight});
    }, [y, controls]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <motion.button
            className={styles.up}
            onClick={scrollToTop}
            animate={controls}
            initial={{opacity: 0}}
        >
            <UpIcon/>
        </motion.button>
    );
};