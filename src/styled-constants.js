import styled from "styled-components";

// STYLED COMPONENTS
const StyledEllipse = styled.div`
  height: 8px;
  width: 8px;
  border-radius: 50%;
`;

// COLOR PALETTE
export const queued = "#e6e5e5";
export const inProgress = "#87e0d9";
export const completed = "#00cf8c";
export const errors = "#fb765c";

// UI ELEMENTS
export const Ellipse = ({ backgroundColor, name }) => {
  return <StyledEllipse style={{ backgroundColor }}>{name}</StyledEllipse>;
};
