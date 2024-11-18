import styled from "styled-components";

const CircleOutline = styled.div`
  width: ${(props) => props.diameter || "400px"};
  height: ${(props) => props.diameter || "400px"};
  border: ${(props) => props.borderWidth || "3px"} solid
    ${(props) => props.borderColor || "#3498db"};
  border-radius: 50%;
  background-color: ${(props) => props.backgroundColor || "transparent"};
  display: flex;
  align-items: center;
  justify-content: center; /* Center the inner circle */
`;

export default CircleOutline;
