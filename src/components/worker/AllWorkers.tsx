import {useEffect, useState} from "react";
import {WorkerDto} from "../../models/api/WorkerDto";
import {WorkerApi} from "../../api/WorkerApi";
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'
import {Link} from "react-router-dom";

export const AllWorkers = () => {
    const [workers, setWorkers] = useState<WorkerDto[]>([]);

    useEffect(()=> {
        loadWorkers();
    },[])
    const loadWorkers = async () =>{
        const result = await WorkerApi.getAllWorkers();
        setWorkers(result.data)
    }

    return(
    <TableContainer>
        <Table variant='simple'>
            <TableCaption>All workers</TableCaption>
            <Thead>
                <Tr>
                    <Th>Foto</Th>
                    <Th>Name</Th>
                    <Th>Date of birth</Th>
                    <Th>Position</Th>
                    <Th>Salary</Th>
                </Tr>
            </Thead>
            <Tbody>
                {workers?.map((value) =>{
                return (
                    <Tr key = {value.id}>
                    <Td>{value.photoUrl}</Td>
                        <Link to={`${value.id}`}><Td>{value.name}  {value.lastName}</Td></Link>
                    <Td>{value.dateOfBirth}</Td>
                    <Td>{value.position}</Td>
                    <Td>{value.salary}</Td>
                    </Tr>
                );
                })}
            </Tbody>
        </Table>
    </TableContainer>
    );
}