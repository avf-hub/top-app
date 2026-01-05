import {JSX} from "react";
import {HeaderProps} from "@/app/(site)/components/Header/Header.props";

export const Header = ({...props}: HeaderProps): JSX.Element => {
    return (
        <div {...props}>
            Header
        </div>
    );
}