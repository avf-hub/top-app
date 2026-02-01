"use client";
import { ChangeEvent, JSX, useState, KeyboardEvent } from "react";
import styles from "./Search.module.css";
import cn from "classnames";
import { SearchProps } from "@/components/Search/Search.props";
import { Button, Input } from "@/components";
import GlassIcon from "./glass.svg";
import { useRouter } from "next/navigation";

export const Search = ({ className, ...props }: SearchProps): JSX.Element => {
    const [search, setSearch] = useState<string>("");
    const router = useRouter();

    const goToSearch = () => {
        router.push(`/search?q=${search}`);
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            goToSearch();
        }
    };

    return (
        <form className={cn(className, styles.search)} {...props} role="search">
            <Input
                className={styles.input}
                placeholder="Поиск..."
                value={search}
                onChange={(event: ChangeEvent<HTMLInputElement>) => setSearch(event.target.value)}
                onKeyDown={handleKeyDown}
            />
            <Button
                appearance="primary"
                className={styles.button}
                onClick={goToSearch}
                aria-label="Искать по сайту"
            >
                <GlassIcon />
            </Button>
        </form>
    );
};