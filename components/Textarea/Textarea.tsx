import {ForwardedRef, forwardRef, JSX} from "react";
import styles from "./Textarea.module.css";
import cn from "classnames";
import {TextareaProps} from "@/components/Textarea/Textarea.props";

export const Textarea = forwardRef(({
                                        className,
                                        ...props
                                    }: TextareaProps, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element => {
    return (
        <textarea className={cn(className, styles.textarea)} ref={ref} {...props}/>
    );
});