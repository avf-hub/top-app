import {JSX} from "react";
import {SidebarProps} from "@/app/(site)/components/Sidebar/Sidebar.props";
import {Menu} from "@/app/(site)/components/Menu/Menu";

export const Sidebar = ({...props}: SidebarProps): JSX.Element => {
    return (
        <div {...props}>
            <Menu/>
        </div>
    );
}