import {Routes, Route} from "react-router-dom";
import {AllWorkers} from "../components/worker/AllWorkers";
import {WorkerPage} from "../components/worker/Worker";
import {Home} from "../components/Home";



export const AppRouter = ()=> {
    return (
    <Routes>
        <Route path='/' element={<Home/>}>
        <Route path='workers' element={<AllWorkers/>}>Pracownicy</Route>
        <Route path='workers/:id' element={<WorkerPage/>}>Autor</Route>
        </Route>
    </Routes>
    )
}