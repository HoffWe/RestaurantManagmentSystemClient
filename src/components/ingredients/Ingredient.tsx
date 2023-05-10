import {useEffect, useState} from "react";
import {IngredientDto} from "../../models/api/IngredientDto";
import {IngredientApi} from "../../api/IngredientApi";
import {Table,Th,Td, TableCaption, TableContainer, Tbody, Thead, Tr} from "@chakra-ui/react";


export const Ingredient = () => {
    const [ ingredient, setIngredient ] = useState<IngredientDto[]>([]);

    useEffect(()=>{
        loadIngredients();
    },[]);


    const loadIngredients = async () => {
        const result = await IngredientApi.getIngredients();
        setIngredient(result.data)
    }
    return(
        <>
            <TableContainer>
                <Table variant='simple'>
                    <TableCaption>All Ingredients</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Price</Th>
                            <Th>Amount</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {ingredient?.map((value) =>{
                            return (
                                <Tr key = {value.id}>
                                    <Td>{value.name} </Td>
                                    <Td>{value.price}</Td>
                                    <Td>{value.amount}</Td>
                                </Tr>
                            );
                        })}
                    </Tbody>
                </Table>
            </TableContainer>

        </>
    )
}