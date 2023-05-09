import {ingredientApi} from "./useAxios";
import {IngredientDto} from "./IngredientDto";

export class IngredientApi {
    static getIngredients = async () =>
        await ingredientApi.get<IngredientDto[]>("/ingredient")
}