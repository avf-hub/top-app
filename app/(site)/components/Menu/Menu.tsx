import {MenuItem} from "@/interfaces/menu.interface";
import {getMenu} from "@/api/menu";
import {JSX} from "react";

export async function Menu(): Promise<JSX.Element> {
    const menu: MenuItem[] = await getMenu(0);
    return (
        <div>
            <div>{menu.length}</div>
        </div>
    );
}