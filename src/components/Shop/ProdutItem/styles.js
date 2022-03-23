import styled from "styled-components/native";

export const Container = styled.View`
  padding: 20px;
  border-radius: 4px;
  background: #fff;
  margin-bottom: 15px;
`;
export const Name = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.black};
`;

export const Description = styled.Text.attrs({
  numberOfLines: 2,
})`
  color: ${({ theme }) => theme.colors.gray};
  margin-top: 5px;
  line-height: 20px;
`;

export const Actions = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ButtonContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  ${({ right }) => right && `margin-left: 10px`}
`;

export const ButtonText = styled.Text`
  margin-left: 6px
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.black};
`;
