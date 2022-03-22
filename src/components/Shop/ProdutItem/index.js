import React from 'react'
import { Title, Price, Details, Image, Container } from './styles.js';
import Card from '../../UI/Card';

const ProductItem = (props) => {
    return (
        <Container
            onPress={props.onSelected}
            activeOpacity={0.7}
        >
            <Card >
                <Image
                    source={{ uri: props.image }}
                />

                <Details>
                    <Title>{props.title}</Title>
                    <Price>${props.price}</Price>
                </Details>

                {/* <View>
                    {props.children}
                </View> */}
            </Card>
        </Container>

    )
}

export default ProductItem