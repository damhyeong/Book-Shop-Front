import {httpClient} from "./http";
import {Category} from "../model/category.model";

export const fetchCategory = async () => {
    const response = await httpClient.get<Category[]>("/category");
    return response.data;
}