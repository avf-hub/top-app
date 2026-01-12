import {JSX} from "react";
import {HeaderProps} from "@/app/components/Header/Header.props";

export const Header = ({...props}: HeaderProps): JSX.Element => {
    return (
        <div {...props}>
            Header
        </div>
    );
}