import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const List = styled.FlatList`
    width: 100%;
    padding: 15px;
`;


export const Loading = styled.Text`
    font-size: 16px;
    font-family: ${({ theme }) => theme.fonts.bold};
`;