import styled from "styled-components/native";

export const InputDefaultContainer = styled.View`
  width: 100%;
  margin-bottom: 15px;
`;

export const Label = styled.Text`
  font-family: ${(props) => props.error ? props.theme.fonts.regular : props.theme.fonts.bold};
  margin-left: 10px;
  font-size: ${({ small }) => small ? '8px' : '13px'};
  line-height: 18px;
  text-decoration: none;
  color: ${(props) => props.error ? props.theme.colors.error : props.theme.colors.gray_strong};
  margin-bottom: 8px;
`;

export const InputStyle = styled.TextInput.attrs({
  multiline: true,
})`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.gray};
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 16px;
  line-height: 16px;
  font-family: ${({ theme }) => theme.fonts.bold};
  min-height: ${({ big  }) => big ? '100px' : '0px' } ;
  border-width: 1px;
  border-color: ${(props) => props.error ?  props.theme.colors.error : props.theme.colors.gray};
`;

