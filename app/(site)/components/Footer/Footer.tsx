import {JSX} from "react";
import {SidebarProps} from "@/app/(site)/components/Sidebar/Sidebar.props";

export const Footer = ({...props}: SidebarProps): JSX.Element => {
    return (
            <div {...props}>
                Footer
            </div>
    );
}