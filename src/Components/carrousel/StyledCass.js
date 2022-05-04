import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap:5px;
`;

export const CarrouselWrapper = styled.div`
  height: calc(100% - 110px);
  width:85%;
  border-radius: 15px;
  background-color: var(--dark-color_800);
`;

export const Image = styled.img`
  padding:5px 0;
  width:72px;
  height:72px;
  cursor:pointer;
`;
