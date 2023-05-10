import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #b7b7b7;
  padding: 8px 16px;
`;

export  const NavbarLinks = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

export const NavbarLink = styled(Link)`
  text-decoration: none;
  color: #232323;
  font-size: 18px;
`;