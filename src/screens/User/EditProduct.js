import React from 'react';
import { Container, Title } from './styles';

import Input from '../../components/UI/Input';

const EditProductScreen = (props) => {

    return (
       <Container>
           <Title>Create Post</Title>
           <Input 
             label='Message'   
           />
       </Container>
    );
};


export default EditProductScreen;