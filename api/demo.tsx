import {IReviewResponse, ReviewFormInterface} from "@/components/ReviewForm/ReviewForm.interface";
import {API} from "@/app/api";

export async function createDemo(formData: ReviewFormInterface, productId: string): Promise<IReviewResponse> {
    const res: Response = await fetch(API.review.createDemo, {
        method: "POST",
        body: JSON.stringify({...formData, productId}),
        headers: new Headers({"content-type": "application/json"})
    });
    return res.json();
}