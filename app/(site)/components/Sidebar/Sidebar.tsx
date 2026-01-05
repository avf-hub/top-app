import {JSX} from "react";
import {SidebarProps} from "@/app/(site)/components/Sidebar/Sidebar.props";

export const Sidebar = ({...props}: SidebarProps): JSX.Element => {
    return (
            <div {...props}>
                Sidebar
            </div>
    );
}