
import {
    WorkerBasicInfo,
    WorkerBasicInfoContainer,
    WorkerInfoContainer, WorkerName,
    WorkerPageContainer,
    WorkerPhoto, WorkerPosition
} from "./worker.styles";
import {WorkerDto} from "../../models/api/WorkerDto";
import {useEffect, useState} from "react";
import {useParams } from "react-router-dom";

import {WorkerApi} from "../../api/WorkerApi";

export const WorkerPage= () => {
    const [worker, setWorker] = useState<WorkerDto>();

    const {id} = useParams();
    useEffect(() => {
        loadWorker()
    })

    const loadWorker = async () => {
        const result = await WorkerApi.getWorkerById(id!);
        setWorker(result.data)
    }
    return (
        <WorkerPageContainer>
            <WorkerPhoto src={worker?.photoUrl} alt="Worker's Photo" />
            <WorkerInfoContainer>
                <WorkerBasicInfoContainer>
                    {/*<WorkerName>{`${worker?.firstName} ${worker?.lastName}`}</WorkerName>*/}
                    <WorkerPosition>{worker?.position}</WorkerPosition>
                </WorkerBasicInfoContainer>
                <WorkerBasicInfo>Date of Birth: {worker?.dateOfBirth.toDateString()}</WorkerBasicInfo>
                <WorkerBasicInfo>Salary: {worker?.salary}</WorkerBasicInfo>
            </WorkerInfoContainer>
        </WorkerPageContainer>
    );
};