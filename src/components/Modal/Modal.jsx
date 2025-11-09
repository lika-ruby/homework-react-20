import React from "react";
import {
  Backdrop,
  ModalS,
  Title,
  ListD,
  ItemD,
  Text,
  Span,
  Desc,
  CloseBtn,
} from "./Modal";

export const Modal = ({
  id,
  name,
  age,
  height,
  weight,
  habitat,
  description,
  isOpen,
  closeModal,
}) => {
  console.log(isOpen);
  return (
    <Backdrop className={isOpen ? "" : "is-hidden"}>
      <ModalS id={id}>
        <Title>{name}</Title>
        <ListD>
          <ItemD>
            <Text>
              Вік:
              <Span>{age}</Span>
            </Text>
          </ItemD>
          <ItemD>
            <Text>
              Ріст:
              <Span>{height}</Span>
            </Text>
          </ItemD>
          <ItemD>
            <Text>
              Вага:
              <Span>{weight}</Span>
            </Text>
          </ItemD>
          <ItemD>
            <Text>
              Місце проживання:
              <Span>{habitat}</Span>
            </Text>
          </ItemD>
        </ListD>
        <Desc>{description}</Desc>
        <CloseBtn onClick={closeModal}>X</CloseBtn>
      </ModalS>
    </Backdrop>
  );
};
