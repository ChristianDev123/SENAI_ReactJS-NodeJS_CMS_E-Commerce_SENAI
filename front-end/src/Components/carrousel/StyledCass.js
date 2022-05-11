import styled from "styled-components";

export const Wrapper = styled.div`
  height:100%;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap:5px; 
`;

export const CarrouselWrapper = styled.div`
  height:100%;
  width:85%;
  border-radius: 15px;
  background-color: var(--dark-color_800);
  color:white;
  display:flex;
  align-items:center;
  justify-content:center;
`;

export const Image = styled.img`
  padding:5px 0;
  width:72px;
  height:72px;
  cursor:pointer;
`;
