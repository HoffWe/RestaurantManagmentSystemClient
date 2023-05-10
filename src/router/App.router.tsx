import {Routes, Route} from "react-router-dom";
import {AllWorkers} from "../components/worker/AllWorkers";
import {WorkerPage} from "../components/worker/Worker";
import {Home} from "../components/Home";
import {Navbar} from "../components/Navbar";
import {Ingredient} from "../components/ingredients/Ingredient";



export const AppRouter = ()=> {
    return (
    <Routes>
        <Route path="/" element={<Navbar />}>
        <Route index element={<Home/>}/>
        <Route path='workers' element={<AllWorkers/>}>Pracownicy</Route>
        <Route path='workers/:id' element={<WorkerPage/>}>Autor</Route>
        <Route path='ingredients' element={<Ingredient/>}>Ingredient</Route>
        </Route>
    </Routes>
    )
}