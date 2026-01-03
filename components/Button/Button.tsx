import {JSX} from "react";
import {ButtonProps} from "@/components/Button/Button.props";
import style from "./Button.module.css";
import cn from "classnames";
import ArrowIcon from "./arrow.svg";

export const Button = ({children, appearance, arrow = "none", className, ...props}: ButtonProps): JSX.Element => {
    return (
        <button className={cn(style.button, className,
            {
                [style.primary]: appearance === "primary",
                [style.ghost]: appearance === "ghost",
            })}
                {...props}
        >
            {children}
            {arrow !== "none" && <span
                className={cn(style.arrow, {
                    [style.down]: arrow === "down"
                })}>
                <ArrowIcon/>
            </span>}
        </button>
    );
};