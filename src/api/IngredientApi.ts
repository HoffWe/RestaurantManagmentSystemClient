import {IngredientDto} from "../models/api/IngredientDto";
import {ingredientApi} from "../hooks/useAxios";

export class IngredientApi {
    static getIngredients = async () =>
        await ingredientApi.get<IngredientDto[]>("/ingredient")
}