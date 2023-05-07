import styled from "styled-components";



export const WorkerPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px;
  padding: 20px;
  border: 2px solid #ccc;
  border-radius: 5px;
`;

export const WorkerPhoto = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 20px;
`;

export const WorkerInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const WorkerName = styled.h1`
  font-size: 24px;
  margin: 0;
`;

export const WorkerPosition = styled.p`
  font-size: 16px;
  margin: 0;
`;

export const WorkerBasicInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

export const WorkerBasicInfo = styled.p`
  font-size: 16px;
  margin: 0;
`;