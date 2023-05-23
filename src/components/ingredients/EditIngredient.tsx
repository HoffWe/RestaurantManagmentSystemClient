import {SubmitHandler, useForm} from "react-hook-form";
import {IngredientApi} from "../../api/IngredientApi";
import {AddIngedientInput, SubmitButton} from "./Ingedidients.styles";
import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {EditIngredientDto} from "../../models/api/IngredientEditDto";


export const EditIngredient = () => {
    const {id} = useParams();

    const {
        handleSubmit,
        register,
        formState: { errors },
        setValue
    } = useForm<EditIngredientDto>();

    useEffect(() => {
        const loadIngredient = async () => {
                const response = await IngredientApi.getIngredientById(id as string);
                const ingredient = response.data;
                setValue("name", ingredient.name);
                setValue("price", ingredient.price);
                setValue("amount", ingredient.amount);
        };

        loadIngredient();
    }, [id, setValue]);

    const onSubmit: SubmitHandler<EditIngredientDto> = async (data: EditIngredientDto) => {
            const response = await IngredientApi.updateIngredient(id as string, data);
    };
        return (
            <div>

                <h1>Add new Ingredient</h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <AddIngedientInput {...register("name", {required: "This is required"})} placeholder={"Name"}/>
                    <p>{errors.name?.message}</p>
                    <AddIngedientInput {...register("price", {required: "This is required"})} placeholder={"Price"}/>
                    <p>{errors.price?.message}</p>
                    <AddIngedientInput {...register("amount", {required: "This is required"})} placeholder={"Amount"}/>
                    <p>{errors.amount?.message}</p>
                    <SubmitButton type={"submit"}/>

                </form>


            </div>
        )
    }