import styled from "styled-components/native";
import { LinearGradient } from 'expo-linear-gradient';


export const LinearGradientContainer = styled(LinearGradient).attrs({
  colors: ["#7159c1", "#9B49c1"],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.View`
  width: 80%;
  max-width: 400px;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
`;

export const Loading = styled.View`
  position: absolute;
  left: 90px;
  top: 6px;
`;

export const ButtonContainer = styled.View`
    margin-top: 10px
    ${({ up }) => up && `margin-top: 35px`}
`;

