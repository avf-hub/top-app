"use client";
import {JSX, useState} from "react";
import {Button, Htag, Rating, Tag} from "@/components";
import {Layout} from "@/app/(site)/components/Layout/Layout";

export default function Home(): JSX.Element {
    const [rating, setRating] = useState<number>(4);

    return (
        <Layout>
            <Htag tag="h1">Заголовок</Htag>
            <Button appearance="primary" arrow="right">Кнопка primary</Button>
            <Button appearance="ghost" arrow="down">Кнопка ghost</Button>
            <Tag>Маленький Ghost</Tag>
            <Tag size="m" color="red">Большой Red</Tag>
            <Tag color="primary">Маленький Primary</Tag>
            <Tag size="m" color="green" href="#">Ссылка</Tag>
            <Rating rating={rating} isEditable setRating={setRating}/>
        </Layout>
    );
}
