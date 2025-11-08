import React, { useContext, useMemo } from "react";
import { AnimalContext } from "../../contexts/AnimalContext.jsx";
import { Item } from "../Item/Item.jsx";
import { Sect, Title, ListS } from "./List.js";

export const List = () => {
  const { filterAnimals, filter } = useContext(AnimalContext);
  const animals = useMemo(() => {
    console.log("🔍 Викликається фільтрація...");
    return filterAnimals();
  }, [filter]);
  return (
    <Sect>
      <Title>Африканські тварини</Title>
      <ListS>
        {animals.map((ani) => (
          <Item
            key={ani.id}
            id={ani.id}
            name={ani.name}
            age={ani.age}
            height={ani.height}
            weight={ani.weight}
            habitat={ani.habitat}
            description={ani.description}
          />
        ))}
      </ListS>
    </Sect>
  );
};
