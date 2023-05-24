import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {IngredientDto} from "../../models/api/IngredientDto";
import {IngredientApi} from "../../api/IngredientApi";
import {Table, Th, Td, Tbody, Tr} from "@chakra-ui/react";
import {
    AddButton, BackButton,
    DeleteButton,
    EditButton, OrderButton, PopupContainer,
    ShowButton,
    TableHead,
    TableMainContainer,
    TrTable
} from "./Ingedidients.styles";


export const Ingredient = () => {
    const [ingredient, setIngredient] = useState<IngredientDto[]>([]);
    const [showDeletePopup, setShowDeletePopup] = useState(false);
    const [selectedIngredientId, setSelectedIngredientId] = useState('');


    useEffect(() => {
        loadIngredients();
    }, []);


    const loadIngredients = async () => {
        const result = await IngredientApi.getIngredients();
        setIngredient(result.data.sort((a, b) => a.name.localeCompare(b.name)).map((ingredient) => {
            return {
                ...ingredient
            }
        }))
    }

    const navigate = useNavigate();

    const handleDelete = async (id: string) => {
        const result = await IngredientApi.deleteIngredient(id);
        setIngredient(ingredient.filter((i) => i.id !== id))
        setShowDeletePopup(false);
    }

    const openDeletePopup = (id: string) => {
        setSelectedIngredientId(id);
        setShowDeletePopup(true);
    };

    const closeDeletePopup = () => {
        setShowDeletePopup(false);
    };

    return (
        <>
            <TableMainContainer>
                <Table variant='simple'>
                    <TableHead>All Ingredients</TableHead>

                    <TrTable>
                        <Th>Name</Th>
                        <Th>Price</Th>
                        <Th>Amount</Th>
                    </TrTable>

                    <Tbody>
                        {ingredient?.map((value) => {
                            return (
                                <Tr key={value.id}>
                                    <Td>{value.name} </Td>
                                    <Td>{value.price}</Td>
                                    <Td>{value.amount}</Td>
                                    <OrderButton>Order</OrderButton>
                                    <ShowButton onClick={() => {
                                        navigate(`${value.id}`)
                                    }}>Show</ShowButton>
                                    <EditButton onClick={() => {
                                        navigate(`edit/${value.id}`)
                                    }}>Edit</EditButton>
                                    <DeleteButton onClick={() => openDeletePopup(value.id)}>Delete</DeleteButton>
                                </Tr>
                            );
                        })}
                    </Tbody>
                    <AddButton onClick={() => {
                        navigate('addIngredient')
                    }}>Add</AddButton>
                </Table>
            </TableMainContainer>
            {showDeletePopup && (
                <PopupContainer>
                    <div className="popup-wrapper">
                        <div className="popup-content">
                            <p>Czy na pewno chcesz usunąć ten składnik?</p>
                            <BackButton onClick={closeDeletePopup}>Anuluj</BackButton>
                            <DeleteButton onClick={() => handleDelete(selectedIngredientId)}>Usuń</DeleteButton>
                        </div>
                    </div>
                </PopupContainer>
            )}
        </>
    )
}