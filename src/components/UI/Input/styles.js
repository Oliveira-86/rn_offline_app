import styled from "styled-components/native";

export const InputDefaultContainer = styled.View`
  width: 100%;
  margin-top: 15px;
  min-height: 150px;
`;

export const Label = styled.Text`
  font-family: ${(props) => props.error ? props.theme.fonts.regular : props.theme.fonts.bold};
  margin-left: 15px;
  font-size: 13px;
  line-height: 18px;
  text-decoration: none;
  color: ${(props) => props.error ? props.theme.colors.error : props.theme.colors.gray_strong};
  margin-bottom: 10px;
`;

export const InputStyle = styled.TextInput.attrs({
  multiline: true,
  textAlignVertical: "top",
})`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.gray};
  border-radius: 5px;
  padding: 5px 15px;
  font-size: 16px;
  line-height: 21px;
  font-family: ${({ theme }) => theme.fonts.bold};
  min-height: 100px;
  border-width: 1px;
  border-color: ${(props) => props.error ?  props.theme.colors.error : props.theme.colors.gray};
`;

export const InputDefaultIcon = styled.Text`
  position: absolute;
  right: 25px;
  top: ${({ opcional }) => (opcional ? "25px" : "20px")};
`;
