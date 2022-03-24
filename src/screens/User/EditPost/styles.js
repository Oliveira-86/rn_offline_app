import styled from "styled-components/native";

export const Container = styled.Pressable`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Header = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const IconBack = styled.TouchableOpacity`
  margin-right: 20px;
`;
