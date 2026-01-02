import {JSX} from "react";
import {ButtonProps} from "@/components/Button/Button.props";
import style from "./Button.module.css";
import cn from "classnames";

export const Button = ({children, appearance, className, ...props}: ButtonProps): JSX.Element => {
    return (
        <button className={cn(style.button, className,
            {
                [style.primary]: appearance === "primary",
                [style.ghost]: appearance === "ghost",
            })}
                {...props}
        >
            {children}
        </button>
    );
};