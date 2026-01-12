import {JSX} from "react";
import {TopPageComponentProps} from "@/app/page-components/TopPageComponent/TopPageComponent.props";
import styles from "@/app/page-components/TopPageComponent/TopPageComponent.module.css";
import {Htag, Tag} from "@/components";

export const TopPageComponent = ({firstCategory, page, products}: TopPageComponentProps): JSX.Element => {
    return (
        <>
            <div className={styles.title}>
                <Htag tag="h1">{page.title}</Htag>
                {products && <Tag color="grey" size="m">{products.length}</Tag>}
            </div>
        </>
    );
};