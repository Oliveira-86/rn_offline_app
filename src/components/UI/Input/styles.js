import styled from 'styled-components/native';

export const InputDefaultContainer = styled.View`
    width: 100%;
    border-bottom-width: 1px;
    border-bottom-color: ${({theme}) => theme.colors.gray_strong};
    margin-top: 15px;
    height: 50px;
`;

export const Label = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    margin-left: 15px;
    font-size: 13px;
    line-height: 18px;
    text-decoration: none;
    color: ${({theme}) => theme.colors.gray_strong};
`;

export const InputStyle = styled.TextInput.attrs({
    placeholderTextColor: `${({ theme }) => theme.colors.gray}`,
})`
    flex: 1;
    padding: 12px 15px;
    height: 50px;
    border-radius: 4px;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.gray_strong};
    background: ${({ theme }) => theme.colors.white};
    border: 2px solid
        ${props => (props.error ? props.theme.error : props.theme.white)};
`;

export const InputDefaultIcon = styled.Text`
    position: absolute;
    right: 25px;
    top: ${({opcional}) => (opcional ? '25px' : '20px')};
`;
