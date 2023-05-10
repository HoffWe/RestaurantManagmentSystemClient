import {NavbarContainer, NavbarLink, NavbarLinks} from "./Navbar.style";
import { Outlet } from "react-router-dom";
import {Link} from "react-router-dom"
export const Navbar = () =>{
    return(
        <>
        <NavbarContainer>
            <NavbarLinks>
                <NavbarLink to={"/"}>Home</NavbarLink>
                <NavbarLink to={"/workers"}>Workers</NavbarLink>
                <NavbarLink to={"/ingredients"}>Ingredients</NavbarLink>
            </NavbarLinks>
        </NavbarContainer>
            <Outlet/>
        </>

    )

}