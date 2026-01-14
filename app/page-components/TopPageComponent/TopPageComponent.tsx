import {JSX} from "react";
import {TopPageComponentProps} from "@/app/page-components/TopPageComponent/TopPageComponent.props";
import styles from "@/app/page-components/TopPageComponent/TopPageComponent.module.css";
import {Advantages, HhData, Htag, Sort, Tag} from "@/components";
import {TopLevelCategory} from "@/interfaces/page.interface";
import { SortEnum } from "@/components/Sort/Sort.props";

export const TopPageComponent = ({firstCategory, page, products}: TopPageComponentProps): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <Htag tag="h1">{page.title}</Htag>
                {products && <Tag color="grey" size="m">{products.length}</Tag>}
                <Sort sort={SortEnum.Rating} setSort={() => ({})}/>
            </div>
            <div>
                {products && products.map(prod => <div key={prod._id}>{prod.title}</div>)}
            </div>
            <div className={styles.hhTitle}>
                <Htag tag="h2">Вакансии - {page.category}</Htag>
                <Tag color="red" size="m">hh.ru</Tag>
            </div>
            {firstCategory === TopLevelCategory.Courses && page.hh && <HhData {...page.hh} />}
            {page.advantages && page.advantages.length > 0 && <>
                <Htag tag="h2">Преимущества</Htag>
                <Advantages advantages={page.advantages}/>
            </>
            }
            {page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{__html: page.seoText}}/>}
            <Htag tag="h2">Получаемые навыки</Htag>
            {page.tags.map(tag => <Tag key={tag} color={"primary"}>{tag}</Tag>)}
        </div>
);
};