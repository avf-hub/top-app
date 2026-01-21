"use client";

import {JSX} from "react";
import styles from "./ReviewForm.module.css";
import cn from "classnames";
import {ReviewFormProps} from "@/components/ReviewForm/ReviewForm.props";
import {Button, Input, Rating, Textarea} from "@/components";
import CloseIcon from "./close.svg";
import {Controller, useForm} from "react-hook-form";
import {ReviewFormInterface} from "@/components/ReviewForm/ReviewForm.interface";

export const ReviewForm = ({productId, className, ...props}: ReviewFormProps): JSX.Element => {
    const {register, control, handleSubmit, formState: {errors}} = useForm<ReviewFormInterface>();

    const onSubmit = (data: ReviewFormInterface) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={cn(styles.reviewFrom, className)} {...props}>
                <Input
                    placeholder="Имя"
                    {...register("name", {required: {value: true, message: "Заполните имя"}})}
                    error={errors.name}
                />
                <Input
                    placeholder="Заголовок отзыва"
                    className={styles.title}
                    {...register("title", {required: {value: true, message: "Заполните заголовок"}})}
                    error={errors.title}
                />
                <div className={styles.rating}>
                    <span>Оценка:</span>
                    <Controller
                        control={control}
                        name={"rating"}
                        rules={{required: {value: true, message: "Укажите рейтинг"}}}
                        render={({field}) => (
                            <Rating
                                isEditable
                                rating={field.value}
                                setRating={field.onChange}
                                ref={field.ref}
                                error={errors.rating}
                            />
                        )}/>
                </div>
                <Textarea
                    className={styles.description}
                    placeholder="Текст отзыва"
                    {...register("description", {required: {value: true, message: "Заполните описание"}})}
                    error={errors.description}
                />
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
        </form>
    );
};