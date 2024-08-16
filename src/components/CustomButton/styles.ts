import styled from "styled-components";

export const ButtonContainer = styled.button<{ disabled?: boolean }>`
  background-color: ${(props) => (props.disabled ? "#ccc" : "#007bff")};
  border: none;
  border-radius: 4px;
  color: ${(props) => (props.disabled ? "#666" : "#fff")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  font-size: 16px;
  padding: 10px 20px;
  transition: background-color 0.3s;

  width: 100%;

  &:hover {
    background-color: ${(props) => (props.disabled ? "#ccc" : "#000000")};
  }
`;
