import {JSX} from "react";
import styles from "./Product.module.css";
import cn from "classnames";
import {ProductProps} from "@/components/Product/Product.props";

export const Product = ({product, className, ...props}: ProductProps): JSX.Element => {
    return (
        <div>
            {product.title}
        </div>
    );
};