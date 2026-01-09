import {FirstLeveMenuItem, MenuItem, PageItem} from "@/interfaces/menu.interface";
import {getMenu} from "@/api/menu";
import {JSX} from "react";
import CoursesIcon from "./icons/courses.svg";
import ServicesIcon from "./icons/services.svg";
import BooksIcon from "./icons/books.svg";
import ProductsIcon from "./icons/products.svg";
import {TopLevelCategory} from "@/interfaces/page.interface";
import styles from "./Menu.module.css";
import cn from "classnames";

const firstLevelCategory: FirstLeveMenuItem[] = [
    {route: "courses", name: "Курсы", icon: <CoursesIcon/>, id: TopLevelCategory.Courses},
    {route: "services", name: "Сервисы", icon: <ServicesIcon/>, id: TopLevelCategory.Services},
    {route: "books", name: "Книги", icon: <BooksIcon/>, id: TopLevelCategory.Books},
    {route: "products", name: "Продукты", icon: <ProductsIcon/>, id: TopLevelCategory.Products}
];

export async function Menu(): Promise<JSX.Element> {
    const firstCategory: number = 0;
    const menu: MenuItem[] = await getMenu(firstCategory);

    const buildFirstLevel = () => {
        return (
            <>
                {firstLevelCategory.map(m => (
                    <div key={m.route}>
                        <a href={`/${m.route}`}>
                            <div className={cn(styles.firstLevel, {
                                [styles.firstLevelActive]: m.id === firstCategory
                            })
                            }>
                                {m.icon}
                                <span>{m.name}</span>
                            </div>
                        </a>
                        {m.id === firstCategory && buildSecondLevel(m)}
                    </div>
                ))}
            </>
        );
    };

    const buildSecondLevel = (menuItem: FirstLeveMenuItem) => {
        return (
            <div className={styles.secondBlock}>
                {menu.map(m => (
                    <div key={m._id.secondCategory}>
                        <div className={styles.secondLevel}>{m._id.secondCategory}</div>
                        <div className={cn(styles.secondLevelBlock, {
                            [styles.secondLevelBlockOpened]: m.isOpened
                        })}>
                            {buildThirdLevel(m.pages, menuItem.route)}
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    const buildThirdLevel = (pages: PageItem[], route: string) => {
        return (
            pages.map(page => (
                <a href={`/${route}/${page.alias}`} className={cn(styles.thirdLevel, {
                    [styles.thirdLevelActive]: false
                })}>
                    {page.category}
                </a>
            ))
        );
    };

    return (
        <div className={styles.menu}>
            {buildFirstLevel()}
        </div>
    );
}