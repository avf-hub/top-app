import {JSX} from "react";
import {SidebarProps} from "@/app/(site)/components/Sidebar/Sidebar.props";
import {Menu} from "@/app/(site)/components/Menu/Menu";
import Logo from "@/app/logo.svg";
import styles from "./Sidebar.module.css";
import cn from "classnames";

export const Sidebar = ({className, ...props}: SidebarProps): JSX.Element => {
    return (
        <div className={cn(className, styles.sidebar, styles.logo)} {...props}>
            <Logo/>
            <div>Поиск</div>
            <Menu/>
        </div>
    );
}