import {ForwardedRef, forwardRef, JSX} from "react";
import styles from "./Input.module.css";
import cn from "classnames";
import {InputProps} from "@/components/Input/Input.props";

export const Input = forwardRef(({
                                     className,
                                     ...props
                                 }: InputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
    return (
        <input className={cn(className, styles.input)} ref={ref} {...props}/>
    );
});