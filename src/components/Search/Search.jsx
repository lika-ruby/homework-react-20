import React, { useContext } from "react";
import { AnimalContext } from "../../contexts/AnimalContext";
import { Label, Input } from "./Search";

export const Search = () => {
  const { filter, setNewFilter } = useContext(AnimalContext);
  const handleChange = (e) => {
    setNewFilter(e.target.value);
  };

  return (
    <Label>
      Пошук
      <Input
        type="text"
        name="filter"
        value={filter}
        onChange={handleChange}
        placeholder="Search..."
      />
    </Label>
  );
};
