"use client";
import {FirstLeveMenuItem, PageItem} from "@/interfaces/menu.interface";
import {JSX, useContext} from "react";
import styles from "./Menu.module.css";
import cn from "classnames";
import Link from "next/dist/client/link";
import {AppContext} from "@/context/app.context";
import {usePathname} from "next/navigation";
import {firstLevelCategory} from "@/helpers/helpers";

export function Menu(): JSX.Element {
    const {menu, setMenu, firstCategory} = useContext(AppContext);
    const pathname: string = usePathname();

    const openSecondLevel = (secondCategory: string) => {
        setMenu && setMenu(menu.map(m => {
            if (m._id.secondCategory === secondCategory) {
                m.isOpened = !m.isOpened;
            }
            return m;
        }));
    };

    const buildFirstLevel = () => {
        return (
            <>
                {firstLevelCategory.map(m => (
                    <div key={m.route}>
                        <Link href={`/${m.route}`}>
                            <div className={cn(styles.firstLevel, {
                                [styles.firstLevelActive]: m.id === firstCategory
                            })
                            }>
                                {m.icon}
                                <span>{m.name}</span>
                            </div>
                        </Link>
                        {m.id === firstCategory && buildSecondLevel(m)}
                    </div>
                ))}
            </>
        );
    };

    const buildSecondLevel = (menuItem: FirstLeveMenuItem) => {
        return (
            <div className={styles.secondBlock}>
                {menu.map(m => {
                    if (m.pages.map(p => p.alias).includes(pathname.split("/")[2])) {
                        m.isOpened = true;
                    }
                    return (
                        <div key={m._id.secondCategory}>
                            <div className={styles.secondLevel} onClick={() => openSecondLevel(m._id.secondCategory)}>{m._id.secondCategory}</div>
                            <div className={cn(styles.secondLevelBlock, {
                                [styles.secondLevelBlockOpened]: m.isOpened
                            })}>
                                {buildThirdLevel(m.pages, menuItem.route)}
                            </div>
                        </div>
                    )
                })}
            </div>
        );
    };

    const buildThirdLevel = (pages: PageItem[], route: string) => {
        return (
            pages.map(page => (
                <div key={page.alias}>
                    <Link href={`/${route}/${page.alias}`} className={cn(styles.thirdLevel, {
                        [styles.thirdLevelActive]: `/${route}/${page.alias}` === pathname
                    })}>
                        {page.category}
                    </Link>
                </div>
            ))
        );
    };

    return (
        <div className={styles.menu}>
            {buildFirstLevel()}
        </div>
    );
}