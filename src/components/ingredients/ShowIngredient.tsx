import {useEffect, useState} from "react";
import {IngredientDto} from "../../models/api/IngredientDto";
import {useNavigate, useParams} from "react-router-dom";
import {IngredientApi} from "../../api/IngredientApi";
import {
    IngredientInfoContainer,
    IngredientName,
    IngredientPageContainer,
    IngredientPrice,
    IngredientAmount,
    IngredientPhoto,
  BackButton
} from "./Ingedidients.styles";

export const ShowIngredient = () => {
    const [ingredient, setIngredient] = useState<IngredientDto>()

    const {id} = useParams();

    useEffect(() =>{
        if (id) {
            loadIngredient()
        }
    }, [id]);

    const loadIngredient = async () =>{
        const result = await IngredientApi.getIngredientById(id as string)
        setIngredient(result.data)
    }
    const navigate = useNavigate();

    return(



        <IngredientPageContainer>
            <IngredientPhoto/>
            <div>

            <IngredientInfoContainer >

                    <IngredientName>{ingredient?.name}</IngredientName>
                    <IngredientPrice>{ingredient?.price}</IngredientPrice>
                    <IngredientAmount>{ingredient?.amount}</IngredientAmount>

            </IngredientInfoContainer>

            </div>

            <BackButton onClick={()=>{navigate('/ingredients')}}>Back</BackButton>



        </IngredientPageContainer>
    )
}