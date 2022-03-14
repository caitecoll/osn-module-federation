import { FC, useEffect, useState } from "react";
import { getAnimals } from "./services/AnimalService";

const AnimalList: FC = () => {
  const [animalList, setAnimalList] = useState<any[]>([]);

  useEffect(() => {
    async function getData() {
      setAnimalList(await getAnimals());
    }
    getData();
  }, []);

  return (
    <ul>
      {animalList.map((animal) => (
        <li>
          <b>Name:</b> {animal.name}
          <br />
          <b>Type: </b> {animal.type}
        </li>
      ))}
    </ul>
  );
};

export default AnimalList;
