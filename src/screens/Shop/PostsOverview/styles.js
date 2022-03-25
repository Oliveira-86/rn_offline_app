import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 35px 20px;
  align-items: center;
  justify-content: space-between;
`;

export const List = styled.FlatList`
  width: 100%;
  padding: 15px;
`;

export const Loading = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Header = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const Centered = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const IconBack = styled.TouchableOpacity`
  margin-right: 20px;
`;
