import styled from 'styled-components/native';

export const StyledButton = styled.TouchableOpacity`
    position: relative;
    padding: ${({large}) => (large ? '10px' : '5px')};
    border-radius: 4px;
    font-weight: 700;
    width: 100%;
    justify-content: center;
    align-items: center;
    ${props => {
        switch (props.variant) {
            case 'disabled':
                return `background-color: ${props.theme.colors.gray}`;
            case 'outlined':
                return `background-color: transparent`;
            case 'outlinedSecondary':
                return `background-color: transparent`;
            default:
                return `background-color: ${props.theme.colors.primary}`;
        }
    }};
    ${props => {
        switch (props.variant) {
            case 'disabled':
                return 'border: 1px solid transparent';
            case 'outlined':
                return `border: 1px solid ${props.theme.colors.white}`;
            case 'outlinedSecondary':
                return `border: 1px solid ${props.theme.colors.secondary}`;
            default:
                return `border: 1px solid ${props.theme.colors.primary}`;
        }
    }};
`;

export const ButtonText = styled.Text`
    font-size: 13px;
    text-align: center;
    font-family: ${({theme}) => theme.fonts.bold};
    text-transform: uppercase;
    
    ${props => {
        switch (props.variant) {
            case 'outlinedSecondary':
                return `color: ${props.theme.colors.secondary}`;
            default:
                return `color: ${props.theme.colors.white}`;
        }
    }};
`;