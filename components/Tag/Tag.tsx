import {JSX} from "react";
import cn from "classnames";
import style from "@/components/Tag/Tag.module.css";
import {TagProps} from "@/components/Tag/Tag.props";

export const Tag = ({size = "s", children, color = "ghost", href, className, ...props}: TagProps): JSX.Element => {
    return (
        <div className={cn(style.tag, className,
            {
                [style.m]: size === "m",
                [style.s]: size === "s",
                [style.ghost]: color === "ghost",
                [style.red]: color === "red",
                [style.grey]: color === "grey",
                [style.green]: color === "green",
                [style.primary]: color === "primary",
            })}
             {...props}
        >
            {
                href ? <a href={href}>{children}</a> : <>{children}</>
            }
        </div>
    );
};