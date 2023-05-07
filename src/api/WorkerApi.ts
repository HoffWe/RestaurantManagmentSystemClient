import {workerApi} from "../hooks/useAxios";
import {WorkerDto} from "../models/api/WorkerDto";
export class WorkerApi {
    static getWorkerById = async (params: string) =>
        await workerApi.get<WorkerDto> ("/"+params)
    static getAllWorkers = async () =>
        await workerApi.get<WorkerDto[]>("/");

}