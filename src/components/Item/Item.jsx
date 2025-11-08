import { ItemS, Title, ListD, ItemD, Text, Span, Desc } from "./Item";

export const Item = ({
  id,
  name,
  age,
  height,
  weight,
  habitat,
  description,
}) => {
  return (
    <ItemS id={id}>
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
    </ItemS>
  );
};
