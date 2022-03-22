import styled from 'styled-components/native';

export const Container = styled.View`
    border-radius: 8px;
    height: 300px;
    margin: 20px;
`;

export const Image = styled.Image`
    width: 100%;
    height: 60%;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
`;

export const Details = styled.View`
    align-items: center;
    padding: 10px 0px;
    height: 15%;
`;

export const Title = styled.Text`
    font-size: 18px;
    line-height: 20px;
    font-family: ${({theme}) => theme.fonts.bold};
    color: ${({theme}) => theme.colors.gray};
    background: red;
`;

export const Price = styled.Text`
    font-size: 14px;
    line-height: 18px;
    color: ${({theme}) => theme.colors.gray};
    font-family: ${({theme}) => theme.fonts.bold};
`;
