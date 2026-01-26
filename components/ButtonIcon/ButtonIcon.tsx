import {JSX} from "react";
import style from "./ButtonIcon.module.css";
import cn from "classnames";
import {ButtonIconProps, icons} from "@/components/ButtonIcon/ButtonIcon.props";

export const ButtonIcon = ({
                               appearance,
                               icon,
                               className,
                               ...props
                           }: ButtonIconProps): JSX.Element => {
    const IconComponent = icons[icon];

    return (
        <button className={cn(style.button, className,
            {
                [style.primary]: appearance === "primary",
                [style.white]: appearance === "white"
            })}
                {...props}
        >
            <IconComponent/>
        </button>
    );
};