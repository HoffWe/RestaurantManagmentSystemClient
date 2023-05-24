import styled from "styled-components"
import {TableContainer, Thead, Tr} from "@chakra-ui/react";

export const TableMainContainer = styled(TableContainer)`
  color: #000000;
  border-radius: 3px;
  border: #282c34 solid 1px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 50px;


`;
export const TableHead = styled(Thead)`
  color: #000000;
  
`;
export const TrTable = styled(Tr)`
  background: #afe4fa;


`;

export const ShowButton = styled.button`
  margin: 5px;
  padding: 3px;
  border: solid #72e5be;
  border-radius: 3px;
  background: aquamarine;
  &:hover {
    filter: brightness(85%);
  }
`;


export const EditButton = styled.button`
  margin: 5px;
  padding: 3px;
  border: solid #6a74da;
  border-radius: 3px;
  background: #7f8aff;
  &:hover {
    filter: brightness(85%);
  }
`;

export const DeleteButton = styled.button`
  margin: 5px;
  padding: 3px;
  border: solid #c96387;
  border-radius: 3px;
  background: #ff7fac;
  &:hover {
    filter: brightness(85%);
  }
`;

export const AddButton = styled.button`
  margin: 5px;
  padding-left: 8px;
  padding-right: 8px;
  border: solid #f3f3f3;
  border-radius: 3px;
  background: #fffdfd;
  &:hover {
    filter: brightness(85%);
  }
`;
export const AddIngedientInput = styled.input`
  margin: 10px;
  border-radius: 3px;
  border: solid 1px gray;

`;
export const SubmitButton = styled.input
`
  color: gray;
  padding: 5px;
  border-radius: 3px;
  color: #282c34;
  &:hover{
    background: greenyellow;
  }
`;

export  const  IngredientPageContainer = styled.div
`
  padding: 10px;
  background: aquamarine;
`

export  const  IngredientPhoto = styled.div
    `

`
export  const  IngredientInfoContainer = styled.div
    `

`
export  const  IngredientName = styled.div
    `

`
export  const  IngredientPrice = styled.div
    `

`
export const IngredientAmount = styled.div
`

`
export const BackButton = styled.button
`
  background: coral;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-right: 8px;
  padding-left: 8px;
  border-radius: 3px;
  border: solid 2px chocolate;

`

export const OrderButton = styled.button
`
  background: #afe4fa;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-right: 8px;
  padding-left: 8px;
  border-radius: 3px;
  border: solid 2px #7f8aff;
`

export const PopupContainer = styled.div
`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;

  .popup-wrapper {
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .popup-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`