import {JSX} from "react";
import styles from "./ReviewForm.module.css";
import cn from "classnames";
import {ReviewFormProps} from "@/components/ReviewForm/ReviewForm.props";
import {Button, Input, Rating, Textarea} from "@/components";
import CloseIcon from "./close.svg";

export const ReviewForm = ({productId, className, ...props}: ReviewFormProps): JSX.Element => {
    return (
        <>
            <div className={cn(styles.reviewFrom, className)} {...props}>
                <Input placeholder="Имя"/>
                <Input placeholder="Заголовок отзыва" className={styles.title}/>
                <div className={styles.rating}>
                    <span>Оценка:</span>
                    <Rating rating={0}/>
                </div>
                <Textarea className={styles.description} placeholder="Текст отзыва"/>
                <div className={styles.submit}>
                    <Button appearance="primary">Отправить</Button>
                    <span
                        className={styles.info}>* Перед публикацией отзыв пройдёт предварительную модерацию и проверку</span>
                </div>
            </div>
            <div className={styles.success}>
                <div className={styles.successTitle}>Ваш отзыв отправлен</div>
                <div>Спасибо, ваш отзыв будет опубликован после проверки.</div>
                <CloseIcon className={styles.close}/>
            </div>
        </>
    );
};