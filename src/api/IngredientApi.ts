import {IngredientDto} from "../models/api/IngredientDto";
import {ingredientApi} from "../hooks/useAxios";
import {EditIngredientDto} from "../models/api/IngredientEditDto";

export class IngredientApi {
    static getIngredients = async () =>
        await ingredientApi.get<IngredientDto[]>("/")

    static addNewIngredient = async(ingredient: IngredientDto)=>
        await ingredientApi.post("/", ingredient)

    static getIngredientById = async (id: string)=>
    await ingredientApi.get<IngredientDto>("/" + id)

    static updateIngredient = async (id: string, ingredient: EditIngredientDto)=>
        await ingredientApi.patch("/edit/"+ id, ingredient)

    static deleteIngredient = async (id: string)=>
        await ingredientApi.delete<IngredientDto>("/" + id )

}