import React from "react";
import {
  Name,
  Description,
  Actions,
  Container,
  ButtonContainer,
  ButtonText
} from "./styles.js";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import Button from "./../../UI/Button/index";

const ProductItem = (props) => {
  return (
    <Container>
      <Name>Egberto</Name>
      <Description>{props.description}</Description>
      <Actions>
        <ButtonContainer onPress={props.onEdit}>
          <Entypo name="edit" size={16} color="black" />
          <ButtonText>Edit</ButtonText>

        </ButtonContainer>
        <ButtonContainer right onPress={props.onDelete}>
          <MaterialIcons name="delete" size={16} color="black" />
          <ButtonText>Delete</ButtonText>
        </ButtonContainer>
      </Actions>
    </Container>
  );
};

export default ProductItem;
