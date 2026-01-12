import {API} from "@/app/api";
import {ProductModel} from "@/interfaces/product.interface";

export async function getProducts(category: string, limit: number): Promise<ProductModel[]> {
    const res: Response = await fetch(API.product.find, {
        method: "POST",
        body: JSON.stringify({category, limit}),
        headers: new Headers({"content-type": "application/json"}),
        next: {revalidate: 60}
    });
    return res.json();
}