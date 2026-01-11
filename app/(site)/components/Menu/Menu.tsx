"use client";
import {FirstLeveMenuItem, PageItem} from "@/interfaces/menu.interface";
import {JSX, useContext} from "react";
import CoursesIcon from "./icons/courses.svg";
import ServicesIcon from "./icons/services.svg";
import BooksIcon from "./icons/books.svg";
import ProductsIcon from "./icons/products.svg";
import {TopLevelCategory} from "@/interfaces/page.interface";
import styles from "./Menu.module.css";
import cn from "classnames";
import Link from "next/dist/client/link";
import {AppContext} from "@/context/app.context";
import { usePathname } from 'next/navigation';

const firstLevelCategory: FirstLeveMenuItem[] = [
    {route: "courses", name: "Курсы", icon: <CoursesIcon/>, id: TopLevelCategory.Courses},
    {route: "services", name: "Сервисы", icon: <ServicesIcon/>, id: TopLevelCategory.Services},
    {route: "books", name: "Книги", icon: <BooksIcon/>, id: TopLevelCategory.Books},
    {route: "products", name: "Продукты", icon: <ProductsIcon/>, id: TopLevelCategory.Products}
];

export function Menu(): JSX.Element {
    const {menu, setMenu, firstCategory} = useContext(AppContext);
    const pathname: string = usePathname();

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
                            <div className={styles.secondLevel}>{m._id.secondCategory}</div>
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