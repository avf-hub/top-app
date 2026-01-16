import {JSX} from "react";
import styles from "./Textarea.module.css";
import cn from "classnames";
import {TextareaProps} from "@/components/Textarea/Textarea.props";

export const Textarea = ({className, ...props}: TextareaProps): JSX.Element => {
    return (
        <textarea className={cn(className, styles.textarea)} {...props}/>
    );
};