import {SubmitHandler, useForm} from "react-hook-form";
import {IngredientDto} from "../../models/api/IngredientDto";
import {IngredientApi} from "../../api/IngredientApi";
import {AddIngedientInput, BackButton, PopupContainer, SubmitButton} from "./Ingedidients.styles";
import {useNavigate} from "react-router-dom";
import {useState} from "react";


export const AddIngredient = () => {
    const [showPopup, setShowPopup] = useState(false);

    const {
        handleSubmit,
        register,
        formState: {errors}
    } = useForm<IngredientDto>();

    const onSubmit: SubmitHandler<IngredientDto> = async (data) => {
        const response = await IngredientApi.addNewIngredient(data);
        setShowPopup(true);

    };
    const navigate = useNavigate();

    const closePopup = () => {
        setShowPopup(false);
        navigate('/ingredients')

    }

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
                {/*<BackButton onClick={()=>{navigate('/ingredients')}}>Back</BackButton>*/}

            </form>

            {showPopup && (
                <PopupContainer>
                    <div className="popup-wrapper">
                        <div className="popup-content">
                            <p>Dodoano produkt</p>
                            <BackButton onClick={closePopup}>Zamknij</BackButton>
                        </div>
                    </div>
                </PopupContainer>

            )}

        </div>
    )
}